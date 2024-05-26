import star from '../../assets/images/star.png'
import classes from './main.module.css';
import favorite from '../../assets/images/favorite.png'
import AppleAirPods from '../../assets/images/AppleAirPods.png'
import gerlax from '../../assets/images/GERLAX.png'
import blackHeart from '../../assets/images/blackHeart.png'
import AppleBYZ from '../../assets/images/AppleBYZ.png';

export const WirelessHeadphones = () => {
    return (
        <div className={classes.headphones}>
            <div className={classes.content_2}>    
                <div className={classes.h3}>
                    <h3>Беспроводные наушники</h3>
                </div>
                <div className={classes.first_row}>  
                    <div className={classes.card}>
                        <div className={classes.images}>
                            <button className={classes.btn_heart}>
                                <img className={classes.heart} src={favorite} alt="WhiteHeart" />
                            </button>
                            <img className={classes.product_img} src={AppleAirPods} alt="AppleBYZ" />
                        </div>
                        <div className={classes.description}>
                            <div className={classes.name_price}>
                                <h5>Apple BYZ S852I</h5>
                                <span className={classes.cost}>2927 ₸</span>
                            </div>
                            <div className={classes.estimation}>
                                <div className={classes.star_img}>
                                    <img src={star} alt="star" />
                                </div>
                                <span>4.7</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.images}>
                            <button className={classes.btn_heart}>
                                <img className={classes.heart} src={blackHeart} alt="WhiteHeart" />
                            </button>
                            <img className={classes.product_img} src={gerlax} alt="AppleBYZ" />
                        </div>
                        <div className={classes.description}>
                            <div className={classes.name_price}>
                                <h5>Apple EarPods</h5>
                                <span className={classes.cost}>2327 ₸</span>
                            </div>
                            <div className={classes.estimation}>
                                <div className={classes.star_img}>
                                    <img src={star} alt="star" />
                                </div>
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.images}>
                            <button className={classes.btn_heart}>
                                <img className={classes.heart} src={favorite} alt="WhiteHeart" />
                            </button>
                            <img className={classes.product_img} src={AppleBYZ} alt="AppleBYZ" />
                        </div>
                        <div className={classes.description_3}>
                            <div className={classes.name_price}>
                                <h5>Apple BYZ S852I</h5>
                                <span className={classes.cost}>2927 ₸</span>
                            </div>
                            <div className={classes.estimation}>
                                <div className={classes.star_img}>
                                    <img src={star} alt="star"/>
                                </div>
                                <span>4.7</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

