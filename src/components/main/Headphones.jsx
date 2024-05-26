import classes from './main.module.css';
import favorite from '../../assets/images/heart.png'
import star from '../../assets/images/star.png'
import blackHeart from '../../assets/images/blackHeart.png'
import AppleEarPods from '../../assets/images/AppleEarPods.png'
import AppleBYZ from '../../assets/images/AppleBYZ.png'


const Headphones = () => {
    return (
        <div className={classes.headphones}>
            <div className={classes.content_2}>    
                <div className={classes.h3}>
                    <h3>Наушники</h3>
                </div>
                <div className={classes.first_row}>  
                    <div className={classes.card}>
                        <div className={classes.images}>
                            <button className={classes.btn_heart}>
                                <img className={classes.heart} src={favorite} alt="WhiteHeart" />
                            </button>
                            <img className={classes.product_img} src={AppleBYZ} alt="AppleBYZ" />
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
                            <img className={classes.product_img} src={AppleEarPods} alt="AppleBYZ" />
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
export default Headphones;