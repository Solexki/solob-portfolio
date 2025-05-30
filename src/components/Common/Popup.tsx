type PopupProps = {
  title?: string;
  content?: string;
  onClose?: () => void;
};
function Popup(props: PopupProps) {
  const { title, content, onClose } = props;
  return (
    <div>
      <div className="popup-container">
        <div className="popup-content">
          <div className="popup-header">
            <h2>{title}</h2>
            <button className="close-button" onClick={onClose}>
              &times; Close
            </button>
          </div>

          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
