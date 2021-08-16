import {ApolloError} from '@apollo/client';
import {
  NET_WORK_ERROR,
  INTERNAL_SERVER_ERROR,
} from '../../constants/error.message.constants';

export const getApolloErrorMessage = (
  error: ApolloError | undefined,
): string | undefined => {
  if (!error) {
    return error;
  }
  if (error.networkError && error.message) {
    return error.message;
  } else if (error.graphQLErrors) {
    return INTERNAL_SERVER_ERROR;
  }
  return NET_WORK_ERROR;
};
