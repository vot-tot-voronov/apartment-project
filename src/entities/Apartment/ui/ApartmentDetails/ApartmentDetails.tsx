import { AboutInfo } from '../AboutInfo/AboutInfo';
import { ConditionsAndFacilities } from '../ConditionsAndFacilities/ConditionsAndFacilities';
import { Description } from '../Description/Description';
import { ShortInfo } from '../ShortInfo/ShortInfo';

export const ApartmentDetails = () => {
  return (
    <div>
      <ShortInfo />
      <Description />
      <ConditionsAndFacilities />
      <AboutInfo />
    </div>
  );
};
