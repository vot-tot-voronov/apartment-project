import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';

import {
  RentListFilterFormEnum,
  RentListFilterFormSchema,
  RentListFilterFormType,
} from '../model/types/rentListFilterTypes';
import classes from './RentListFilter.module.scss';
import { getRentList } from '../../getRentList';
import { defaultFormValues, mapFilterToSearchParams, queryParamsToFilter } from '../lib/helpers';

import {
  Button,
  ButtonThemeEnum,
  Checkbox,
  Container,
  FieldWithLabel,
  Form,
  RangeInputs,
  TextInput,
} from '@/shared/ui';
import { masks } from '@/shared/lib';
import { ArrowIcon } from '@/shared/assets/icons';
import { useAppDispatch } from '@/shared/hooks';

export const RentListFilter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    handleSubmit,
    reset,
    control,
    formState: {
      errors: { priceFrom, priceTo, city },
    },
  } = useForm<RentListFilterFormType>({
    resolver: zodResolver(RentListFilterFormSchema),
    defaultValues: { ...defaultFormValues },
    mode: 'onChange',
  });

  useEffect(() => {
    reset(queryParamsToFilter(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler: SubmitHandler<RentListFilterFormType> = async data => {
    const params = mapFilterToSearchParams(data);
    setSearchParams(params);
    await dispatch(getRentList(params));
  };

  const handleReset = async () => {
    reset({ ...defaultFormValues });
    setSearchParams();
    await dispatch(getRentList());
  };

  return (
    <>
      <Button className={clsx(classes.btn)} onClick={() => setIsVisible(prev => !prev)}>
        <span>Фильтры</span>
        <ArrowIcon className={clsx(isVisible && classes.open)} />
      </Button>
      <Container className={clsx(classes.container, isVisible && classes.container_visible)}>
        <div className={classes.inner}>
          <h2 className={clsx(classes.title, isVisible && classes.title_visible)}>Фильтры</h2>
          <Form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
            <FieldWithLabel label="Цена">
              <RangeInputs
                control={control}
                errors={{ from: priceFrom?.message, to: priceTo?.message }}
                placeholders={{ from: 'От', to: 'До' }}
                onChangeHandlers={{ from: masks.rubleMask().onChange, to: masks.rubleMask().onChange }}
                names={{ from: RentListFilterFormEnum.priceFrom, to: RentListFilterFormEnum.priceTo }}
              />
            </FieldWithLabel>
            <FieldWithLabel label="Тип">
              <div className={classes.checkboxList}>
                <Checkbox name={RentListFilterFormEnum.house} control={control} labelText="Дом" />
                <Checkbox name={RentListFilterFormEnum.flat} control={control} labelText="Квартира" />
              </div>
            </FieldWithLabel>
            <FieldWithLabel label="Количество комнат">
              <div className={classes.checkboxList}>
                <Checkbox name={RentListFilterFormEnum.oneRoom} control={control} labelText="1" />
                <Checkbox name={RentListFilterFormEnum.twoRooms} control={control} labelText="2" />
                <Checkbox name={RentListFilterFormEnum.threeRooms} control={control} labelText="3" />
                <Checkbox name={RentListFilterFormEnum.fourPlusRooms} control={control} labelText="4+" />
              </div>
            </FieldWithLabel>
            <FieldWithLabel label="Город">
              <TextInput
                className={classes.field}
                name={RentListFilterFormEnum.city}
                control={control}
                placeholder="Город"
                error={city?.message}
              />
            </FieldWithLabel>
            <FieldWithLabel label="Общая площадь">
              <RangeInputs
                control={control}
                errors={{ from: priceFrom?.message, to: priceTo?.message }}
                placeholders={{ from: 'От', to: 'До' }}
                onChangeHandlers={{
                  from: masks.squareMetersMask(0, 10000000).onChange,
                  to: masks.squareMetersMask().onChange,
                }}
                names={{ from: RentListFilterFormEnum.fullAreaFrom, to: RentListFilterFormEnum.fullAreaTo }}
              />
            </FieldWithLabel>
            <FieldWithLabel label="Площадь кухни">
              <div className={classes.checkboxList}>
                <Checkbox name={RentListFilterFormEnum.kitchenAreaSix} control={control} labelText="6 м²" />
                <Checkbox name={RentListFilterFormEnum.kitchenAreaSeven} control={control} labelText="7 м²" />
                <Checkbox name={RentListFilterFormEnum.kitchenAreaEight} control={control} labelText="8 м²" />
                <Checkbox name={RentListFilterFormEnum.kitchenAreaNine} control={control} labelText="9 м²" />
                <Checkbox name={RentListFilterFormEnum.kitchenAreaTen} control={control} labelText="10 м²" />
                <Checkbox name={RentListFilterFormEnum.kitchenAreaEleven} control={control} labelText="11 м²" />
                <Checkbox name={RentListFilterFormEnum.kitchenAreaTwelve} control={control} labelText="12 м²" />
                <Checkbox name={RentListFilterFormEnum.kitchenAreaThirteen} control={control} labelText="13 м²" />
              </div>
            </FieldWithLabel>
            <FieldWithLabel label="Этаж">
              <RangeInputs
                control={control}
                errors={{ from: priceFrom?.message, to: priceTo?.message }}
                placeholders={{ from: 'От', to: 'До' }}
                onChangeHandlers={{
                  from: masks.numberMask(0, 10000000).onChange,
                  to: masks.numberMask().onChange,
                }}
                names={{ from: RentListFilterFormEnum.floorFrom, to: RentListFilterFormEnum.floorTo }}
              />
            </FieldWithLabel>
            <FieldWithLabel label="Этажность дома">
              <RangeInputs
                control={control}
                errors={{ from: priceFrom?.message, to: priceTo?.message }}
                placeholders={{ from: 'От', to: 'До' }}
                onChangeHandlers={{
                  from: masks.numberMask(0, 10000000).onChange,
                  to: masks.numberMask().onChange,
                }}
                names={{ from: RentListFilterFormEnum.floorsFrom, to: RentListFilterFormEnum.floorsTo }}
              />
            </FieldWithLabel>
            <FieldWithLabel label="Ремонт">
              <div className={classes.checkboxList}>
                <Checkbox name={RentListFilterFormEnum.renovationEuro} control={control} labelText="Евроремонт" />
                <Checkbox
                  name={RentListFilterFormEnum.renovationDesigner}
                  control={control}
                  labelText="Дизайнерский проект"
                />
                <Checkbox
                  name={RentListFilterFormEnum.renovationCosmetic}
                  control={control}
                  labelText="Косметический ремонт"
                />
                <Checkbox name={RentListFilterFormEnum.renovationNot} control={control} labelText="Без ремонта" />
              </div>
            </FieldWithLabel>

            <div className={classes.buttons}>
              <Button onClick={handleSubmit(submitHandler)}>Фильтровать</Button>
              <Button onClick={handleReset} theme={ButtonThemeEnum.SECONDARY}>
                Сбросить
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};
