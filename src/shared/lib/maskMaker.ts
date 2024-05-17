import IMask, { FactoryArg } from 'imask';
import { ChangeEvent } from 'react';

interface IMaskCreator {
  masked: FactoryArg;
  transform?: (value: string) => string;
  maskDefault?: (value: string) => string;
}

const maskCreator = ({ masked, transform, maskDefault }: IMaskCreator) => {
  const mask = IMask.createPipe(masked, IMask.PIPE_TYPE.UNMASKED, IMask.PIPE_TYPE.MASKED);
  const unmask = IMask.createPipe(masked, IMask.PIPE_TYPE.MASKED, IMask.PIPE_TYPE.UNMASKED);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const unmasked = unmask(e.target.value);
    const newValue = mask(unmasked);
    e.target.value = newValue;
  };

  return {
    mask,
    onChange,
    transform: transform || unmask,
    unmask,
    maskDefault: maskDefault || mask,
  };
};

export const phoneMask = maskCreator({
  masked: {
    mask: '{8} 000 000-00-00',
  },
});

export const rubleMask = (min: number = 0, max: number = 10000000) =>
  maskCreator({
    masked: {
      mask: '₽ num',
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ' ',
          min,
          max,
        },
      },
    },
  });

export const squareMetersMask = (min: number = 0, max: number = 10000000) =>
  maskCreator({
    masked: {
      mask: 'М² num',
      blocks: {
        num: {
          mask: Number,
          min,
          max,
        },
      },
    },
  });

export const numberMask = (min: number = 1, max: number = 10000000) =>
  maskCreator({
    masked: {
      mask: Number,
      min,
      max,
    },
  });
