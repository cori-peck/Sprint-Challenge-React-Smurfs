import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
      console.log("inside CDM");
      axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
          this.setState({ smurfs: res.data });
        })
        .catch(err => {
          console.log("CRAP!", err);
        })
    }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <ul className="navbar">
            <li>
              <NavLink to="/" exact activeClassName="activebtn">Village</NavLink>
            </li>
            <li>
              <img src="https://seeklogo.com/images/S/Smurfs-logo-A3C6F8AAAF-seeklogo.com.png" alt="Smurf Logo" />
            </li>
            <li>
              <NavLink to="/smurf-form" activeClassName="activebtn">Smurf Form</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/smurf-form" render={ props => <SmurfForm {...props} /> } />
        <Route path="/" exact render={props => <Smurfs smurfs={this.state.smurfs} {...props} />} /> 
      </div>
    );
  }
}

export default App;
