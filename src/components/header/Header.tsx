import React from 'react';
import classes from './Header.module.css';
import '../../index.css';
import phone from '../../assets/images/Vector.png';
import open from '../../assets/images/OpenPhone.png';
import heart from '../../assets/images/heart.png';
import basket from '../../assets/images/basket.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    
    const navigate = useNavigate();

    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <div className={classes.left}>
                    <div className={classes.headerLogo}>
                        <h2 onClick={() => navigate('/')} className={classes.nameLogo}>QPICK</h2>
                    </div>
                    <div className={classes.phoneModal}>
                        <button className={classes.select}><img className={classes.phone} src={phone} alt="logo" /></button>
                        <button className={classes.selectmidl }>Выбрать модель телефона</button>
                        <button className={classes.selectlast}><img src={open} alt="open" /></button>
                    </div>
                </div>
                <div className={classes.rightHeader}>
                    <div className={classes.favoriteProduct}>
                        <button className={classes.favorite}>
                            <img src={heart} alt="favorite" />
                        </button>
                        <div className={classes.orangeCircle}>2</div>
                    </div>
                    <div className={classes.basketProducts}>
                        <button onClick={() => navigate('/cart')} className={classes.basketBtn}>
                            <img className={classes.basket} src={basket} alt="basket" />
                        </button>
                        <div className={classes.orangeCircleTwo}>2</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;