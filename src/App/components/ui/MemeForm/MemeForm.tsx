import React from "react";

import styles from "./MemeForm.module.css";
import PropTypes from "prop-types";
import { IImage } from "orsys-tjs-meme/dist/interfaces/common";

interface IMemeFormProps{
  images:Array<IImage>
}

const MemeForm:React.FunctionComponent<IMemeFormProps> = (props) => {
  return (
       <div data-testid="MemeForm" className={styles.MemeForm}>
        <form >
          <h1>Titre</h1>
          <input
            type="text"
            id="f_titre"
            placeholder="saisir titre"
             />
          <hr />
          <h2>Image</h2>
          <select
           
          >
            <option value="-1">Aucune</option>
           {
             props.images.map((e:IImage, i:number)=>{return <option key={`opt-${i}`} value={e.id}>{e.name}</option>})
           }
          </select>
          <hr />
          <h2>text</h2>
          <input
            type="text"
           
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
              
              />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                
              />
            </div>
          </div>
          <hr />
          <label htmlFor="f_color">Couleur</label>
          <input
            type="color"
            id="f_color"
           
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_sz">font-size:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                
                min={0}
               
              />
            </div>
            <div>
              <label htmlFor="f_fw">font-weight:</label>
              <br />
              <input
                type="number"
                className={styles.smallInput}
                min="100"
                step="100"
                max="900"
               
              />
            </div>
          </div>
          <div className={styles.half}>
            <div>
              <label htmlFor="f_underline">underline:</label>
              <br />
              <input
                id="f_underline"
                type="checkbox"
                
              />
            </div>
            <div>
              <label htmlFor="f_italic">italic:</label>
              <br />
              <input
                id="f_italic"
                type="checkbox"
               
              />
            </div>
          </div>
          <div className={styles.half}>
           
          </div>
        </form>
      </div>
  );
};



export default MemeForm;