import {useEffect} from 'react';

export const useDebounce = (fn: () => void, ms = 0, args = []) => {
  useEffect(() => {
    const handle = setTimeout(fn.bind(null, args), ms);
    return () => void clearTimeout(handle);
  }, args); // eslint-disable-line react-hooks/exhaustive-deps
};
