import { useEffect, useState } from 'react';

export const useWindowSize = () => {
     const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
     useEffect(() => {
          function updateSize() {
               setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
     }, []);
     return size;
};
