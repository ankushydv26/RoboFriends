import React, { Component } from "react";
import CradList from "./component/CardList";
import "tachyons";
import { robots } from "./component/robots";
import SearchBox from "./component/SearchBox";
//css
import "./App.css"

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots : robots,
      searchfield:''
    }
  }

  onSearchChange =(e) =>{
    this.setState({
      searchfield: e.target.value
    })
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className="tc">
        <h1 className="f1">RoboFriend</h1>
        <SearchBox
        searchChange={this.onSearchChange}
        />
        <CradList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
