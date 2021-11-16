import React from "react";
import styles from "../css/Testimonial.Module.css";

function  Testimony(props) {

    return ( 
            <div class={styles.testimonial1}>
				<figure class={styles.testimonialshape}>
					<img src={props.src} class={styles.testimonialimage} alt="Male Golfer" />
					<figcaption class={styles.testimonialcaption}>{props.figcaption}</figcaption>
				</figure>
				<div class={styles.testimonialtext}>
					<h3 class={styles.headingtertiary}>{props.title}</h3>
					<p class={styles.testimonialpara}>{props.para}</p>
				</div>
			</div>
    );
}

export default Testimony