import ElasticsearchAPIConnector from '@elastic/search-ui-elasticsearch-connector';

export const connector = new ElasticsearchAPIConnector({
  cloud: {
    id: process.env.REACT_APP_ELASTICSEARCH_CLOUD_ID!
  },
  apiKey: process.env.REACT_APP_ELASTICSEARCH_API_KEY!,
  index: 'locations'
});
