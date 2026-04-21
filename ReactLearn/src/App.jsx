import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">

        <div className="top">
          <img src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg" alt="Amazon Logo" />
          <button>Save <Bookmark  size={12}/></button>
        </div>

        <div className="center">
          <h1>Amazon <span>5 days</span></h1>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>



        <div className="bottom">
          <h3>$120/hr</h3>
          <p>Mumbai,India</p>
        </div>
        <button>Apply now</button>
      </div>
      
    </div>
  )
}

export default App
