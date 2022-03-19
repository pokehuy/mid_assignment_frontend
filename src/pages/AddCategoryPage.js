import { Modal,Form,Button} from 'react-bootstrap';
import { useState } from 'react';

const AddCategoryPage = () => {
    

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        
    }
    return (
        <div>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Add Book</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form onSubmit={handleOnSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicTitle">
                                    <Form.Label>Book's Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter book's title" value={title} name="title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" placeholder="Enter author's name" value={author} name="author" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCategoryId">
                                    <Form.Label>CategoryId</Form.Label>
                                    <Form.Control type="text" placeholder="Enter category id" value={categoryid} name="categoryid" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>

                    </Modal.Dialog>
                </div>
    )
}

export default AddCategoryPage;