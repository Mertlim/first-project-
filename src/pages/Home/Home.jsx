import '../../index.css';
import Banner from '../../components/Banner/Banner.jsx'
import classes from './Home.module.css'
import Glass from '../../assets/images/Glass.png'
import silicone from '../../assets/images/mellow-yellow.png'
import blackCover from '../../assets/images/blackCover.png'
import Product from '../../components/Product/Product.jsx'
import { Card } from '../../components/Product/Card/Card.jsx'

export const Home = () => {
    return (
        <main className={classes.main}>
            <Banner/>
            <div className={classes.covers}>
                <div className={classes.content}>
                    <div className={classes.h3}>
                        <h3>Чехлы</h3>
                    </div>
                    <div className={classes.bottom_block}>
                        <div className={classes.cover}>
                            <div className={classes.image}>
                                <img src={Glass} alt="Glass" />
                            </div>
                            <div className={classes.name}>Стеклянные </div>
                        </div>
                        <div className={classes.cover}>
                            <div className={classes.image}>
                                <img src={silicone} alt="Glass" />
                            </div>
                            <div className={classes.name}>Силиконовые </div>
                        </div>
                        <div className={classes.cover}>
                            <div className={classes.image}>
                                <img src={blackCover} alt="Glass" />
                            </div>
                            <div className={classes.name}>Кожаные </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.headphones}>
                <div className={classes.content_2}>
                    <Product />
                </div>
            </div>
        </main>
    );
}

