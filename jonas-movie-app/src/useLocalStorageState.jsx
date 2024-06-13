import { useState, useEffect } from 'react';

export function useLocalStorageState(key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(
    function () {
      localStorage.setItem('key', JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
