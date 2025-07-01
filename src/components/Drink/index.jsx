import './index.css';
import { Layer } from "../Layer";

export const Drink = ({id, ordered, name, image, layers}) => {
    const drinkOrdered = ordered ? "order-btn order-btn--ordered" : "order-btn";
    return(
        <div className="drink"> 
            <div className="drink__product"> 
                <div className="drink__cup"> {ordered}
                  <img src={`http://localhost:4002${image}`} /> 
                </div>
                <div className="drink__info"> 
                    <h3>{name}</h3>
                    {layers.map((singleLayerObject, index) => (
                    <Layer
                    key={index}
                    layer={singleLayerObject}
                    />
                    ))}
                </div>
            </div>
            <form className="drink__controls" data-id={id}> 
                <input type="hidden" className="order-id" value={id} /> 
                <button className={drinkOrdered}>
                   {ordered ? "Zrušit" : "Objednat"} 
                </button>
            </form>
        </div>
    )
};

const bought = async (event) => {
  const id = event.target.dataset.id;
  const resp = await fetch(`http://localhost:4002/api/drinks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({done: true}),
  });

  if (!resp.ok) {
    alert("Něco se nepovedlo, zkuste to za chvíli znovu.");
  } else {
    window.location.reload();
  }
}; 

document
  .querySelectorAll(".btn-tick")
  .forEach((element) => element.addEventListener("click", handleDone));

// className={ordered ? "order-btn order-btn--ordered" : "order-btn"}
//  {ordered ? "Zrušit" : "Objednat"}

// **Globální JavaScript pro obsluhu formulářů**
document.addEventListener('DOMContentLoaded', () => {
    // **Zde také není definována BACKEND_URL, používá se přímá URL**
    // const BACKEND_URL = 'http://localhost:4002'; 

    const handleOrderSubmit = async (event) => {
        event.preventDefault(); // Zabráníme výchozímu chování formuláře (obnovení stránky)

        const form = event.currentTarget; 
        const id = form.dataset.id; 

        console.log("ID nápoje pro objednání:", id);

        const bodyPayload = JSON.stringify([{ op: 'replace', path: '/ordered', value: true }]);

        try {
            // **Používáme přímou URL v fetch požadavku**
            const resp = await fetch(`http://localhost:4002/api/drinks/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: bodyPayload,
            });

            if (!resp.ok) {
                alert("Něco se nepovedlo, zkuste to za chvíli znovu.");
            } else {
                console.log("Odpověď od API:", await resp.json());
                window.location.reload();
            }
        } catch (error) {
            console.error("Chyba při odesílání požadavku:", error);
            alert("Došlo k chybě při komunikaci se serverem.");
        }
    };

    document.querySelectorAll(".drink__controls").forEach((formElement) => {
        formElement.addEventListener("submit", handleOrderSubmit);
    });
});
