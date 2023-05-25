import React from 'react'
import { Button, Container, Row, Col, Modal, ModalHeader, ModalTitle, ModalBody } from 'react-bootstrap'


export default class EmployeeAdd extends React.Component {
    constructor() {
        super()
        this.setState = {
            modalVisible: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleShowModal = this.handleShowModal.bind(this)
        this.handleHideModal = this.handleHideModal.bind(this)
    }

    handleShowModal() {
        this.setState ({ modalVisible: true, })

    }

    handleHideModal() {
        this.setState ({ modalVisible: false, })

    }

    handleSubmit(e) {
        const form = document.forms.employeeAdd
        const employee = {
            name: form.name.value,
            extension: form.ext.value,
            email: form.email.value,
            title: form.title.value,
        }
        this.props.createEmployee(employee)
        form.name.value = ''
        form.ext.value = ''
        form.email.value = ''
        form.title.value = ''
        this.setState ({ modalVisible: false, })
    }
    render() {
        return (
            <>
                <div className="addEmployee">
                    <Button
                    variant="primary"
                    size="sm"
                    onClick={this.handleShowModal}>
                        New Employee
                    </Button>
                </div>

                <Modal show={this.state.modalVisible} onHide={this.handleHideModal} centered>
                    <ModalHeader closeButton> 
                        <ModalTitle>Add New Employee</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Container fluid>
                            <form name="employeeAdd" >
                                <Row>
                                    <Col md={3}>Name:</Col>
                                    <Col md="auto"><input type="text" name="name" /></Col>
                                </Row>
                                <Row>
                                    <Col md={3}>Extension:</Col>
                                    <Col md="auto"><input type="text" name="ext" maxLength={4} /></Col>
                                </Row>
                                <Row>    
                                    <Col md={3}>Email:</Col>
                                    <Col md="auto"><input type="text" name="email" /></Col>
                                </Row>
                                <Row>
                                    <Col md={3}>Title:</Col>
                                    <Col md="auto"><input type="text" name="title" /></Col>
                                </Row>
                            </form>
                        </Container>
                    </ModalBody>

                    <Modal.Footer>
                        <Button
                            type="submit" 
                            variant="success" 
                            size="sm" 
                            className="mt-4" 
                            onClick={this.handleSubmit}>
                                Add Employee
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}