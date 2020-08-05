import React from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/Card'
import CardList from './components/CardList'

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

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
        console.log(res.data)
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
        {this.state.gitFriends.map(item => {
          return <Card info={this.state.gitFriends} />
        })}
      </div>
    )
  }
}

export default App;
