const Header = ({ name }) => {
  return (
    <div>
      <Header2 name={name} />
    </div>
  );
};
const Header2 = ({ name }) => {
  return <div>{name}</div>;
};

export default Header;
