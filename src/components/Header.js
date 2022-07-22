const Header = ({headText}) => {
    return (
      <header>
        <span>
          <button className="back_button">&#60;=</button>
        </span>
        <div className="head_text">{headText}</div>
      </header>
    );
};

export default Header;