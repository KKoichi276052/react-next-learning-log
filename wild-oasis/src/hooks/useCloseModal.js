import { useRef, useEffect } from 'react';

export default function useCloseModal(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function onClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) handler();
      }

      function onEscPress(event) {
        if (event.key === 'Escape') handler();
      }

      document.addEventListener('click', onClickOutside, listenCapturing);
      document.addEventListener('keydown', onEscPress, listenCapturing);

      return () => {
        document.removeEventListener('click', onClickOutside, listenCapturing);
        document.removeEventListener('keydown', onEscPress, listenCapturing);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}
