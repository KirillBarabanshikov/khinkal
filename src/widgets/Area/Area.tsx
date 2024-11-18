import clsx from 'clsx';

import { Keyboard } from '@/shared';
import khinkalImg from '@/shared/assets/images/khinkal.png';

import styles from './Area.module.scss';

export const Area = () => {
    return (
        <div className={styles.area}>
            <img src={khinkalImg} alt='khinkal' className={clsx(styles.khinkal, styles.left)} />
            <img src={khinkalImg} alt='khinkal' className={clsx(styles.khinkal, styles.right)} />
            <Keyboard className={styles.keyboard} />
        </div>
    );
};
