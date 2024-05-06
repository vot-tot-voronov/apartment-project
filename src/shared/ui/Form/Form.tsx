import { FormHTMLAttributes } from 'react';

interface IFormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  onSubmit: Function;
}

export const Form = ({ onSubmit, children, className }: IFormProps) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
      className={className}
      style={{
        position: 'relative',
      }}
    >
      {children}
      <input
        type="submit"
        style={{
          visibility: 'hidden',
          position: 'absolute',
          top: 0,
        }}
      />
    </form>
  );
};
