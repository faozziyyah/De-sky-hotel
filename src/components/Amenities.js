import React from "react";
import styles from "../css/Amenities.Module.css";

function  Amenities() {

    return ( 
        <div className={styles.amenities}>
            <div className={styles.title}>
            <h2 class={styles.headingsecondary}>Hotel Amenities</h2>
            </div>
            <div className={styles.content}>

			    <div className={styles.amenitytop}>
				<div class={styles.amenity}>
					<div class={styles.amenity1}>
						<div class={styles.amenityoverlay}></div>
						<h3 class={styles.amenitytitle}>Weddings & Events</h3>
						<div class={styles.amenitycontent}>
							<i class="amenity-box__icon icon-basic-video"></i>
							<h3 class={styles.headingtertiary}>Weddings & Events</h3>
							<p class={styles.text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
							</p>
						</div>
					</div>
				</div>
				<div class={styles.amenity}>
					<div class={styles.amenity2}>
						<div class={styles.amenityoverlay}></div>
						<h3 class={styles.amenitytitle}>Golf Course</h3>
						<div class={styles.amenitycontent}>
							<i class="amenity-box__icon icon-basic-pin1"></i>
							<h3 class={styles.headingtertiary}>Golf Course</h3>
							<p class={styles.text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
							</p>
						</div>
					</div>
				</div>
				</div>

				<div className={styles.amenitybottom}>
				<div class={styles.amenity}>
					<div class={styles.amenity3}>
						<div class={styles.amenityoverlay}></div>
						<h3 class={styles.amenitytitle}>Tennis Courts</h3>
						<div class={styles.amenitycontent}>
							<i class="amenity-box__icon icon-basic-cup"></i>
							<h3 class={styles.headingtertiary}>Tennis Courts</h3>
							<p class={styles.text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
							</p>
						</div>
					</div>
				</div>
				<div class={styles.amenity}>
					<div class={styles.amenity4}>
						<div class={styles.amenityoverlay}></div>
						<h3 class={styles.amenitytitle}>Club House</h3>
						<div class={styles.amenitycontent}>
							<i class="amenity-box__icon icon-basic-home"></i>
							<h3 class={styles.headingtertiary}>Club House</h3>
							<p class={styles.text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
							</p>
						</div>
					</div>
				</div>
				</div>
                


            </div>
        </div>
    );
}

export default Amenities