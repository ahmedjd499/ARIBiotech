import "./store.css";
import { Link as LinkNav } from "react-router-dom";
import Form from "./Form";

import crevete from "../../assets/crevete.jpg";
import crustace from "../../assets/crustace.jpg";
import mollusque from "../../assets/mollusque.jpg";
import poissons from "../../assets/poissons.jpg";
import vegetal from "../../assets/déchets végétaux.jpg";
import effluants from "../../assets/effluents.jpg";

function Store() {
  return (
    <>
      <div className="modal">
        <div  className="modalHead">
          <LinkNav to={`/`} className="modalClose">
            {" "}
            ◀️ Retourner
          </LinkNav>

          <div className="modalTitle">Bienvenue dans notre boutique 😁 </div>
        </div>
        <div className="store">
          <div className="product-card">
            <div className="product-img-container">
              <img src={crevete} alt="crevete" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets de crevettes</h2>
              <p className="product-description">
                Déchets issus des industries de crevettes
              </p>
            </div>
            <Form produit="crevettes" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={crustace} alt="crustace" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets de crustace</h2>
              <p className="product-description">
                Déchets issus des industries de crustace
              </p>
            </div>
            <Form produit="crustace" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={mollusque} alt="mollusque" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets de mollusque</h2>
              <p className="product-description">
                Déchets issus des industries de mollusque
              </p>
            </div>
            <Form produit="mollusque" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={poissons} alt="poissons" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets de poissons</h2>
              <p className="product-description">
                Déchets issus des industries de poissons
              </p>
            </div>
            <Form produit="poissons" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={vegetal} alt="Déchets végétaux" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets végétaux</h2>
            </div>
            <Form produit="Déchets végétaux" />
          </div>

          <div className="product-card">
            <div className="product-img-container">
              <img src={effluants} alt="effluants" className="product-img"></img>
            </div>
            <div className="product-info">
              <h2 className="product-title">Déchets d'effluants</h2>
              <p className="product-description">
                Déchets issus des industries d'effluants
              </p>
            </div>
            <Form produit="effluants" />
          </div>



        </div>
      </div>
    </>
  );
}

export default Store;
