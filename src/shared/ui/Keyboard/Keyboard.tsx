import clsx from 'clsx';
import { FC } from 'react';

import styles from './Keyboard.module.scss';

interface IKeyboardProps {
    className?: string;
}

export const Keyboard: FC<IKeyboardProps> = ({ className }) => {
    return (
        <div className={clsx(styles.keyboardWrap, className)}>
            <div className={styles.title}>ГОТОВЫ:</div>
            <div className={styles.keyboard}>
                {Array.from({ length: 27 }).map((_, index) => {
                    return (
                        <button key={index} className={styles.key}>
                            {index + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
