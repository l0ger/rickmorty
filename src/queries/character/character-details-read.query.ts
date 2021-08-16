import gql from 'graphql-tag';

const CHARACTER_DETAILS_READ_QUERY = gql`
  query Characters($id: ID!) {
    character(id: $id) {
      name
      image
      gender
      species
      episode {
        id
        name
        air_date
      }
    }
  }
`;

export default CHARACTER_DETAILS_READ_QUERY;
