import React from 'react';

import SearchBox from '../components/SearchBox';
import Layout from '../components/Layout';
import Results from '../components/Results';

const Search = () => {
  return (
    <Layout
      bodyContent={<Results titleField="title" urlField="link" />}
    >
      <SearchBox 
        onSubmit={(e) => console.log(e.target.value)}
      />
    </Layout>
    
  )
}

export default Search;