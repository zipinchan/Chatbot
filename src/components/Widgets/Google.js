import React, { useEffect, useState } from 'react';
import "./Phone.css";
import Link from "./Link"


function Google(props){
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
    return `https://www.google.com/search?q=${searchWord.message}`;
  };

  return <Link url={getUrl()} title={"search Google for more answers"} />;
  };


export default Google;
