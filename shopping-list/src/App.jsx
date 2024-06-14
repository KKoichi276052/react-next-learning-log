import Header from './layout/Header';
import './App.css';
import Footer from './layout/Footer';
import shoppingList from './data/data';
import List from './components/List';

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-4">
        <ul className="">
          {shoppingList.map((item) => (
            <List item={item} key={item.id} />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default App;
