const scrollToSection = (id, offset) => {
  const section = document.getElementById(id);

  if (section) {
    const pos = section.getBoundingClientRect().top + window.pageYOffset - 116;

    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  }
};
export default scrollToSection;
