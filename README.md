## Запуск проекта

```
npm install - установка зависимостей
npm run start - запуск frontend проекта на webpack dev server в dev режиме + запуск backend сервера
```

----

## Именование коммитов

Работа по задачам ведётся в отдельных ветках. Ветвление осуществлеся от ветки develop.

Например: `[^,*] APT-taskNumber: описание того, что сделано`, где

- `[^]` - используется, когда добавлен новый функционал
- `[*]` - используется, когда исправлен баг или проведён рефакторинг
- `taskNumber` - номер задачи

----

## Скрипты

- `npm run start` - запуск frontend проекта на webpack dev server + запуск backend сервера
- `npm run start:front` - запуск frontend проекта на webpack dev server
- `npm run start:dev:server` - запуск backend сервера
- `npm run build` - сборка в production режиме
- `npm run lint:ts` - проверка typescript файлов линтером
- `npm run lint:ts:fix` - проверка и исправление typescript файлов линтером
- `npm run lint:scss` - проверка scss файлов линтером stylelint
- `npm run lint:scss:fix` - проверка и исправление scss файлов линтером stylelint
- `npm run test:unit` - запуск unit тестов с jest
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - сборка storybook билда
- `npm run prepare` - прекоммит хуки

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature Sliced Design (FSD)

Ссылка на документацию - [FSD](https://feature-sliced.design/docs/get-started/tutorial)

----

## Линтинг

Для линтинга TypeScript кода используется eslint, для провекри файлов со стилями - stylelint

##### Запуск линтеров
- `npm run lint:ts` - проверка typescript файлов линтером
- `npm run lint:ts:fix` - проверка и исправление typescript файлов линтером
- `npm run lint:scss` - проверка scss файлов линтером stylelint
- `npm run lint:scss:fix` - проверка и исправление scss файлов линтером stylelint

----

## Storybook

Для каждого компонента UI-кита описываются стори-кейсы.
Файл со сторикейсами создается рядом с компонентом с расширением .stories.tsx

Запуск storybook осуществляется командой:
- `npm run storybook`

Пример:

```typescript jsx
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Checkbox } from './Checkbox';

export default {
  title: 'shared/Checkbox',
  component: Checkbox,
  args: {
    labelText: 'Label',
    name: 'test',
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = args => {
  const { name } = args;
  const { control } = useForm({
    defaultValues: {
      [name]: false,
    },
  });

  return <Checkbox control={control} {...args} />;
};

export const CheckBox = Template.bind({});
```

----

## Конфигурация проекта

Для сборки проекта используется Webpack.

Вся конфигурация хранится в /config:
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

----

## Pre-commit хуки

В прекоммит хуках осуществляем проверку проекта линтерами (eslint и stylelint).
Конфиг pre-commit хуков находится в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется при помощи Redux Toolkit.

Для уменьшения размера бандла используется [асинхронное](https://redux-toolkit.js.org/api/combineSlices#injectinto) подключение редьюсеров.

----

## Сущности (entities)

- [Apartment](/src/entities/Apartment)
- [ApartmentListItem](/src/entities/ApartmentListItem)
- [Comment](/src/entities/Comment)
- [Profile](/src/entities/Profile)
- [User](/src/entities/User)

## Фичи (features)

- [createNewApartment](/src/features/createNewApartment)
- [createNewUser](/src/features/createNewUser)
- [getEditProfile](/src/features/getEditProfile)
- [loginByUsername](/src/features/loginByUsername)
- [getComments](/src/features/RentApartment/RentDetails/getComments)
- [getRentApartment](/src/features/RentApartment/RentDetails/getRentApartment)
- [sendComment](/src/features/RentApartment/RentDetails/sendComment)
- [sendRentRequest](/src/features/RentApartment/RentDetails/sendRentRequest)
- [getRentList](/src/features/RentApartment/RentList/getRentList)
- [rentListFilter](/src/features/RentApartment/RentList/rentListFilter)
