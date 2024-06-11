import SimpleImageSlider from 'react-simple-image-slider';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from './ApartmentListItem.module.scss';

import { ApartmentItemType, ApartmentTypeEnum } from '@/entities/Apartment';
import { useWidth } from '@/shared/hooks';
import { Button, ButtonThemeEnum, TextCopy } from '@/shared/ui';
import { getRouteRentDetailed } from '@/shared/config/routeConfig/routeConfig';
import { getNoun } from '@/shared/lib';
import { ModalQueryValuesEnum, ModalTypeEnum } from '@/shared/types';

interface IApartmentListItemProps {
  item: ApartmentItemType;
}

export const ApartmentListItem = ({ item }: IApartmentListItemProps) => {
  const { images } = item;

  const navigate = useNavigate();
  const location = useLocation();

  const ref = useRef<HTMLDivElement>(null);
  const width = useWidth(ref);

  const handleNavigate = () => navigate(getRouteRentDetailed(item.id));
  const handleRentRequest = () =>
    navigate(
      { search: `?${ModalTypeEnum.RENT_REQUEST}=${ModalQueryValuesEnum.RENT_REQUEST}` },
      { state: { from: { pathname: location.pathname, search: location.search } } },
    );

  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.slider}>
        <SimpleImageSlider
          width={width}
          height={320}
          slideDuration={0.3}
          navStyle={2}
          navSize={45}
          navMargin={0}
          images={images}
          showBullets
          showNavs
          bgColor="transparent"
        />
      </div>
      <div className={classes.description}>
        <h2 className={classes.pricePerMonth}>{item.pricePerMonth} ₽/мес</h2>
        <div className={classes.shortInfo}>
          <p>
            {item.about.rooms} комн. {item.about.type === ApartmentTypeEnum.FLAT ? 'квартира' : 'дом'}
          </p>
          <p>{item.about.fullArea} м²</p>
          <p>
            {item.about.type === ApartmentTypeEnum.FLAT
              ? `${item.about?.floor}/${item.about.floors} эт.`
              : `${item.about.floors} ${getNoun(item.about.floors, 'этаж', 'этажа', 'этажей')}`}
          </p>
        </div>
        <TextCopy text={item.about.adress} />
        <p className={classes.updated}>
          Обновлено: <span>{item.updated}</span>
        </p>
        <div className={classes.buttons}>
          <Button onClick={handleNavigate}>Посмотреть</Button>
          <Button onClick={handleRentRequest} theme={ButtonThemeEnum.SECONDARY}>
            Связаться
          </Button>
        </div>
      </div>
    </div>
  );
};
