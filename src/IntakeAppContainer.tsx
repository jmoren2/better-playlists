import React from 'react';
import { JoshAppView } from './JoshAppView';

type idk = {
    count: number
}


class IntakeAppContainer extends React.Component<idk, any> {
    constructor(props: idk) {
      super(props);
      this.state = {
        count: props.count 
      };
    }

    componentDidMount()
    {
        this.setState(
                {
                    count: this.state.count + 1
                }
        );
    }

  
    render() {
        
      return (
        <div>
          <p>You clicked <span style={{color: 'red'}}>{this.state.count}</span> times</p>
          
            
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
        </button>

        <JoshAppView />
        </div>
      );
    }
  }

  export default IntakeAppContainer;