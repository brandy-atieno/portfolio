import React from 'react'
import Introduction from './components/Introduction/Introduction'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Toggle from './components/Toggle/Toggle';


const App = () => {
  return(
   <div>
    <Toggle/>
    <Introduction/>
    <About/>
    <Contact/>
  </div>
  )
};

export default App;