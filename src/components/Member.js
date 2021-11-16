import React from "react";
import styles from "../css/Membership.Module.css";

function  Member(props) {

    return ( 
				<div className={styles.plan}>
					<div className={props.className}>
						<div className={props.class}>
							&nbsp;
						</div>
						<h4 className={styles.planheading1}> {props.title}</h4>
						<div className={styles.planbullets}>
							<ul>
								<li>{props.firstlist}</li>
                                <li>{props.secondlist}</li>
                                <li>{props.thirdlist}</li>
                                <li>{props.fourthlist}</li>
							</ul>
						</div> 
					</div>
					<div class={styles.plansideback}> 
						<div class={styles.planbutton}>
							<div class={styles.plancostbox}>
								<p class={styles.plancostvalue}>{props.costvalue}</p>
								<p class={styles.plancostduration}>{props.duration}</p>
							</div>
							<a href="https" class={styles.btnbrown}>{props.memberlink}</a>
						</div>
					</div>
				</div>
    );
}

export default Member