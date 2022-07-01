import React, { useEffect, useState } from 'react';
import { fetchSales } from '../../api/api';
import Card from '../Card';
import styles from './index.module.scss';

interface ICard {
    id: string;
    ownerId: string;
    price: string;
}

const Cards = () => {
    const [cards, setCards] = useState<ICard[]>([])

    const fetchData = async () => {
        const result = await fetchSales();
        
        if (result?.data?.sales) {
            setCards(result.data.sales);
        }
        
    }

    const convertPrice = (price: string) => {
        const value = parseFloat(price);
        return value / Math.pow(10, 24);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={styles.cards}>
            {
                cards.map((card) => <Card key={card.id} name={card.ownerId} price={convertPrice(card.price)} />)
            }
        </div>
    )
}

export default Cards;