import React from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import AddBookPage from './pages/AddBookPage';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/user">User</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/addbook" element={<AddBookPage />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;