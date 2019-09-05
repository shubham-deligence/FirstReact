import React, { Component } from 'react';
import CardList from './component/card-list/cardlist'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        response.json()
      )
      .then(users => {
        this.setState({
          monsters: users,
          searchField: ''
        })
      })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filtered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App bg-dark">
        <div className=" text-primary">
          <h2 className="text-center pt-3">Monsters App</h2>
          <input type="text" placeholder="search monsters" className="p-2 text-dark" onChange={(e) => {
            let val = e.target.value;
            this.setState({
              searchField: val
            })
          }} /></div>

        <CardList monster={filtered} />
      </div>
    );
  }

}

export default App;
