import './index.css';
import { Drink } from "../Drink";

const response = await fetch('http://localhost:4002/api/drinks');
const drinks = await response.json();
//console.log(drinks)

export const Menu = () => {
  const drinkList = drinks.data
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinkList.map((item) => (   
            <Drink
              key={item.id}
              name={item.name}
              image={item.image}
              layers={item.layers}
            />
          ))}
          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </div>
    </section>
  );
};