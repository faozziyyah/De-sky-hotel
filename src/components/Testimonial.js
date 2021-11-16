import React from "react";
import styles from "../css/Testimonial.Module.css";
import Testimony from "./Testimony";
import member1 from "../assets/member-1-img.jpg";
import member2 from "../assets/member-2-img.jpg";

function  Testimonial() {

    return ( 
        <div className={styles.testimonial}>
             <div className={styles.top}>
                <h2 class={styles.headingsecondary}>Stories from Our Esteemed Members </h2>
            </div>
        <div class={styles.row}>
            <Testimony
                src={member1}
                figcaption= "Pierre Cox"
                title= "Lakeview is my home away from home"
                para= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lectus dapibus, interdum dolor sit amet, mattis lectus. Nulla fringilla convallis justo, auctor efficitur mi tempor ac. Donec viverra interdum finibus. Aliquam quis scelerisque mi, eget faucibus nunc. "
            />
            <Testimony
                src={member2}
                figcaption= "Cierra Verga"
                title= "I learned to play every shot here"
                para= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lectus dapibus, interdum dolor sit amet, mattis lectus. Nulla fringilla convallis justo, auctor efficitur mi tempor ac. Donec viverra interdum finibus. Aliquam quis scelerisque mi, eget faucibus nunc. "
            />
            </div>
        </div>
    );
}

export default Testimonial