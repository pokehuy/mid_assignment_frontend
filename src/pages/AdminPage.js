import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import FetchBooks from "../components/FetchBooks";
import FetchCategories from "../components/FetchCategories";
import FetchRequests from "../components/FetchRequests";

const AdminPage = () => {
    return (

        <Container>
            <Row>
                <Col>
                    <h1>Admin Page</h1>
                    <Tabs defaultActiveKey="categories" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="categories" title="Categories">
                            <FetchCategories />
                        </Tab>
                        <Tab eventKey="books" title="Books">
                            <FetchBooks />
                        </Tab>
                        <Tab eventKey="requests" title="Requests" >
                            <FetchRequests />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>

    )
}

export default AdminPage;