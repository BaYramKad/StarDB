import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <h1>Star DB</h1>
      <nav>
        <a hrefLang="#">People</a>
        <a hrefLang="#">Planets</a>
        <a hrefLang="#">Starships</a>
      </nav>
    </div>
  );
};
