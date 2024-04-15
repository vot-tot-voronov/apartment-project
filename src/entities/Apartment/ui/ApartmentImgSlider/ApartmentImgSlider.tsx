import SimpleImageSlider from 'react-simple-image-slider';

import classes from './ApartmentImgSlider.module.scss';

interface IApartmentImgSliderProps {
  images: Array<string>;
}

export const ApartmentImgSlider = ({ images }: IApartmentImgSliderProps) => {
  return (
    <div className={classes.imageSlider}>
      <SimpleImageSlider
        width={924}
        height={500}
        slideDuration={0.3}
        navStyle={2}
        navSize={45}
        navMargin={0}
        images={images}
        showBullets
        showNavs
      />
    </div>
  );
};
