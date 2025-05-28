import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);

  const removeFromFavourites = (companyName) => {
    dispatch({
      type: "REMOVE_FROM_FAVOURITES",
      payload: { company_name: companyName },
    });
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h2 className="my-4 display-5">Favourites</h2>

          <ListGroup>
            {favourites.map((job, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <Link to={`/${job.company_name}`} className="text-decoration-none">
                  <strong>{job.company_name}</strong>
                </Link>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromFavourites(job.company_name)}>
                  <FaTrash />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
