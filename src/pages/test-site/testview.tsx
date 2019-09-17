import * as React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../src/logo.svg'

const TestView = (props: any) => (
  <>
    
    <img src={logo} className="App-logo" alt="logo" />
     <Link to="/josh">
            <button className='btn btn-info'>Start</button>
        </Link>
    
  </>
)

export default TestView;