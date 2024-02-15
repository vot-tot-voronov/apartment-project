import { useEffect, useState } from 'react';

const ApartmentsPage = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error('Ошибка');
    }
  }, [error]);

  return (
    <div>
      <p>ApartmentsPage</p>
      <button type="button" onClick={() => onThrow()}>
        Throw new Error
      </button>
    </div>
  );
};

export default ApartmentsPage;
