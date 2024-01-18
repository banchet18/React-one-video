import { useParams } from "react-router-dom";

const Product = ({ value }) => {
  const params = useParams();
  return <div>#{value}</div>;
};
export default Product;
