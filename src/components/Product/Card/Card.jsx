import favorite from '../../../assets/images/heart.png'
import classes from '../Card/Card.module.css'
import star from '../../../assets/images/star.png'
import { useContext } from 'react'
import { Context } from '../../../Context/Cart'
import { Button } from '../../../Ui/Button/Button'

export const Card = ({id, imageUrl, title, count, price }) => {

    const { handleAddCardCart, handleAddCardLiked } = useContext(Context);

    const cardProps = {
		id,
		imageUrl,
		title,
		count,
		price,
	};
    
    return (
        <div className={classes.card}>
            <div className={classes.images}>
                <button onClick={() => handleAddCardLiked(cardProps)} className={classes.btn_heart}>
                    <img className={classes.heart} src={favorite} alt="WhiteHeart" />
                </button>
                <img className={classes.product_img} src={imageUrl} alt="AppleBYZ" />
            </div>
            <div className={classes.description}>
                <div className={classes.name_price}>
                    <h5>{title}</h5>
                    <span className={classes.cost}>{price}₸</span>
                </div>
                <div className={classes.estimation}>
                    <div className={classes.star_img}>
                        <img src={star} alt="star" />
                    </div>
                    <span>4.7</span>
                </div>
            </div>
            <div className={classes.hover}>
				<Button onClick={() => handleAddCardCart(cardProps)} classes={{ width: 100 }}>
                    Add card
				</Button>
			</div>
        </div>
    );
}

