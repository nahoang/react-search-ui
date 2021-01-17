import React from 'react';

import SearchBox from '../components/SearchBox';
import Layout from '../components/Layout';
import Results from '../components/Results';
import { doSearch } from '../libs/api';

const Search = () => {
  const [items, setItems] = React.useState([])
  const onSearch = (text) => {
    doSearch(text).then(json => {
      setItems(json.hits)
    });
  }
  return (
    <Layout
      bodyContent={
      <Results titleField="title" urlField="link" 
        results={items}
      />}
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