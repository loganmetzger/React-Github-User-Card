import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitFriends: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/loganmetzger`)
      .then(res  => {
        this.setState({ gitFriends: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div>
        <h1>Git Frands</h1>
        <CardList />
      </div>
    )
  }
}

export default App;
