import { useEffect, useState, useRef } from 'react';

const useFixedNavbarProject = (startSectionRef, stopSectionRef) => {
  const [isNavbarProjectFixed, setIsNavbarProjectFixed] = useState(false);
  const navbarProjectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const startSectionTop = startSectionRef.current?.offsetTop || 0;
      const stopSectionTop = stopSectionRef.current?.offsetTop || 0;
      const scrollY = window.scrollY;

      if (scrollY >= startSectionTop && scrollY < stopSectionTop) {
        setIsNavbarProjectFixed(true);
      } else {
        setIsNavbarProjectFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startSectionRef, stopSectionRef]);

  return { isNavbarProjectFixed, navbarProjectRef };
};

export default useFixedNavbarProject;
