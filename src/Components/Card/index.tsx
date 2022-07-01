import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import styles from './index.module.scss';
import defaultImage from './defaultImage.png'
import defaultAvatar from './defaultAvatar.png'
import lastVisitIcon from './lastVisit.png';

type Props = {
    img?: string;
    avatar?: string;
    name?: string;
    lastVisit?: string;
    viewers?: string;
    title?: string;
    likes?: number;
    comments?: number;
    price?: number;
}

const Card = ({ img = defaultImage, avatar = defaultAvatar , name = "Hayden", lastVisit = "7 days ago", viewers = "34k", title ="#1 Sunset", price = 0.79, likes = 321, comments = 42 }: Props) => {
    const [isHover, setHover] = useState(false);
    const [currentLikes, setLikes] = useState(likes);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    const increasetLike = () => {
        setLikes(currentLikes + 1);
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.card}>
            <img alt="" className={styles.img} src={img} />
            <div className={styles.content}>
                <div className={styles.user}>
                    <img className={styles.avatar} alt="avatar" src={avatar} />
                    <div className={styles.userInfo}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.lastVisit}>{lastVisit}</div>
                    </div>
                    <img alt="last visit icon" className={styles.lastVisitIcon} src={lastVisitIcon} />
                    <div className={styles.lastVisitCounter}>{viewers}</div>
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div title={price.toString()} className={styles.price}>
                        {price} NEAR
                    </div>
                </div>
                <CSSTransition
                    in={isHover}
                    timeout={300}
                    classNames={{
                        enter: styles.enter,
                        enterActive: styles.enterActive,
                        exit: styles.exit,
                        exitActive: styles.exitActive,
                    }}
                    unmountOnExit
                >
                    <div onClick={increasetLike} className={styles.social}>
                        <div className={styles.socialItem}>
                            <svg className={styles.socialIcon} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 15L2.25743 8.04146C1.45231 7.26791 1 6.21875 1 5.12479C1 2.84673 2.92211 1 5.29315 1C6.43176 1 7.52374 1.43458 8.32886 2.20812L9.5 3.33333L10.6711 2.20812C11.4763 1.43457 12.5682 1 13.7069 1C16.0779 1 18 2.84673 18 5.12479C18 6.21875 17.5477 7.26791 16.7426 8.04146L12.3333 12.2778" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{currentLikes}</span>
                        </div>
                        <div className={styles.socialItem}>
                            <svg className={styles.socialIcon} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M11.25 13.5222C10.2682 13.985 9.18323 14.2249 8.08335 14.2222C6.76815 14.2217 5.47906 13.8795 4.36048 13.2339C3.2419 12.5882 2.33799 11.6647 1.75002 10.5667C1.25413 9.65034 0.997156 8.63766 1.00002 7.6111V7.22221C1.09585 5.60106 1.82899 4.06985 3.05907 2.92178C4.28915 1.7737 5.92973 1.08944 7.66668 1M11.25 1.7C12.4265 2.24877 13.416 3.09241 14.1077 4.13642C14.7995 5.18043 15.1662 6.38358 15.1667 7.6111C15.1695 8.63766 14.9126 9.65034 14.4167 10.5667L16 15L13.5 14.2222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{comments}</span>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </div>
    )
}

export default Card;