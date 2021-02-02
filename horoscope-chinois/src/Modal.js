const Modal = ({ children, visible }) => {
  const popup = `popup ${visible ? 'block' : 'hidden'}`;

  return (
    <div className={popup}>
      {children}
    </div>
  );
};
export default Modal;
