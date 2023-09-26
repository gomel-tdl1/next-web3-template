import { useState, useEffect } from 'react';

import tailwindConfig from '../../tailwind.config';

type Theme = typeof tailwindConfig.theme & {
  extend: {
    screens: {
      [key in string]: string;
    };
  };
};

const { screens } = (tailwindConfig.theme as Theme).extend;

type BreakpointKey = keyof typeof screens;

export const useBreakpoint = (breakpointKey: BreakpointKey) => {
  const width = screens[breakpointKey];

  const [isBreakpoint, setIsBreakpoint] = useState(() => {
    try {
      return window.matchMedia(`(min-width: ${width})`).matches;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    try {
      const mql = window.matchMedia(`(min-width: ${width})`);

      const setFromQuery = ({ matches }: { matches: boolean }) => {
        setIsBreakpoint(matches);
      };

      mql.addEventListener('change', setFromQuery);
      setFromQuery(mql);

      return () => {
        mql.removeEventListener('change', setFromQuery);
      };
    } catch (error) {
      return;
    }
  }, [width]);

  return isBreakpoint;
};
