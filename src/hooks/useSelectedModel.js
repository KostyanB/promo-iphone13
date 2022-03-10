import { useState } from 'react';

const useSelectedModel = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedMemory, setSelectedMemory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const setSelectedModel = model => {
    const { color, imgSrc, memory, price } = model;
    setSelectedColor(color);
    setSelectedImg(imgSrc);
    setSelectedMemory(memory);
    setSelectedPrice(price);
  };

  return {
    selectedColor,
    selectedImg,
    selectedMemory,
    selectedPrice,
    setSelectedModel,
  };
};
export default useSelectedModel;
