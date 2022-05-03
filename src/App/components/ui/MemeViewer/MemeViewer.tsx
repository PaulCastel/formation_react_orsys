import React from "react";
import PropTypes from "prop-types";
import style from "./MemeViewer.module.css";
import { I_Image, I_Meme } from "../../../interfaces/common";


interface I_MemeVieverProps {
  meme: I_Meme;
  image: I_Image | undefined;
}
const MemeViewer: React.FC<I_MemeVieverProps> = (props) => {
  return (
    <svg
      className={style.MemeViewer}
      data-testid="MemeViewer"
      viewBox={`0 0 ${props.image ? props.image.w : "1000"} ${
        props.image ? props.image.h : "1000"
      }`}
    >
      {undefined !== props.image && (
        <image href={`/img/meme/${props.image.url}`} x="0" y="0" />
      )}
      <text
        x={props.meme.x}
        y={props.meme.y}
        fontSize={props.meme.fontSize}
        fill={props.meme.color}
        textDecoration={props.meme.underline ? "underline" : "none"}
        fontStyle={props.meme.italic ? "italic" : "normal"}
        fontWeight={props.meme.fontWeight}
      >
        {props.meme.text}
      </text>
    </svg>
  );
};
export default MemeViewer;
