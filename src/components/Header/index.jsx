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

const Navigation = () => {
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
    console.log('Navigační prvky nenalezeny při načítání DOMu. React se možná ještě nevykreslil.');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Přidáme malé zpoždění, abychom dali čas na vykreslení
  setTimeout(() => {
    Navigation();
  }, 100);
});