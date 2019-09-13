import React from 'react';
import './App.css';
import IntakeAppContainer from '../src/IntakeAppContainer';
import { urlPaths } from './utils/urlPaths';

export class App extends React.Component
 {
  isRedirecting = false

  constructor(props: any) {
    super(props)

    // If the user hit Reload (or browses straight to) on one of the steps that relies on context data being in a certian shape,
    // then the context data won't be in that shape yet, so redirect to the first Mobile Intake home screen instead
    if (window.location.pathname !== urlPaths.HOME 
      && window.location.pathname !== urlPaths.JOSH_SITE
    ) {
      window.location.href = urlPaths.JOSH_SITE
      this.isRedirecting = true
    }
  }

  componentDidCatch(error: any, info: any) {
    console.log('componentDidCatch', error, info)
  }

  render() {
    if (this.isRedirecting) {
      return (null)
    }

    return (
      <IntakeAppContainer count={2} />
    )
  }
  // render(){
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           sup! :)
  //         </p>
          
  //       </header>
  //     </div>
  //   )
  }
  

export default App;
