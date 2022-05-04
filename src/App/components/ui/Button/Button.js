import React, { useEffect, useState }  from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props)=>{ // fonction pour créer composant, autre méthode que class qui extends react.component
    const [isClicked, setIsClicked] = useState(false); //délcare un état
    //use => hooks, useState permet de renvoyer attribut de class + mutateur
    // 

    useEffect(() => {
        console.log('isCliked a changer => ', isClicked);
        if (true === isClicked) {
            setTimeout(() => {
                setIsClicked(false);
            }, 1000)
        }
    }, [isClicked]) // détecte les changements sur isClicked, si on met rien potentiellement ça agit sur tout changement

    return <button 
        className={`${style.Button}${isClicked?''+style.clicked:''}`}
        style={{...props.style, backgroundColor:props.bgColor, color:props.color}}
        type={props.type}
        onClick={(evt) => {
            if(true !== isClicked) {
                setIsClicked(true);
                props.onButtonClicked()
            }
        }}
    >
        {props.children}
        <br/>
        {isClicked.toString()}
    </button>
}

Button.propTypes={
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    onButtonClicked: PropTypes.func.isRequired
}

Button.defaultProps={
    type:'button',
    onButtonClicked:()=>{}
}
export default Button