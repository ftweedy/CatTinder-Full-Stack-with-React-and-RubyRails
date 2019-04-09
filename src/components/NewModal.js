import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'

class NewModal extends Component {
    toggleModal = () => {
        this.props.toggle()
    }

    render() {
    return(
        <div>
        <Modal show={this.props.isOpen} onHide={this.toggleModal}>
            <Modal.Header>
                <Modal.Title>Cat Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                The name is {this.props.cat.name}.  The age is {this.props.cat.age} years old and the cat enjoys {this.props.cat.enjoys}.
            </Modal.Body>
            <Modal.Footer>
                <button onClick={this.toggleModal}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
        </div>
        )
    }
}
export default NewModal;
