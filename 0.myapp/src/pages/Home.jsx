import Product from "../components/Product";

const Home = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {arr.map((i) => {
        return <Product value={i} key={i} />;
      })}
    </>
  );
};
export default Home;
