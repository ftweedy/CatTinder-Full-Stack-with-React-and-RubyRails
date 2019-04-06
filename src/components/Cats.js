import React, { Component } from 'react'
import NewModal from "./NewModal"
import {
  Col, Container, Row, ListGroupItem, ListGroup
} from 'react-bootstrap'

class Cats extends Component {
    constructor(props){
        super(props)
        this.state = {
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
                    </span>
                    <button id="submit" type="submit" onClick={() => this.handleDelete(cat.id)}>Delete Cat Profile</button>

                    <button onClick={() => this.toggleModal(cat)}>
                        Cat Info
                    </button>
                    <NewModal cat={this.state.cat} isOpen={this.props.isOpen} toggle={this.props.toggle}/>
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
