import { FC, useEffect, useRef, useState } from "react"
import { Button } from "../Common"
import { SearchBar } from "../Common/SearchBar"
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { ErrorBoundary, SearchBox, SearchProvider } from "@elastic/react-search-ui";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";
import { FORECAST_LENGTH } from "../../constants"
import { forecastFetchRequest } from "../../redux/slices/forecastSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setUserLocation } from "../../redux/slices/userLocationSlice";
import { DateContainer, H1, SearchContainer, Wrapper } from "./style";
import { formatDate } from "../../utils/formatDate";

const connector = new ElasticsearchAPIConnector({
  cloud: {
    id: process.env.REACT_APP_ELASTICSEARCH_CLOUD_ID!
  },
  apiKey: process.env.REACT_APP_ELASTICSEARCH_API_KEY!,
  index: "locations"
});

const ESConfig = {
  searchQuery: {
    search_fields: {
      city: {
        weight: 3
      }
    },
    result_fields: {
      city: {
        snippet: {}
      }
    }
  },
  autocompleteQuery: {
    results: {
      resultsPerPage: 5,
      search_fields: {
        "city.suggest": {
          weight: 3
        }
      },
      result_fields: {
        city: {
          snippet: {
            size: 100,
            fallback: true
          }
        },
        geolocation: {
          snippet: {}
        }
      }
    }
  },
  apiConnector: connector,
  alwaysSearchOnInitialLoad: false,
  trackUrlState: false
};

export const Header: FC = () => {
  const [searchBarInput, setSearchBarInput] = useState('Search city...')
  const inputRef = useRef<HTMLInputElement>(null)

  const userLocation = useSelector((state: RootState) => state.userLocation)
  const dispatch = useDispatch()

  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }))

  const [date, setDate] = useState<string>(new Date().toLocaleDateString("en-GB", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }))
      setDate(new Date().toLocaleDateString("en-GB", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Wrapper>
      <DateContainer>
        <H1>{currentTime}</H1>
        <H1>{date}</H1>
      </DateContainer>
      <SearchProvider config={ESConfig}>
        <ErrorBoundary>
          <SearchBox
            inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
              <SearchContainer>
                <SearchBar
                  {...getInputProps({
                    placeholder: searchBarInput,
                    value: undefined,
                    forwardedRef: inputRef,
                  })}
                />
                {getAutocomplete()}
                <Button
                  {...getButtonProps({
                    onClick: () => {
                      if (userLocation?.latitude && userLocation?.longitude) {
                        const startDate = new Date()
                        const endDate = new Date()
                        endDate.setDate(startDate.getDate() + FORECAST_LENGTH)
                        dispatch(forecastFetchRequest({ userLocation, startDate: formatDate(startDate), endDate: formatDate(endDate) }))
                      }
                    }
                  })}
                >
                  Search
                </Button>
              </SearchContainer>
            )}
            autocompleteMinimumCharacters={2}
            autocompleteResults={{
              linkTarget: "_blank",
              titleField: "city",
              urlField: '',
            }}
            debounceLength={0}
            shouldClearFilters={true}
            onSelectAutocomplete={(
              { city, geolocation }: any
            ) => {
              if (inputRef.current) {
                inputRef.current.value = ''
              }
              dispatch(setUserLocation({ latitude: +geolocation.raw.latitude, longitude: +geolocation.raw.longitude }))
              setSearchBarInput(city.raw)
            }}
          />
        </ErrorBoundary>
      </SearchProvider>
    </Wrapper>
  )
}

