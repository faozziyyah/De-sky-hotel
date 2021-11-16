import React from "react";
import styles from "../css/Aboutimage.Module.css";

function  Aboutimage(props) {

    return ( 
        <div className={styles.composition}>
        <img 
        sizes={props.size}
        className={props.className}
        alt={props.alt}
        src={props.src}
        />
        </div>
    );
}

export default Aboutimage