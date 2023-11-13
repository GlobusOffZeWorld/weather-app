import '@elastic/react-search-ui-views/lib/styles/styles.css';

import { ErrorBoundary, SearchBox, SearchProvider } from '@elastic/react-search-ui';
import { FC, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FORECAST_LENGTH } from '../../constants';
import { forecastFetchRequest } from '../../redux/slices/forecastSlice';
import { setUserLocation } from '../../redux/slices/userLocationSlice';
import { RootState } from '../../redux/store';
import { formatDate, getForecastInterval } from '../../utils/dateUtils';
import { Button } from '../Common';
import { SearchBar } from '../Common/SearchBar';
import { ESConfig } from './ESConfig';
import { SearchContainer } from './style';

interface AutocompleteField {
  city: {
    raw: string;
  };
  geolocation: {
    raw: {
      latitude: string;
      longitude: string;
    };
  };
}

export const SearchCity: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const userLocation = useSelector((state: RootState) => state.userLocation);
  const dispatch = useDispatch();

  const generateAutocomplete = useCallback((getAutocomplete: () => JSX.Element) => {
    if (getAutocomplete()) {
      return getAutocomplete();
    }
    if (inputRef.current && inputRef.current.value !== '') {
      return (
        <div
          role="listbox"
          aria-labelledby="downshift-1-label"
          id="downshift-1-menu"
          className="sui-search-box__autocomplete-container"
        >
          <div>
            <ul className="sui-search-box__results-list">
              <li
                id="downshift-1-item-0"
                role="option"
                aria-selected="false"
              >
                <span>No city found:(</span>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }, []);

  const handleSearchButtonClick = () => {
    if (userLocation?.latitude && userLocation?.longitude) {
      const [startDate, endDate] = getForecastInterval(FORECAST_LENGTH);
      dispatch(
        forecastFetchRequest({
          userLocation,
          startDate: formatDate(startDate),
          endDate: formatDate(endDate)
        })
      );
    }
  };

  const handleSelectAutocomplete = ({ city, geolocation }: AutocompleteField) => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    dispatch(
      setUserLocation({
        cityName: city.raw,
        latitude: +geolocation.raw.latitude,
        longitude: +geolocation.raw.longitude
      })
    );
  };

  return (
    <SearchProvider config={ESConfig}>
      <ErrorBoundary>
        <SearchBox
          inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
            <SearchContainer>
              <SearchBar
                {...getInputProps({
                  placeholder: userLocation.cityName,
                  value: undefined,
                  forwardedRef: inputRef
                })}
              />
              {generateAutocomplete(getAutocomplete)}
              <Button
                {...getButtonProps({
                  datatype: 'search-btn',
                  onClick: handleSearchButtonClick
                })}
              >
                Search
              </Button>
            </SearchContainer>
          )}
          autocompleteMinimumCharacters={2}
          autocompleteResults={{
            linkTarget: '_blank',
            titleField: 'city',
            urlField: ''
          }}
          debounceLength={0}
          shouldClearFilters={true}
          onSelectAutocomplete={handleSelectAutocomplete}
        />
      </ErrorBoundary>
    </SearchProvider>
  );
};
