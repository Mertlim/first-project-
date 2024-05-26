import React from 'react';
import classes from './Banner.module.css';
import iphone from '../../assets/images/iphone.png';

const Banner = () => {
    return (
        <div className={classes.banner}>
            <div className={classes.title}>
				<h2>Аксессуары для Iphone 13 Pro Max</h2>
			</div>
			<div className={classes.image}>
				<img src={iphone} alt='iphone' />
			</div>
        </div>
    );
}

export default Banner;