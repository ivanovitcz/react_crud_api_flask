import React, { Component } from 'react'
import NavbarComponent from "./components/NavbarComponent";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreatePostContainer from './containers/CreatePostContainer';
import EditPostContainer from './containers/EditPostContainer';
import DetailPostContainer from './containers/DetailPostContainer';

export default class App extends Component {
 

  render() {
    return (
      <div>
        <NavbarComponent />
        
        <BrowserRouter>
          <Route path="/reload" component={null} key="reload" />
          <Route path="/" exact><HomeContainer /></Route>
          <Route path="/post/create" exact component={CreatePostContainer}/>
          <Route path="/post/edit/:id" exact component={EditPostContainer}/>
          <Route path="/post/detail/:id" exact component={DetailPostContainer}/>
        </BrowserRouter>
      </div>
    )
  }
}
