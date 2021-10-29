import React, { useEffect, useState } from 'react';
import Link from "./Link"


function Youtube(props){
  const { setState } = props;
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    setState(state => {
      handleSomething(state.messages)
      return state;
    })
  }, [])

  useEffect(() => {
    console.log(searchWord)
  }, [searchWord])

  const handleSomething = (item) => {
    const userInput = item.filter(data => {
      if(data.type === 'user') {
        return true
      } else {
        return false
      }
    })
    setSearchWord(userInput[userInput.length - 1]);
  }

  const getUrl = () => {
    return `https://www.youtube.com/results?search_query=${searchWord.message}`;
  };

  return <Link url={getUrl()} title={"search Youtube for videos"} />;
  };


export default Youtube;
