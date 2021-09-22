import "./Header.scss";

export const Header = ({ headerText }) => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>{headerText}</h1>
      </div>
    </header>
  );
};

export default Header;
