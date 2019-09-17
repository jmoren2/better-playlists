import React, { useState } from 'react'
import { urlPaths } from '../../utils/urlPaths'
import HomeView from './homeview';


declare const Global: any



export const HomeRoute = (props: any) => {

  const [words, setWords] = useState<string>('');

  const handleNextClick = async () => {
    props.history.push(urlPaths.TEST)
  };

  function HandleChange(event: any)
  {
      setWords(event.target.value);
  };
  
      return (
          <HomeView words={words} setWords={HandleChange}  handleNextClick={handleNextClick} />
        )


    }