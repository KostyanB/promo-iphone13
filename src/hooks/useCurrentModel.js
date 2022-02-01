import { useState } from 'react';

const useCurrentModel = () => {
  const [currentColor, setCurrentColor] = useState('');
  const [currentImg, setCurrentImg] = useState('');
  const [currentMemory, setCurrentMemory] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');

  const setCurrentModel = model => {
    const { color, imgSrc, memory, price } = model;
    setCurrentColor(color);
    setCurrentImg(imgSrc);
    setCurrentMemory(memory);
    setCurrentPrice(price);
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
