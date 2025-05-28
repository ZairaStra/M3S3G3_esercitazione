import { useSelector } from "react-redux";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);

  return (
    <Container>
      <Row className="my-5">
        <Col xs={10} className="mx-auto my-3">
          <div className="d-flex justify-content-between">
            <h2 className="my-4 display-2">Favourites</h2>
            <Link to="/">Home</Link>
          </div>
          <ListGroup>
            {favourites.map((job, index) => (
              <ListGroup.Item key={index}>
                <strong>{job.company_name}</strong> — {job.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
