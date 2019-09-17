import React from 'react'
import { urlPaths } from '../../utils/urlPaths'
import TestView from '../test-site/testview'

declare const Global: any

interface IProps {
  history?: any
}

export const TestRoute = (props: IProps) => {

    const handleNextClick = async () => {
        props.history.push(urlPaths.JOSH_SITE)
      }


      return (
        <TestView
          handleNextClick={handleNextClick}
        />
      )


    }