'use client';

import { useState, useEffect, ChangeEvent } from 'react';

import PromptCard from './PromptCard';

const Feed = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: ChangeEvent) => {};

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
