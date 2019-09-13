import * as React from 'react'

interface IProps {
  handleNextClick: () => void
}

const JoshSiteView = (props: IProps) => (
  <>
     <div>
        <button onClick={props.handleNextClick}> Josh View!!!   </button>  
     </div>
    
  </>
)

export default JoshSiteView;