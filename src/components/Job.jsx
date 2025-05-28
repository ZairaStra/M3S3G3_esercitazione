import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);

  const isFavorited = favorites.some((job) => job.company_name === data.company_name);

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: data });
    } else {
      dispatch({ type: "ADD_TO_FAVORITES", payload: data });
    }
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button variant="light" onClick={toggleFavorite}>
          {isFavorited ? <FaHeart color="red" /> : <FaRegHeart />}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
