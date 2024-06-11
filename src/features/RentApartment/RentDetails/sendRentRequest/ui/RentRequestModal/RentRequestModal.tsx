import { useLocation, useNavigate } from 'react-router-dom';

import classes from './RentRequestModal.module.scss';
import { RentRequestFormAsync } from '../RentRequestForm/RentRequestFormAsync';

import { Modal } from '@/shared/ui';
import { getRouteRentList } from '@/shared/config/routeConfig/routeConfig';

export const RentRequestModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: getRouteRentList() } };

  const handleClose = () => {
    navigate(from, { replace: true, state: {} });
  };

  return (
    <Modal onBack={handleClose} asyncContent className={classes.modal}>
      <RentRequestFormAsync />
    </Modal>
  );
};
