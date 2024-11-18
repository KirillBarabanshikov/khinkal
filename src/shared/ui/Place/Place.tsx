import clsx from 'clsx';
import { FC } from 'react';

import placeImg from '@/shared/assets/images/place.png';

import styles from './Place.module.scss';

interface IPlaceProps {
    number: number;
    numberPosition: 'left' | 'right';
    className?: string;
}

export const Place: FC<IPlaceProps> = ({ number, numberPosition, className }) => {
    return (
        <div className={clsx(styles.placeWrap, styles[numberPosition], className)}>
            <div className={styles.place}>
                <div className={styles.number}>
                    <span>{number}</span>
                </div>
                <img src={placeImg} alt={'place'} />
            </div>
        </div>
    );
};
