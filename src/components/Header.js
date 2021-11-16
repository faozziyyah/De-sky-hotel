import React from "react";
import styles from "../css/Header.Module.css";
import logo from "../assets/lakeview-logo.png";

function  Header() {

    return (
        <header className={styles.header}>
		<div className={styles.headerslider1}>.</div>
		<div className={styles.headerslider2}>.</div>
		<div className={styles.headerslider3}>.</div>
		<div className={styles.headerslider4}>.</div>
		<div className={styles.headerlogobox}>
		    <div className={styles.nav}>
				<a href="htt">About</a>
				<a href="htt">Amenities</a>
				<a href="htt">Testimonials</a>
				<a href="htt">Membership</a>
				<a href="htt">Contact</a>
			</div>
			<img src={logo} alt="Lakeview Logo" className={styles.headerlogo} />
		</div>
		<div className={styles.headertext}>
			<h1 className={styles.heading}>
				<span className={styles.headingprimarymain}>A Great Lifestyle</span>
				<span className={styles.headingprimarysub}>In a Spectacular Setting</span>
			</h1>
		</div>
		<div className={styles.headerbtnbox}>
			<a href="htt" className={styles.headerbtn}>Member Login</a>
			<a href="htt" className={styles.headerbtn}>Become a Member</a>
		</div>
	</header>
    );
}

export default Header