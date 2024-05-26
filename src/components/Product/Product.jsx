import { useEffect, useState } from "react";
import { Card } from './Card/Card.jsx'
import classes from '../Product/Product.module.css'

const Product = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(true);

	useEffect(() => {
        const fetchCard = async () => {
            try {
                const response = await fetch('https://a5bdb0bf799f07cd.mokky.dev/firstAPI')

                if (!response.ok) {
                    throw new Error('An error occurred when receiving goods')
                }
                setProduct(await response.json())
            }
            catch {
                setLoading(false)
            }
        }
        fetchCard()
    }, [])

    if (!isLoading) return <div style={{fontSize: '32px'}}>loading...</div>

    return (
        <div className={classes.blockCard}>
            {product.map(card => (
                <Card key={card.id} {...card}/>
            ))}
        </div>
    );
}

export default Product;

