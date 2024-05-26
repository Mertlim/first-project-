
import empty from '../../../assets/images/empty.png'
import classes from './Empty.module.css' 

export const Empty = () => {
    return (
        <div className={classes.cart}>
            <div className={classes.image}>
                <img src={empty} alt="empty" />
            </div>
            <div className={classes.text}>
                <h2>Корзина пуста</h2>
				<p>Но это никогда не поздно исправить :)</p>
            </div>
        </div>
    );
}

