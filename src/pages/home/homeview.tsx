import React from 'react'


export const HomeView = (props: any) => (
  <>
  <div>
      <input value={props.words} onChange={props.setWords} />
      <p style={{color: 'red'}}>
        {props.words}
      </p>
      <button onClick={props.handleNextClick}>Back demon</button>
  </div>
</>

)
  
    

export default HomeView;