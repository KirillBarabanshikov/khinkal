import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { FC } from 'react';

import placeImg from '@/shared/assets/images/place.png';
import placeEmptyImg from '@/shared/assets/images/place-empty.png';

import styles from './Place.module.scss';

interface IPlaceProps {
    number?: number;
    index: number;
    onDragEnd: () => void;
    className?: string;
}

export const Place: FC<IPlaceProps> = ({ number, index, onDragEnd, className }) => {
    const handleDragEnd = () => {
        onDragEnd();
    };

    return (
        <div className={clsx(styles.placeWrap, styles[`placeWrap-${index}`], className)}>
            <AnimatePresence mode={'wait'}>
                {number ? (
                    <motion.div
                        key={number}
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
                        key={number}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ opacity: { duration: 0.2 } }}
                    >
                        <img src={placeEmptyImg} alt={'place-empty'} draggable={'false'} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
