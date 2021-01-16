import React from 'react';

import SearchBox from '../components/SearchBox';
import Layout from '../components/Layout';

const Search = () => {
  return (
    <Layout>
      <SearchBox 
        onSubmit={(e) => console.log(e.target.value)}
      />
    </Layout>
    
  )
}

export default Search;