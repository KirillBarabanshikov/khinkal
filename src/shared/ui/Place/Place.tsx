import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { FC, useEffect, useState } from 'react';

import placeImg from '@/shared/assets/images/place.png';
import placeEmptyImg from '@/shared/assets/images/place-empty.png';

import styles from './Place.module.scss';

interface IPlaceProps {
    number?: number;
    index: number;
    onRemove: () => void;
    className?: string;
}

export const Place: FC<IPlaceProps> = ({ number, index, onRemove, className }) => {
    const [showCancel, setShowCancel] = useState(false);

    const handleDragEnd = () => {
        setShowCancel(true);
    };

    const handleCancel = () => {
        setShowCancel(false);
    };

    const handleTimeout = () => {
        onRemove();
        setShowCancel(false);
    };

    return (
        <div className={clsx(styles.placeWrap, styles[`placeWrap-${index}`], className)}>
            <AnimatePresence mode={'wait'}>
                {number && !showCancel ? (
                    <motion.div
                        key={`${number}-${showCancel}`}
                        drag={'y'}
                        dragConstraints={{ top: -300, bottom: 300 }}
                        onDragEnd={handleDragEnd}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ opacity: { duration: 0.2 } }}
                        className={styles.place}
                    >
                        <div className={styles.number}>
                            <span>{number}</span>
                        </div>
                        <img src={placeImg} alt={'place'} draggable={'false'} />
                    </motion.div>
                ) : (
                    <motion.div
                        key={`${number}-${showCancel}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ opacity: { duration: 0.2 } }}
                        className={clsx(styles.place, styles.empty)}
                    >
                        {showCancel && (
                            <button onClick={handleCancel} className={styles.cancel}>
                                Отменить действие <ProgressCircle onTimeout={handleTimeout} />
                            </button>
                        )}
                        <img src={placeEmptyImg} alt={'place-empty'} draggable={'false'} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface IProgressCircleProps {
    onTimeout: () => void;
}

const ProgressCircle: FC<IProgressCircleProps> = ({ onTimeout }) => {
    const [time, setTime] = useState(5);
    const radius = (48 - 2) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (100 / 100) * circumference;

    useEffect(() => {
        if (time === 0) onTimeout();

        const timeout = setTimeout(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [time]);

    return (
        <div className={styles.circle}>
            <div className={styles.timer}>{time}</div>
            <svg width={'48'} height={'48'} viewBox={'0 0 48 48'}>
                <motion.circle
                    r={radius}
                    cx={48 / 2}
                    cy={48 / 2}
                    fill='transparent'
                    stroke={'#D6B98A'}
                    strokeWidth={2}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: 144.5 }}
                    transition={{ duration: 5, ease: 'easeOut' }}
                />
            </svg>
        </div>
    );
};
