import PropTypes from "prop-types";

function Modal({ isFormSubmitted, isFormCompleted, onClick, isClickedToClose, choiceOne, choiceTwo }) {
  return (
    <>
      {isFormSubmitted ? (
        <>
          <div className={`${!isClickedToClose ? "modal-container" : "closed"}`}>
            {isFormCompleted ? (
              <div className="modal-ok">
                <span>{choiceOne}</span>
              </div>
            ) : (
              <div className="modal-nok">
                <span>{choiceTwo}</span>
              </div>
            )}

            <div className="modal-close" onClick={onClick}>
              Ok
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  isFormSubmitted: PropTypes.bool.isRequired,
  isFormCompleted: PropTypes.bool.isRequired,
  isClickedToClose: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  choiceOne:PropTypes.string.isRequired,
  choiceTwo:PropTypes.string.isRequired,
};

export default Modal;
