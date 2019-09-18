import * as React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  handleNextClick: () => void
}

const JoshSiteView = (props: IProps) => (
  <>
     <div>
       <div>
         welcome to the second page!
       </div>
        
       <Link to="/home">
          <button className='btn btn-info'>Type pls</button>
       </Link>
     </div>
    
  </>
)

export default JoshSiteView;