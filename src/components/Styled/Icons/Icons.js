import React from 'react';
import IconStyle from './IconStyle';

export const LogoIcon = ({
  name = 'apple logo',
  color = 'currentColor',
  width = 842,
  height = 1e3,
}) => (
  <IconStyle viewBox='0 0 842 1e3' fill='none' width={width} height={height}>
    <title>{name}</title>
    <path
      fill={color}
      d='M702 960c-54.2 52.6-114 44.4-171 19.6-60.6-25.3-116-26.9-180 0-79.7 34.4-122 24.4-170-19.6-271-279-231-704 77-720 74.7 4 127 41.3 171 44.4 65.4-13.3 128-51.4 198-46.4 84.1 6.8 147 40 189 99.7-173 104-132 332 26.9 396-31.8 83.5-72.6 166-141 227zM423 237C414.9 113 515.4 11 631 1c15.9 143-130 250-208 236z'
    />
  </IconStyle>
);

export const MenuIcon = ({
  name = 'Меню',
  color = 'currentColor',
  width = 20,
  height = 17,
}) => (
  <IconStyle viewBox='0 0 20 17' fill='none' width={width} height={height}>
    <title>{name}</title>
    <rect width='20' height='2' fill={color} />
    <rect y='15' width='20' height='2' fill={color} />
    <rect y='5' width='20' height='2' fill={color} />
    <rect y='10' width='20' height='2' fill={color} />
  </IconStyle>
);
