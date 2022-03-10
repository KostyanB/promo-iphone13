// seamless-polifill for Safari support
import { elementScrollIntoView } from 'seamless-scroll-polyfill';

const scrollToSection = id => {
  elementScrollIntoView(document.getElementById(id), {
    behavior: 'smooth',
    block: 'start',
  });
};
export default scrollToSection;
