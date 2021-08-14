import gql from 'graphql-tag';

const CHARACTER_READ_QUERY = gql`
  query Characters($currentPage: Int) {
    characters(page: $currentPage) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export default CHARACTER_READ_QUERY;
