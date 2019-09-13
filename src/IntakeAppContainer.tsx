import React, { Component } from 'react';

type idk = {
    count: number
}


class IntakeAppContainer extends React.Component<idk, any> {
    constructor(props: idk) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
        
      return (
        <div>
          <p>You clicked <span style={{color: 'red'}}>{this.state.count}</span> times</p>
          
            
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
        </button>
        </div>
      );
    }
  }

  export default IntakeAppContainer;