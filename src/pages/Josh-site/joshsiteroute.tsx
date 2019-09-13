import React, { useState, useEffect, useContext } from 'react'
import { urlPaths } from '../../utils/urlPaths'
import JoshSiteView from '../Josh-site/joshsiteview'

declare const Global: any

interface IProps {
  history?: any
}

export const JoshSiteRoute = (props: IProps) => {

    const handleNextClick = async () => {
        props.history.push(urlPaths.HOME)
      }


      return (
        <JoshSiteView
          handleNextClick={handleNextClick}
        />
      )


    }