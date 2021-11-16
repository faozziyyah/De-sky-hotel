import React from "react";
import Member from "./Member";
import styles from "../css/Membership.Module.css";

function  Membership() {

    return ( 
            <div className={styles.membership}>

                <div className={styles.top}>
                    <h2 className={styles.headingsecondary}>Membership Plans </h2>
                </div>

                <div className={styles.memberrow}>
                    <Member 
                        className= {styles.plansidefront1}
                        class={styles.planimage1}
                        title= "Bronze Member"
                        firstlist= "Unlimited golf course access"
                        secondlist= "Access to all hotel amenities"
                        thirdlist= "Complimentary Palmer Advantage"
                        fourthlist= "Complimentary spouse membership"
                        memberlink= "Become a Member"
                        costvalue= "$15,000"
                        duration= "/ year"
                    />
                    <Member 
                        className= {styles.plansidefront1}
                        class={styles.planimage2}
                        title= "Silver Member"
                        firstlist= "Unlimited golf course access"
                        secondlist= "Access to swimming pool"
                        thirdlist= "Complimentary Palmer Advantage"
                        fourthlist= "Access to tennis courts"
                        memberlink= "Become a Member"
                        costvalue= "$25,000"
                        duration= "/ year"
                    />
                    <Member 
                        className= {styles.plansidefront1}
                        class={styles.planimage3}
                        title= "Gold Member"
                        firstlist= "Personalized dining exprience"
                        secondlist= "Access to private pool"
                        thirdlist= "Access to tennis courts"
                        fourthlist= "Access to fitness center"
                        memberlink= "Become a Member"
                        costvalue= "$50,000"
                        duration= "/ year"
                    />
                </div>

            </div>
    );
}

export default Membership