import React, { useMemo } from 'react';
import NavItem from './NavItem';

const NavItems = () => {
  const nav = useMemo(
    () => [
      ['/main/present', 'О товаре'],
      ['/main/card', 'Карточка товара'],
      ['/main/characteristics', 'Характеристики'],
      ['/main/cross-sell', 'Дополняют товар'],
      ['/feedback', 'Отзывы'],
      ['/delivery-terms', 'Условия доставки'],
    ],
    [],
  );

  return (
    <>
      {nav.map((item, i) => (
        <NavItem key={i} href={item[0]} name={item[1]} />
      ))}
    </>
  );
};
export default NavItems;
