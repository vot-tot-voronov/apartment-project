import { AboutInfo } from '../AboutInfo/AboutInfo';
import { ConditionsAndFacilities } from '../ConditionsAndFacilities/ConditionsAndFacilities';
import { Description } from '../Description/Description';
import { ShortInfo } from '../ShortInfo/ShortInfo';
import { ApartmentItemType } from '../../model/types/apartmentTypes';
import { ApartmentImgSlider } from '../ApartmentImgSlider/ApartmentImgSlider';
import { prepareShortInfoData } from '../../lib/utils';
import classes from './ApartmentDetails.module.scss';

import { Container } from '@/shared/ui';

interface IApartmentDetailsProps {
  data: ApartmentItemType;
}

export const ApartmentDetails = (props: IApartmentDetailsProps) => {
  const { data } = props;

  return (
    <div className={classes.details}>
      <Container>
        <ApartmentImgSlider images={data.images} />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <ShortInfo {...prepareShortInfoData(data)} />
      </Container>
      <Description />
      <ConditionsAndFacilities />
      <AboutInfo />
    </div>
  );
};
