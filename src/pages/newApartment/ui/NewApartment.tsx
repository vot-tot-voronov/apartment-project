import { Outlet } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import classes from './NewApartment.module.scss';

import { ITab, Tabs } from '@/shared/ui';
import { getRouteNewRentApartment } from '@/shared/config/routeConfig/routeConfig';
import { rootReducer } from '@/app/providers/storeProvider';
import { AboutFormSchema, createNewApartmentSlice } from '@/features/createNewApartment';

const NewApartment = () => {
  const {
    selectors: { getAboutFormData, getCanStepToConditions, getCanStepToFacilities },
  } = useMemo(() => {
    return createNewApartmentSlice.injectInto(rootReducer);
  }, []);

  const aboutFormData = useSelector(getAboutFormData);
  const isConditionsDisabled = useSelector(getCanStepToConditions);
  const isFacilitiesDisabled = useSelector(getCanStepToFacilities);

  const tabsList = useMemo<Array<ITab>>(() => {
    return [
      {
        label: 'Общая информация',
        path: getRouteNewRentApartment('ABOUT'),
      },
      {
        label: 'Условия',
        path: getRouteNewRentApartment('CONDITIONS'),
        isDisabled: !isConditionsDisabled || !AboutFormSchema.safeParse(aboutFormData).success,
      },
      {
        label: 'Удобства',
        path: getRouteNewRentApartment('FACILITIES'),
        isDisabled: !isConditionsDisabled || !isFacilitiesDisabled || !AboutFormSchema.safeParse(aboutFormData).success,
      },
    ];
  }, [aboutFormData, isConditionsDisabled, isFacilitiesDisabled]);

  return (
    <>
      <Tabs tabsList={tabsList} />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default NewApartment;
