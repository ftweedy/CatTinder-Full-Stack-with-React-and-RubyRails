import React, { Component } from 'react'
import NewModal from "./NewModal"
import EditCatModal from "./EditCatModal"
import {
  Col, Container, Row, ListGroupItem, ListGroup
} from 'react-bootstrap'

class Cats extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: "",
            cat: ""
        }
    }

    handleDelete = (cat) => {
        this.props.delete(cat)
    }

    toggleModal = (cat) => {
        this.props.toggle()
        this.setState({cat: cat})
    }
    toggleEdit = (cat, id) => {
        this.props.toggleEdit()
        this.setState({cat: cat, id: id})
    }

  render() {
    return (
	<Container>
      <Row>
          <Col xs={12}>
              <ListGroup>
              {this.props.cats.map((cat, index) =>{
                return (
                  <ListGroupItem key={index}>
                      <h4>
                        <span className='cat-name'>
                          {cat.name}
                        </span>
                        - <small className='cat-age'>{cat.age} years old</small>
                      </h4>
                    <span className='cat-enjoys'>
                      {cat.enjoys}
                    </span> {''}

                    <button id="submit" type="submit" onClick={() => this.handleDelete(cat.id)}>Delete Cat Profile</button> {''}
                    <button onClick={() => this.toggleModal(cat)}>
                        Cat Info
                    </button> {''}
                    <button onClick={() => this.toggleEdit(cat, cat.id)}>
                        Edit Cat
                    </button>

                    <NewModal cat={this.state.cat} isOpen={this.props.isOpen} toggle={this.props.toggle}/>
                    <EditCatModal cat={this.state.cat} id={this.state.id} edit={this.props.edit} isEdit={this.props.isEdit} toggle={this.props.toggleEdit}/>
                  </ListGroupItem>)
              })}
            </ListGroup>
          </Col>
      </Row>
	</Container>
    );
  }
}

export default Cats;
