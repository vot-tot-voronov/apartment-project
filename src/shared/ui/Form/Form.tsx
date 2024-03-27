import { PropsWithChildren } from 'react';

interface IFormProps extends PropsWithChildren {
  onSubmit: Function;
}

export const Form = ({ onSubmit, children }: IFormProps) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
      <input
        type="submit"
        style={{
          visibility: 'hidden',
        }}
      />
    </form>
  );
};
