import React from "react";

import styles from "./MemeForm.module.css";
import PropTypes from "prop-types";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { ACTIONS_CURRENT } from "../../../store/store";
import { connect } from "react-redux";

interface IMemeFormProps{
  images:Array<IImage>,
  meme:IMeme,
  onFormChange:Function
}

const MemeForm:React.FunctionComponent<IMemeFormProps> = (props) => {
  function onTextChange(evt:React.ChangeEvent<HTMLInputElement>) {
    const assembledResult={};
    assembledResult[evt.target.name] = evt.target.value;
    props.onFormChange(assembledResult);
  }

  function onNumberChange(evt:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) {
    const assembledResult={};
    assembledResult[evt.target.name] = Number(evt.target.value);
    props.onFormChange(assembledResult);
  }

  function onCheckboxChange(evt:React.ChangeEvent<any>) {
    const assembledResult={};
    assembledResult[evt.target.name] = Boolean(evt.target.value);
    props.onFormChange(assembledResult);
  }

  return (
       <div data-testid="MemeForm" className={styles.MemeForm}>
        <form >
          <h1>Titre</h1>
          <input
            type="text"
            id="f_titre"
            placeholder="saisir titre"
            name="titre"
            value={props.meme.titre}
            onChange={onTextChange}
            /*onChange={(evt) => {
              console.log(evt);
              props.onFormChange({titre:evt.target.value})
            }}*/
             />
          <hr />
          <h2>Image</h2>
          <select
            name="imageId"
            value={props.meme.imageId}
            onChange={onNumberChange}
          >
            <option value="-1">Aucune</option>
           {
             props.images.map((e:IImage, i:number)=>{return <option key={`opt-${i}`} value={e.id}>{e.name}</option>})
           }
          </select>
          <hr />
          <h2>text</h2>
          <input
            name="text"
            type="text"
            value={props.meme.text}
            onChange={onTextChange}
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input
                name="x"
                type="number"
                className={styles.smallInput}
                min={0}
                value={props.meme.x}
                onChange={onNumberChange}
              />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input
                name="y"
                type="number"
                className={styles.smallInput}
                min={0}
                value={props.meme.y}
                onChange={onNumberChange}
              />
            </div>
          </div>
          <hr />
          <label htmlFor="f_color">Couleur</label>
          <input
            name="color"
            type="color"
            id="f_color"
            value={props.meme.color}
            onChange={onTextChange}
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_sz">font-size:</label>
              <br />
              <input
                name="fontSize"
                type="number"
                className={styles.smallInput}
                value={props.meme.fontSize}
                min={0}
                onChange={onNumberChange}
              />
            </div>
            <div>
              <label htmlFor="f_fw">font-weight:</label>
              <br />
              <input
                name="fontWeight"
                type="number"
                className={styles.smallInput}
                min="100"
                step="100"
                max="900"
                value={props.meme.fontWeight}
                onChange={onNumberChange}
              />
            </div>
          </div>
          <div className={styles.half}>
            <div>
              <label htmlFor="f_underline">underline:</label>
              <br />
              <input
                name="underline"
                id="f_underline"
                type="checkbox"
                checked={props.meme.underline}
                onChange={onCheckboxChange}
              />
            </div>
            <div>
              <label htmlFor="f_italic">italic:</label>
              <br />
              <input
                name="italic"
                id="f_italic"
                type="checkbox"
                checked={props.meme.italic}
                onChange={onCheckboxChange}
              />
            </div>
          </div>
          <div className={styles.half}>
           
          </div>
        </form>
      </div>
  );
};


function mapStateToProps(state:any, ownprops:any) {
  return {
    ...ownprops,
    images:state.ressources.images,
    meme: state.current,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFormChange:(obj:any)=>{dispatch({type: ACTIONS_CURRENT.UPDATE_MEME, value:obj})}
  }
}

export const ConnectedMemeForm=connect(mapStateToProps, mapDispatchToProps)(MemeForm);
export default MemeForm;