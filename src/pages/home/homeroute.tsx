import React, { useState, useEffect, useContext } from 'react'
import { urlPaths } from '../../utils/urlPaths'
import HomeView from './homeview';


declare const Global: any



export const homeroute = (props: any) => {

  const handleNextClick = async () => {
    props.history.push(urlPaths.JOSH_SITE)
  }
      return (
          <HomeView handleNextClick={handleNextClick} />
          
        )


    }