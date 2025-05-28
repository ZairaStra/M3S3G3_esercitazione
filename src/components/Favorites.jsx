import { useSelector } from "react-redux";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);

  return (
    <Container>
      <Row className="my-5">
        <Col xs={10} className="mx-auto my-3">
          <h2 className="my-4 display-2">Favorites</h2>
          <ListGroup>
            {favorites.map((job, index) => (
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

export default Favorites;
