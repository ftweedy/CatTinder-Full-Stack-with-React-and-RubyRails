import React, {Component} from 'react'
import {
  Col, Container, Row, FormControl, Form
} from 'react-bootstrap'

class NewCat extends Component {
    constructor(props){
      super(props)
      this.state = {
        form:{
          name: '',
          age: '',
          enjoys: ''
        }
      }
    }

    handleChange(event){
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

    handleUpdate = () => {
        this.props.update(this.state.form)
    }

    render () {
        return (
            <Container>
            <Row>
                <Col xs={12}>
                    <Form>
                    <Form.Row>
                        <Col>
                        <Form.Group condtrolID="formNameEntry">
                            <Form.Label id="name">Name</Form.Label>
                            <FormControl
                              type="text"
                              name="name"
                              onChange={this.handleChange.bind(this)}
                              value={this.state.form.name}
                            />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group condtrolID="formAgeEntry">
                            <Form.Label id="age">Age</Form.Label>
                            <FormControl
                              type="number"
                              name="age"
                              onChange={this.handleChange.bind(this)}
                              value={this.state.form.age}
                            />
                        </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Group condtrolID="formEnjoysEntry">
                        <Form.Label id="enjoys">Enjoys</Form.Label>
                        <FormControl
                          type="text"
                          name="enjoys"
                          onChange={this.handleChange.bind(this)}
                          value={this.state.form.enjoys}
                        />
                    </Form.Group>

                    <button id="submit" type="submit" onClick={this.handleUpdate}>Create Cat Profile</button>
                    </Form>
                </Col>
            </Row>
            </Container>
        )
    }
}
export default NewCat;
