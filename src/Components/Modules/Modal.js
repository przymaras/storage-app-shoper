function Modal(props) {
  return (
    <>
      <div className="modal">
        <div className="modal-container">{props.children}</div>
      </div>
    </>
  );
}

export default Modal;
