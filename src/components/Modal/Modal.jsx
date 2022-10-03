import "./modal.css";


export default function Modal({ winner, onClick, src }) {
  return (
    <div className="w-modal">
      <div className="modalLeft">
        <img src={src} alt="" />
      </div>
      <div className="modalRight">
        <p>Winner is {winner}</p>
        <button className="btn btn-primary" onClick={onClick} >Close</button>
      </div>
    </div>
  );
}
