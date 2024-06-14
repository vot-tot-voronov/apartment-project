import { StoryFn } from '@storybook/react';
import { Bounce, ToastContainer } from 'react-toastify';

export const ToastifyDecorator = (StoryComponent: StoryFn) => {
  return (
    <div>
      <StoryComponent />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};
