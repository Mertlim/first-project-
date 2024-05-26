import React, { useContext } from 'react';
import { Context } from '../../../Context/Cart.jsx';
import classes from './Card.module.css';

export const Card = ({ id, title, imageUrl, price, count }) => {

	const { setCart, handleDeleteCardCart } = useContext(Context);

	return (
		<article className={classes.card}>
			<div className={classes.top}>
				<div className={classes.images}>
					<img src={imageUrl} alt={title} />
					<button onClick={() => handleDeleteCardCart(id)}>
						Удалить
					</button>
				</div>
				<div className={classes.info}>
					<h5>{title}</h5>
					<span>{price} ₸</span>
				</div>
			</div>
			<div className={classes.bottom}>
				<span>{price * count} ₸</span>
			</div>
        </article>
	)

}