import React from 'react';
import styles from './index.module.scss';
import arrow from './arrow.svg'

type Props = {
    value?: string;
}

const Dropdown = ({ value }: Props) => {
    return (
        <div className={styles.dropdown}>
            {value}
            <img alt="open dropdown" className={styles.arrow} src={arrow} />
        </div>
    )
} 

export default Dropdown;