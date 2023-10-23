import "./store.css";
import { Link as LinkNav } from "react-router-dom";
import Form from "./Form";

import crevete from "../../assets/crevete.jpg";
import crustace from "../../assets/crustace.jpg";
import mollusque from "../../assets/mollusque.jpg";
import poissons from "../../assets/poissons.jpg";
import vegetal from "../../assets/déchets végétaux.jpg";
import effluents from "../../assets/effluents.jpg";

function Store() {
  return (
    <>
      <div className="modal">
        <div  className="modalHead">
          <LinkNav to={`/`} className="retourner">
            {" "}
           🔙
          </LinkNav>

          <div className="modalTitle">Bienvenue dans notre boutique 🛒 </div>
        </div>
        <div className="store">
          <div className="product-card">
            <div className="product-img-container">
              <img src={crevete} alt="crevete" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets de crevettes</h2>
            </div>
            <Form produit="crevettes" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={crustace} alt="crustace" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets de crustacés</h2>
             
            </div>
            <Form produit="crustacés" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={mollusque} alt="mollusque" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets de mollusques</h2>
            
            </div>
            <Form produit="mollusque" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={poissons} alt="poissons" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets de poissons</h2>
            
            </div>
            <Form produit="poissons" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={vegetal} alt="Déchets végétaux" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets végétaux</h2>
              <p className="product-description">
              Algues, posidonies, sédiments issus de dragage
              </p>
            </div>
            <Form produit="Déchets végétaux" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={effluents} alt="effluents" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets d'effluents</h2>
             
            </div>
            <Form produit="effluents" />
          </div>



        </div>
      </div>
    </>
  );
}

export default Store;
