import './index.css';

export const Header = () => {
  return (
    <header>
      <div className="header__content container">
        <div className="site-logo"></div>
        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// **UPRAVENÁ GLOBÁLNÍ FUNKCE NAVIGATION**
const navigation = () => {
  const navBtn = document.querySelector('.nav-btn');
  const rolloutNav = document.querySelector('.rollout-nav');

  if (navBtn && rolloutNav) {
    // Zobrazování a skrývání navigačního menu
    navBtn.addEventListener('click', () => {
      rolloutNav.classList.toggle('nav-closed');
    });

    // Schování navigace při jakémkoli kliknutí uvnitř navigace
    rolloutNav.addEventListener("click", () => {
      rolloutNav.classList.add('nav-closed');
    });
    console.log('Navigační prvky nalezeny a posluchače nastaveny.');
  } else {
    // **ODSTRANĚNA REKURSIVNÍ SMYČKA setTimeout(navigation, 100);**
    // Pokud se prvky nenajdou, jen to zalogujeme, ale nezacyklíme stránku.
    // To znamená, že navigace nemusí fungovat, pokud se vykreslí po spuštění tohoto skriptu.
    console.log('Navigační prvky nenalezeny při načítání DOMu. React se možná ještě nevykreslil.');
  }
};
// Spustíme inicializaci, jakmile je DOM plně načten
document.addEventListener('DOMContentLoaded', navigation);