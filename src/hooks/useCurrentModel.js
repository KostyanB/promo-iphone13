import { useEffect, useState } from 'react';

const useCurrentModel = () => {
  const [currentColor, setCurrentColor] = useState('');
  const [currentImg, setCurrentImg] = useState('');

  const setCurrentModel = model => {
    setCurrentColor(model.color);
    setCurrentImg(model.imgSrc);
  };

  return {
    currentColor,
    setCurrentColor,
    currentImg,
    setCurrentImg,
    setCurrentModel,
  };
};
export default useCurrentModel;
