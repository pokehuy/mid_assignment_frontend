import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const FetchBooks = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [e, setError] = useState("");
    const [searchText, setSearchText] = useState("");
    const [sort, setSort] = useState({
        sortById: false,
        sortByTitle: false
    });

    const navigate = useNavigate();
    const [asc, setASC] = useState(false);
    const token = JSON.parse(localStorage.getItem('user'))?.token;

    useEffect(() => {
        let didCancel = false;
        let header = [];
        if (token) {
            header["Authorization"] = token;
        }

        axios({
            method: "GET",
            url: `https://localhost:7052/Book`,
            headers: header
        }).then(response => {
            if (!didCancel) {
                setPosts(response.data);
                setIsLoading(false);
            }
        }).catch((e) => {
            if (!didCancel) {
                setError(e.message);
                setIsLoading(false);
            }
        })
        return () => {
            didCancel = true;
        };
    }, []);

    if (isLoading) {
        return <div>is Loading...</div>
    }

    if (e) return <div style={{ color: "red" }}>{e}</div>;

    const postsFiltered = posts.filter(post =>
        post.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const getPostsSorted = () => {
        if (!sort.sortById && !sort.sortByTitle) {
            return postsFiltered;
        }
        if (sort.sortById && asc) {
            return postsFiltered.sort((post1, post2) => post1.id - post2.id)
        }
        if (sort.sortById && !asc) {
            return postsFiltered.sort((post1, post2) => post2.id - post1.id)
        }
        if (sort.sortByTitle && asc) {
            return postsFiltered.sort((post1, post2) => {
                if (post1.title.toLowerCase() < post2.title.toLowerCase()) return -1;
                if (post1.title.toLowerCase() > post2.title.toLowerCase()) return 1;
            })
        }
        if (sort.sortByTitle && !asc) {
            return postsFiltered.sort((post1, post2) => {
                if (post1.title.toLowerCase() < post2.title.toLowerCase()) return 1;
                if (post1.title.toLowerCase() > post2.title.toLowerCase()) return -1;
            })
        }
    }

    const postsSorted = getPostsSorted();

    const handleSort = (evt) => {
        if (evt.target.id === "id") {
            setASC(!asc);
            setSort({ sortById: true, sortByTitle: false });
        }
        if (evt.target.id === "title") {
            setASC(!asc);
            setSort({ sortById: false, sortByTitle: true });
        }
    }

    const handleAdd = () => {
        navigate("/addbook");
    }

    const handleDelete = (evt) => {
        axios({
            method: 'delete',
            url: `https://localhost:7052/Book/${evt.target.value}`,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        var newPosts = posts.filter(post => post.id !== parseInt(evt.target.value));
        setPosts(newPosts);
    }

    return (
        <>
            <div>

                <input type="text"
                    className="form-control"
                    id="post_title"
                    placeholder="Search book title"
                    onChange={evt => setSearchText(evt.target.value)}
                />
                <br />

                <Button onClick={handleAdd} variant="primary">Add</Button>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th
                                id="id"
                                onClick={handleSort}
                            >Id
                            </th>
                            <th
                                id="title"
                                onClick={handleSort}
                            >Title
                            </th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postsSorted.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>
                                    <ButtonGroup aria-label="edit delete">
                                        <Button variant="primary">Edit</Button>{' '}
                                        <Button value={post.id} onClick={handleDelete} variant="danger">Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default FetchBooks;