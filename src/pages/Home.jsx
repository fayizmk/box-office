import React, { useState } from 'react';
import { MainPageLayout } from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onInputchange = ev => {
    setInput(ev.target.value);
    console.log(ev);
  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=men

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <MainPageLayout>
      <input
        type="text "
        onChange={onInputchange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
