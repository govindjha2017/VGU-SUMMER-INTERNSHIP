import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import App1 from './App1'
import App2 from './App2'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App></App>
  //   <App/>
  //   {App()} */}

  //   <App/>
  // </StrictMode>,

  <>
    {/* <App/> */}
    {/* <App1></App1> */}
    <App2/>
  </>
)
