const Modal = ({
  children, visible, hide, fermer, more, less,
}) => {
  const popup = `popup ${visible ? 'block' : 'hidden'}`;
  // const nom = `more ${visibleBtn ? 'hidden' : 'visible'}`;
  // const nom1 = `less ${visibleBtn ? 'visible' : 'hidden'}`;

  return (
    <div className={popup}>
      {fermer ? null : (
        <button className="close" onClick={hide} type="button">X</button>
      )}
      {children}
      <button className="more" onClick={more} type="button">more</button>
      <br />
      <button className="more" onClick={less} type="button">less</button>
    </div>
  );
};
export default Modal;
