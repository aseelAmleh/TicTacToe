import "./header.css";
const Header = (props) => {
  return (
    <div className="header">
      <span>X: {props.Wins.xWins}</span>
      <span>O: {props.Wins.oWins}</span>
      <span>{props.trn} turn</span>
    </div>
  );
};
export default Header;
