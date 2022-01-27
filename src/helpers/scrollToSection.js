import { windowScrollTo } from 'seamless-scroll-polyfill';

const scrollToSection = (id, offset) => {
  const section = document.getElementById(id);

  if (section) {
    const pos = section.getBoundingClientRect().top + window.pageYOffset - 116;

    //seamless-polifill for Safari support
    windowScrollTo(window, {
      behavior: 'smooth',
      top: pos,
      left: 0,
    });

    // window.scrollTo({
    //   top: pos,
    //   behavior: 'smooth',
    // });
  }
};
export default scrollToSection;
