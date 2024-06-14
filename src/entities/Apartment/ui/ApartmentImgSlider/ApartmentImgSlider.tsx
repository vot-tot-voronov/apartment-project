import SimpleImageSlider from 'react-simple-image-slider';
import { useRef } from 'react';

import classes from './ApartmentImgSlider.module.scss';

import { useWidth } from '@/shared/hooks';

interface IApartmentImgSliderProps {
  images: Array<string>;
}

export const ApartmentImgSlider = ({ images }: IApartmentImgSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const width = useWidth(ref);

  return (
    <div ref={ref} className={classes.imageSlider}>
      <SimpleImageSlider
        width={width}
        height={500}
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
  );
};
