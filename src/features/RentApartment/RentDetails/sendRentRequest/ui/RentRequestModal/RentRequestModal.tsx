import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import classes from './RentRequestModal.module.scss';
import { RentRequestFormAsync } from '../RentRequestForm/RentRequestFormAsync';

import { Modal } from '@/shared/ui';
import { getRouteRentList } from '@/shared/config/routeConfig/routeConfig';

export const RentRequestModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: getRouteRentList() } };

  const handleClose = useCallback(() => {
    navigate(from, { replace: true, state: {} });
  }, [navigate, from]);

  return (
    <Modal onBack={handleClose} asyncContent className={classes.modal}>
      <RentRequestFormAsync />
    </Modal>
  );
};
