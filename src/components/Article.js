import React from "react";
import styles from "../css/Article.Module.css";

function  Article(props) {

    return ( 
        <div className={styles.article}>
            <h3 className={styles.headingtertiary}>{props.title}</h3>
            <p className={styles.paragraph}>{props.description}</p>
        </div>
    );
}

export default Article