import clsx from 'clsx';
import { motion } from 'motion/react';
import { useState } from 'react';

import { Keyboard } from '@/shared';
import khinkalImg from '@/shared/assets/images/khinkal.png';
import { Place } from '@/shared/ui';

import styles from './Area.module.scss';

export const Area = () => {
    const [isRotate, setIsRotate] = useState(false);
    const [selectedPlaces, setSelectedPlaces] = useState<number[]>([0, 0, 0, 0]);

    const handleSelect = (number: number) => {
        setSelectedPlaces((prev) => {
            const newPlaces = [...prev];
            const index = newPlaces.indexOf(0);
            if (index !== -1) {
                newPlaces[index] = number;
            }
            return newPlaces;
        });
    };

    const handleRemove = (index: number) => {
        setSelectedPlaces((prev) =>
            prev.map((num, idx) => {
                if (index === idx) return 0;
                return num;
            }),
        );
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
            {Array.from({ length: 4 }).map((_, index) => {
                const number = selectedPlaces[index];

                return <Place key={index} number={number} index={index} onRemove={() => handleRemove(index)} />;
            })}
            <Keyboard className={styles.keyboard} onSelect={handleSelect} />
        </motion.div>
    );
};
