// import { createSlice } from '@reduxjs/toolkit';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Undo = ({ onUndo, closeToast }) => {
//   const handleClick = () => {
//     onUndo();
//     closeToast();
//   };
//   return (
//     <div>
//       <h3>
//         Row Deleted <button onClick={handleClick}>UNDO</button>
//       </h3>
//     </div>
//   );
// };
// const slice = createSlice({
//   name: 'toaster',
//   initialState: {
//     undo: false,
//   },
//   reducers: {
//     setUndo: state => {
//       state.undo = true;
//     },
//     resetUndo: state => {
//       state.undo = false;
//     },
//   },
// });
