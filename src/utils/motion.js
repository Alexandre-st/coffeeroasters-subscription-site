const backgroundMenu = {
  initial : {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    },
  },
  hidden: {
    y: -100,
    opacity: 0, 
      transition: {
        duration: 0.3
    },
  },
};

export { backgroundMenu };
