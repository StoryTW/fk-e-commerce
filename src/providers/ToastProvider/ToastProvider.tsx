import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { FC } from 'react';

const ToastProvider: FC = () => (
  <ToastContainer
    position='top-right'
    hideProgressBar
    newestOnTop
    pauseOnFocusLoss
    draggable
    autoClose={1500}
    closeButton
    theme='colored'
  />
);

export default ToastProvider;
