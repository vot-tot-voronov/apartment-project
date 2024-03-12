import styles from './LoginForm.module.scss';

import { Button, Input } from '@/shared/ui';

export const LoginForm = () => {
  const handleSubmit = () => {};

  return (
    <form>
      <div className={styles.container}>
        <Input className={styles.input} placeholder="Имя пользователя" />
        <Input className={styles.input} placeholder="Пароль" />
      </div>
      <Button className={styles.button} onClick={handleSubmit}>
        Войти
      </Button>
    </form>
  );
};
