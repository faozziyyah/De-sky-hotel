import React from "react";
import Article from "./Article";
import styles from "../css/About.Module.css";
import Aboutimage from "./Aboutimage";
import bed from "../assets/bed.jpg";
import bed1 from "../assets/bed1.jpg";
import bed2 from "../assets/bed2.jpg";
import '../index.css';

function  About() {

    return ( 
        <section className={styles.about}>
            <div className={styles.top}>
                <h2 class={styles.headingsecondary}>Welcome to De-Sky Comfort Hotel and Suits!</h2>
            </div>
        <div className={styles.second}>

            <div className={styles.left}>
            <Article 
                title='Become a top-rated golfer' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            />
            <Article 
                title='Take in our breathtaking views' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            />
            <Article 
                title='Be a part of our elite heritage' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            />
            <a href="htt" class={styles.btnrectangular}>Learn More &rarr;</a>
        </div>

            <div className={styles.right}>
                <Aboutimage
                    sizes="(max-width:61.9em) 20vw, (max-width:48em) 21vw, (max-width:36em) 30vw, 252px"
                    className="aboutimage aboutimage1"
                    alt="image1"
                    src={bed} 
                />
                <Aboutimage
                    sizes="(max-width:61.9em) 20vw, (max-width:48em) 21vw, (max-width:36em) 30vw, 252px"
                    className="aboutimage aboutimage2"
                    alt="image2"
                    src={bed1} 
                />
                <Aboutimage
                    sizes="(max-width:61.9em) 20vw, (max-width:48em) 21vw, (max-width:36em) 30vw, 252px"
                    className="aboutimage aboutimage3"
                    alt="image3"
                    src={bed2} 
                />
            </div>

            </div>
        </section>
    );
}

export default About