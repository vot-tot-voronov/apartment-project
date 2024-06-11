import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { AboutInfo } from '../AboutInfo/AboutInfo';
import { ConditionsAndFacilities } from '../ConditionsAndFacilities/ConditionsAndFacilities';
import { Description } from '../Description/Description';
import { ShortInfo } from '../ShortInfo/ShortInfo';
import { ApartmentItemType, ApartmentTypeEnum } from '../../model/types/apartmentTypes';
import { ApartmentImgSlider } from '../ApartmentImgSlider/ApartmentImgSlider';
import { prepareShortInfoData, getDataInfoList } from '../../lib/utils';
import classes from './ApartmentDetails.module.scss';

import { Button, ButtonThemeEnum, Container } from '@/shared/ui';
import { ArrowIcon } from '@/shared/assets/icons';

interface IApartmentDetailsProps {
  data: ApartmentItemType;
}

export const ApartmentDetails = (props: IApartmentDetailsProps) => {
  const { data } = props;

  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className={classes.details}>
      <Container>
        <Button theme={ButtonThemeEnum.SECONDARY} onClick={handleGoBack} className={classes.backBtn}>
          <ArrowIcon />
          <span>Назад</span>
        </Button>
        <ApartmentImgSlider images={data.images} />
        <ShortInfo info={prepareShortInfoData(data)} />
      </Container>
      <Container title="Описание">
        <Description text={data.description} />
      </Container>
      <Container title="Условия и удобства">
        <ConditionsAndFacilities conditionsFacilities={data.conditionsAndFacilities} />
      </Container>
      <Container title={data.about.type === ApartmentTypeEnum.FLAT ? 'О квартире' : 'О доме'}>
        <AboutInfo listData={getDataInfoList(data.about)} />
      </Container>
    </div>
  );
};
