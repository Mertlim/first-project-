import React, { useContext } from 'react';
import { Context } from '../../Context/Cart';
import { Button } from '../../Ui/Button/Button.jsx';
import { Card } from './Card/Card';
import classes from './CartSection.module.css';
import { Empty } from './Empty/Empty';

export const CartSection = () => {
	const { cart } = useContext(Context);

	const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

	return (
		<div className={classes.cartSection}>
			<div className={classes.cartt}>
                <div classes={{ marginBottom: 13 }}>Корзина</div>
			    {cart.length > 0 ? (
				    <div className={classes.cartsBlock}>
					    <div className={classes.cartCard}>
						    <div className={classes.cartScroll}>
							    {cart.map(cart => (
								    <Card key={cart.id} {...cart} />
							    ))}
						    </div>
					    </div>
					    <div className={classes.price}>
						    <div className={classes.total}>
							    <span>Итого</span>
							    <span>{totalPrice} ₸</span>
						    </div>
						    <Button classes={{ width: '100%' }}>Перейти к оформлению</Button>
					    </div>
				    </div>
			    ) : (
				    <Empty />
			    )}
			</div>
		</div>
	);
};