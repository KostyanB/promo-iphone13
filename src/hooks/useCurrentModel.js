import { useState } from 'react';

const useCurrentModel = () => {
  const [currentColor, setCurrentColor] = useState('');
  const [currentImg, setCurrentImg] = useState('');
  const [currentMemory, setCurrentMemory] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');

  const setCurrentModel = model => {
    setCurrentColor(model.color);
    setCurrentImg(model.imgSrc);
    setCurrentMemory(model.memory);
    setCurrentPrice(model.price);
  };

  return {
    currentColor,
    currentImg,
    currentMemory,
    currentPrice,
    setCurrentModel,
  };
};
export default useCurrentModel;
