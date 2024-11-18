import clsx from 'clsx';
import { motion } from 'motion/react';
import { useState } from 'react';

import { Keyboard } from '@/shared';
import khinkalImg from '@/shared/assets/images/khinkal.png';
import { Place } from '@/shared/ui';

import styles from './Area.module.scss';

export const Area = () => {
    const [isRotate, setIsRotate] = useState(false);
    const [selectedPlaces, setSelectedPlaces] = useState<number[]>([]);

    const handleSelect = (number: number) => {
        setSelectedPlaces((prev) => [...prev, number]);
    };

    return (
        <motion.div animate={{ rotate: isRotate ? 180 : 0 }} transition={{ damping: 0 }} className={styles.area}>
            <img
                src={khinkalImg}
                alt='khinkal'
                onClick={() => setIsRotate((prev) => !prev)}
                className={clsx(styles.khinkal, styles.left)}
            />
            <img
                src={khinkalImg}
                alt='khinkal'
                onClick={() => setIsRotate((prev) => !prev)}
                className={clsx(styles.khinkal, styles.right)}
            />
            {selectedPlaces.map((number) => {
                return <Place key={number} number={number} numberPosition={'left'} />;
            })}
            <Keyboard className={styles.keyboard} onSelect={handleSelect} />
        </motion.div>
    );
};
