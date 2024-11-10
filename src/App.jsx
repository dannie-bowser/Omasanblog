import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  
  return (
    <>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </Router>
    </>
  )
}

export default App
