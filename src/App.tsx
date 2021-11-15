import React from 'react';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider} from '@apollo/client';
import { GlobalStyle } from './Styles/global';
import { GlobalContext } from './Context/GlobalContext';
import { Routing } from './Routing/Routing';

const client = new ApolloClient({
  uri: 'https://pensive-kowalevski-eedfe0.netlify.app/',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
    <GlobalContext>
      <GlobalStyle />
        <Routing />
    </GlobalContext>    
    </ApolloProvider>
  );
}

export default App;
