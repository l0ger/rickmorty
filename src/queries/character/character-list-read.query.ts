import gql from 'graphql-tag';

const CHARACTER_READ_QUERY = gql`
  query Characters($currentPage: Int, $filter: FilterCharacter) {
    characters(page: $currentPage, filter: $filter) {
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
