import Logo from '../Components/Logo';
import NumResult from '../Components/NumResults';
import Search from '../Components/Search';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult />
    </nav>
  );
}
