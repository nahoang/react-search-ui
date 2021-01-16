import React from 'react';

import SearchBox from '../components/SearchBox';
import Layout from '../components/Layout';
import Results from '../components/Results';
import { doSearch } from '../libs/api';

const Search = () => {
  const onSearch = (text) => {
    doSearch(text).then(json => {
      console.log('json', json);
    });
  }
  return (
    <Layout
      bodyContent={<Results titleField="title" urlField="link" />}
    >
      <SearchBox 
        onSubmit={(text) => {
          onSearch(text);
        }}
      />
    </Layout>
    
  )
}

export default Search;