import React, { Component } from 'react';
import {
  Col, Container, Row, ListGroupItem, ListGroup
} from 'react-bootstrap'

class Cats extends Component {
    handleDelete = (cat) => {
        this.props.delete(cat)
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
                  </ListGroupItem>)})}
            </ListGroup>
          </Col>
      </Row>
	</Container>
    );
  }
}

export default Cats;
