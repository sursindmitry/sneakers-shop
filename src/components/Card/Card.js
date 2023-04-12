import styles from "./Card.module.scss";
import React from "react";

const Card = ({onFavorite, img, title, price, onPlus}) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({img, title, price});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    React.useEffect(() => {
    }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked"/>
            </div>
            <img width={133} height={112} src={img} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardCostBottom}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>

                <img className={styles.button} onClick={onClickPlus}
                     src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>

            </div>
        </div>
    )
}
export default Card;