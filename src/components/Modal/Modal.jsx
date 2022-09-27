import "./modal.css";
import wgif from "../../images/winner.gif";

export default function Modal({ winner, onClick }) {
  return (
    <div className="w-modal">
      <div className="modalLeft">
        <img src={wgif} alt="" />
      </div>
      <div className="modalRight">
        <p>Winner is {winner}</p>
        <button className="btn btn-primary" onClick={onClick} >Close</button>
      </div>
    </div>
  );
}
