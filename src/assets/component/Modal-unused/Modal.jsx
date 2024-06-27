// import PropTypes from "prop-types";

// function Modal({
//   isFormSubmitted,
//   isFormCompleted,
//   onClick,
//   isClickedToClose,
//   modalBorder,
//   choiceOne,
//   choiceOneBackground,
//   choiceOneColor,
//   choiceOneFontSize,
//   choiceTwo,
//   choiceTwoBackground,
//   choiceTwoColor,
//   choiceTwoFontSize,
// }) {
//   return (
//     <>
//       {isFormSubmitted && !isClickedToClose && (
//         <div className="modal-background">
//           <div
//             className="modal-container"
//             style={{
//               border: modalBorder,
//             }}
//           >
//             {isFormCompleted ? (
//               <div
//                 className="modal-choiceOne"
//                 style={{
//                   background: choiceOneBackground,
//                   color: choiceOneColor,
//                   fontSize: choiceOneFontSize,
//                 }}
//               >
//                 <span>{choiceOne}</span>
//               </div>
//             ) : (
//               <div
//                 className="modal-choiceTwo"
//                 style={{
//                   background: choiceTwoBackground,
//                   color: choiceTwoColor,
//                   fontSize: choiceTwoFontSize,
//                 }}
//               >
//                 <span>{choiceTwo}</span>
//               </div>
//             )}
//             <div className="modal-close" onClick={onClick}>
//               Ok
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// Modal.propTypes = {
//   isFormSubmitted: PropTypes.bool.isRequired,
//   isFormCompleted: PropTypes.bool.isRequired,
//   isClickedToClose: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired,
//   choiceOne: PropTypes.string.isRequired,
//   choiceTwo: PropTypes.string.isRequired,
//   choiceOneBackground: PropTypes.string.isRequired,
//   choiceOneColor: PropTypes.string.isRequired,
//   choiceOneFontSize: PropTypes.string.isRequired,
//   choiceTwoBackground: PropTypes.string.isRequired,
//   choiceTwoColor: PropTypes.string.isRequired,
//   choiceTwoFontSize: PropTypes.string.isRequired,
//   modalBorder: PropTypes.string.isRequired,
// };

// export default Modal;
