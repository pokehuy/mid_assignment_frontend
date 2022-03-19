import { Modal,Form,Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBookPage = () => {
    const [bookObj, setBookObj] = useState({
        title: "",
        author: "",
        categoryid: ""
    });

    const navigate = useNavigate();

    const handleChange = (evt) => {
        setBookObj({
            ...bookObj,
            [evt.target.name]: evt.target.value
        });
    }

    const handleBackToList = () => {
        navigate(-1);
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        axios({
            method: 'post',
            url: 'https://localhost:7052/Book',
            data: {
              title: bookObj.title,
              author: bookObj.author,
              categoryId: bookObj.categoryid
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          setBookObj({
            title: "",
            author: "",
            categoryid: ""
          });
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
                                    <Form.Control type="text" placeholder="Enter book's title" onChange={handleChange} value={bookObj.title} name="title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" placeholder="Enter author's name" onChange={handleChange} value={bookObj.author} name="author" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCategoryId">
                                    <Form.Label>CategoryId</Form.Label>
                                    <Form.Control type="text" placeholder="Enter category id" onChange={handleChange} value={bookObj.categoryid} name="categoryid" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button onClick={handleBackToList} variant="secondary" type="reset" >
                                    Back to Admin Page
                                </Button>
                            </Form>
                        </Modal.Body>

                    </Modal.Dialog>
                </div>
    )
}

export default AddBookPage;