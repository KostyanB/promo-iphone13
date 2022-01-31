import { useState } from 'react';

const useCurrentModel = () => {
  const [currentColor, setCurrentColor] = useState('');
  const [currentImg, setCurrentImg] = useState('');
  const [currentMemory, setCurrentMemory] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [modelName, setModelName] = useState('');

  const setCurrentModel = (model, name) => {
    const { color, imgSrc, memory, price } = model;
    setCurrentColor(color);
    setCurrentImg(imgSrc);
    setCurrentMemory(memory);
    setCurrentPrice(price);
    setModelName(`${name}${memory}GB ${color}`);
  };

  return {
    modelName,
    currentColor,
    currentImg,
    currentMemory,
    currentPrice,
    setCurrentModel,
  };
};
export default useCurrentModel;
