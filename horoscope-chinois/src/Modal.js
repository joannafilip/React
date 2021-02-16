const Modal = ({
  children, visible, hide, fermer, more,
}) => {
  const popup = `popup ${visible ? 'block' : 'hidden'}`;

  return (
    <div className={popup}>
      {fermer ? null : (
        <button className="close" onClick={hide} type="button">X</button>
      )}
      {children}
      <button className="more" onClick={more} type="button">more</button>
    </div>
  );
};
export default Modal;
