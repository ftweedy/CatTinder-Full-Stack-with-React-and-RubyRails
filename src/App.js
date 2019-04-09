import React, { Component } from 'react'

import Header from "./components/Header"
import Cats from "./components/Cats"
import NewCat from "./components/NewCat"
import { getCats } from "./api/index"
import { createCat } from "./api/index"
import { destroyCat } from "./api/index"
import { editCat } from "./api/index"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            cats: [],
            isOpen: false,
            isEdit: false
        }
    }

    toggleModal = () =>{
        let state = (this.state.isOpen ? false : true)
        this.setState({
          isOpen: state
        })
    }

    toggleEdit = () =>{
        let state = (this.state.isEdit ? false : true)
        this.setState({
          isEdit: state
        })
    }

	componentWillMount() {
		getCats().then(APIcats => {
			this.setState({
				cats: APIcats
			})
		})
	}

    edit = (cat, id) => {
        editCat(cat, id).then(APIcats => {
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
			<Cats cats={this.state.cats} delete={this.delete} toggle={this.toggleModal} toggleEdit={this.toggleEdit} isOpen={this.state.isOpen} isEdit={this.state.isEdit} edit={this.edit}/>
            <br />
			<NewCat cats={this.state.cats} update={this.update}/>
		</div>
    );
  }
}

export default App;
