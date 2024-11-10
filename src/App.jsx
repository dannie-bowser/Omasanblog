import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';



function App() {
  
  return (
    <>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/AddBlog">
                <AddBlog />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>
          </Router>
    </>
  )
}

export default App
