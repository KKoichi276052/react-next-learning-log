import styles from './CountryList.module.css';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message>Add your first city by clicking on a city on the map</Message>
    );

  // const countries = Array.from(new Set(cities.map((city) => city.country)));
  const countries = Array.from(
    cities
      .reduce((map, city) => map.set(city.country, city), new Map())
      .values()
  );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country} country={country} />
      ))}
    </ul>
  );
}
