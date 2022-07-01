import React from 'react';
import Cards from '../Cards';
import Dropdown from '../Dropdown';
import styles from './index.module.scss';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.logo} />
            <div className={styles.content}>
            <div className={`${styles.header} flex justify-between`}>
                <div className={styles.title}>Market</div>
                <Dropdown value="1 Month"></Dropdown>
            </div>
            <Cards />
            </div>
        </div>
    )
}

export default Main;