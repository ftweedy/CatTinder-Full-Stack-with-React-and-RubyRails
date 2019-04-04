import React, { Component } from 'react'

import Header from "./components/Header"
import Cats from "./components/Cats"
import NewCat from "./components/NewCat"
import { getCats } from "./api/index"
import { createCat } from "./api/index"
import { destroyCat } from "./api/index"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            cats: []
        }
    }

	componentWillMount() {
		getCats().then(APIcats => {
			this.setState({
				cats: APIcats
			})
		})
	}

  update = (add) => {
      createCat(add).then(APIcats => {
          this.setState({
              cats: APIcats
          })
      })
  }

  delete = (cat) => {
      destroyCat(cat).then(APIcats => {
          this.setState({
              cats: APIcats
          })
      })
  }

  handleNewCat(newCatInfo) {
	createCat(newCatInfo)
    .then(successCat => {
        console.log("SUCCESS! New cat: ", successCat);
    })
}

  render() {
    return (
		<div>
			<Header />
            <br />
			<Cats cats={this.state.cats} delete={this.delete}/>
            <br />
			<NewCat cats={this.state.cats} update={this.update}/>
		</div>
    );
  }
}

export default App;
