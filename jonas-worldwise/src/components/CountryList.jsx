import styles from './CountryList.module.css';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message>Add your first city by clicking on a city on the map</Message>
    );

  const countries = Array.from(new Set(cities.map((city) => city.country)));

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={city} />
      ))}
    </ul>
  );
}
