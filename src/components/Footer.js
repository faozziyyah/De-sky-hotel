import React from "react";
import styles from "../css/Footer.Module.css";

function  Footer() {

    return ( 
        <div className={styles.footer}>
            <div className={styles.top}>
                    <h2 className={styles.headingsecondary}>Contact Us </h2>
            </div>
            <div className={styles.row}>

                <div className={styles.links}>
                    <h3>quick links</h3>
                    <p><a href="http://">Facebook</a></p>
                    <p><a href="https://">Twitter</a></p>
                    <p><a href="https://">Instagram</a></p>
                    <p><a href="https://">Linkedin</a></p>
                </div>

            <div className={styles.address}>
                <h3>our address</h3>
                <p>Oke-owa, Ijebu-ode, Ogun state, <br />
                    Nigeria
                </p>
                <p>De-skycomforts@gmail.com</p>
                <p>(+234)-123-456-7890</p>
            </div>

            </div>

        </div>
    );
}

export default Footer