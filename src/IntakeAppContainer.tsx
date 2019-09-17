import React from 'react';
import { JoshAppView } from './JoshAppView';
import { Redirect } from 'react-router-dom'

type idk = {
    count: number
}


class IntakeAppContainer extends React.Component<idk, any> {
    constructor(props: idk) {
      super(props);
      this.state = {
        count: props.count ,
        redirect: false
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

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/josh' />
        }
      }

  
    render() {
        
      return (
        <div>
            <JoshAppView />
        </div>
      );
    }
  }

  export default IntakeAppContainer;

