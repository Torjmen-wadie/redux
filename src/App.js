import React, { Component } from 'react'
import CustomNavBar from './layouts/CustomNavBar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      changeView :"home"
    }
  }
  navigateChangeView= (newView)=>{
    this.setState({changeView :newView})
  }
  render() {
    return (
      <div>

      <CustomNavBar newViewFromApp={this.navigateChangeView}/>
      {this.state.changeView === "home" ? <Home/> : this.state.changeView ==="about" ? <About/> : <Contact/>}

      </div>
    )
  }
}
