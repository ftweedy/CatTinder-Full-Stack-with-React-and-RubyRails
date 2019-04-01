import React, { Component } from 'react'

import Header from "./components/Header"
import Cats from "./components/Cats"
import NewCat from "./components/NewCat"

class App extends Component {
    constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
    }
  }
  
  update(add) {
      let {cats} = this.state
      cats.push(add)
      this.setState({cats: cats})
  }

  render() {
    return (
		<div>
			<Header />
            <br />
			<Cats cats={this.state.cats} update={this.update}/>
            <br />
			<NewCat cats={this.state.cats}/>
		</div>
    );
  }
}

export default App;
