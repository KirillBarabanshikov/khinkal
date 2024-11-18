import clsx from 'clsx';
import { FC } from 'react';

import styles from './Keyboard.module.scss';

interface IKeyboardProps {
    onSelect: (number: number) => void;
    className?: string;
}

export const Keyboard: FC<IKeyboardProps> = ({ onSelect, className }) => {
    return (
        <div className={clsx(styles.keyboardWrap, className)}>
            <div className={styles.title}>ГОТОВЫ:</div>
            <div className={styles.keyboard}>
                {Array.from({ length: 27 }).map((_, index) => {
                    const number = index + 1;

                    return (
                        <button key={index} onClick={() => onSelect(number)} className={styles.key}>
                            {number}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
