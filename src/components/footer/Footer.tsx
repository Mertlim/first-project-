import React from 'react';
import classes from  './Footer.module.css'
import inter from '../../assets/images/inter.png'
import vk from '../../assets/images/VK.png'
import inst from '../../assets/images/Instagram.png'
import tg from '../../assets/images/Telegram.png'
import whatsapp from '../../assets/images/Whatsapp.png'


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.content}>
                <div className={classes.footer_logo}>QPICK</div>
                <div className={classes.links}>
                    <div className={classes.Favourites}>Избранное</div>
                    <div className={classes.Bascet}>Корзина</div>
                    <div className={classes.Contacts}>Контакты</div>
                </div>
                <div className={classes.right_info}>
                    <div className={classes.conditions}>Условия сервиса</div>
                    <div className={classes.language}>
                        <img src={inter} alt="inter" />
                        <div className={classes.kz}>Каз</div>
                        <div className={classes.ru}>Рус</div>
                        <div className={classes.eu}>Eng</div>
                    </div>
                </div>
                <div className={classes.social}>
                    <img src={vk} alt="vk" />
                    <img src={inst} alt="inst" />
                    <img src={tg} alt="tg" />
                    <img src={whatsapp} alt="whatsapp" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;