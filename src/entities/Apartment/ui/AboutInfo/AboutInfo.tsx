import { ReactNode, useMemo } from 'react';

import { AboutInfoIconsEnum, IAboutListData } from '../../model/types/apartmentTypes';
import classes from './AboutInfo.module.scss';

import { DottedList } from '@/shared/ui';
import {
  AreaIcon,
  BalconyIcon,
  CalendarIcon,
  CouchIcon,
  EyeIcon,
  FloorsIcon,
  FootIcon,
  GarbageIcon,
  HouseIcon,
  KitchenIcon,
  RenovationIcon,
  RoomsIcon,
  RubleIcon,
} from '@/shared/assets/icons';

interface IAboutInfoProps {
  listData: Array<Required<IAboutListData>>;
}

const listIcons: Record<AboutInfoIconsEnum, ReactNode> = {
  [AboutInfoIconsEnum.ROOMS]: <RoomsIcon />,
  [AboutInfoIconsEnum.ADRESS]: <HouseIcon />,
  [AboutInfoIconsEnum.FULL_AREA]: <AreaIcon />,
  [AboutInfoIconsEnum.LIVING_AREA]: <CouchIcon />,
  [AboutInfoIconsEnum.FLOOR]: <FootIcon />,
  [AboutInfoIconsEnum.FLOORS]: <FloorsIcon />,
  [AboutInfoIconsEnum.KITCHEN_AREA]: <KitchenIcon />,
  [AboutInfoIconsEnum.RENOVATION]: <RenovationIcon />,
  [AboutInfoIconsEnum.BALCONY]: <BalconyIcon />,
  [AboutInfoIconsEnum.PREPAYMENT]: <RubleIcon />,
  [AboutInfoIconsEnum.VIEW_FROM_WINDOW]: <EyeIcon />,
  [AboutInfoIconsEnum.GARBAGE_CHUTE]: <GarbageIcon />,
  [AboutInfoIconsEnum.BUILT_YEAR]: <CalendarIcon />,
};

export const AboutInfo = ({ listData }: IAboutInfoProps) => {
  const mappedList = useMemo(() => {
    return listData.map(({ label, value, icon }) => ({
      label: (
        <>
          <span className={classes.icon}>{listIcons[icon]}</span> <span>{label}</span>
        </>
      ),
      value,
    }));
  }, [listData]);

  return (
    <div className={classes.about}>
      <DottedList list={mappedList.filter(({ value }) => value !== null)} className={classes.list} />
    </div>
  );
};
