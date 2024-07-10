import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './Map.module.css';

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate('form');
      }}
    >
      map
      <button
        className=""
        onClick={() => {
          setSearchParams({ lat: 23, lng: 23 });
        }}
      ></button>
    </div>
  );
}
