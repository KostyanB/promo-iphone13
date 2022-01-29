// seamless-polifill for Safari support

import { elementScrollIntoView } from 'seamless-scroll-polyfill';

const scrollToSection = section =>
  elementScrollIntoView(section, {
    behavior: 'smooth',
    block: 'start',
  });
export default scrollToSection;
