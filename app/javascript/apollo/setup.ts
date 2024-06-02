import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const getAuthenticityToken = () => {
  const token = document.querySelector('meta[name="csrf-token"]');
  if (token && token instanceof window.HTMLMetaElement) {
    return token.content;
  }

  return '';
};

const initApolloClient = () => {
  return new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
    headers: {
      'X-CSRF-Token': getAuthenticityToken(),
      'X-Requested-With': 'XMLHttpRequest',
    },
    connectToDevTools: process.env.NODE_ENV === 'development',
  });
};

export const client = initApolloClient();
