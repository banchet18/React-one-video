const a = 400;

const Myheading = () => {
  return <h1>Myheading</h1>;
};

const App = () => {
  const a = 200;
  return (
    <div>
      <Myheading />
      <h1>Welcome to React {a}</h1>
      <p></p>
    </div>
  );
};
export default App;
