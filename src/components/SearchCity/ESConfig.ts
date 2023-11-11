import { connector } from './ESConnector';

export const ESConfig = {
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
        'city.suggest': {
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
