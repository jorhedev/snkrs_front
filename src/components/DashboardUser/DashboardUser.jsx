import styles from './DashboardUser.module.css';
import { FaUser, FaHeart, FaShoppingCart, FaHistory } from 'react-icons/fa';
import { MdNavigateNext } from 'react-icons/md';
import { useState } from 'react';
import RenderView from './RenderView';
import { Link } from 'react-router-dom';

const DashboardUser = () => {
const urlParams = new URLSearchParams(window.location.search);
const view=urlParams.get('view');

    const [selectedView, setSelectedView] = useState(view??'profile');

    const handleViewChange = (view) => {
        setSelectedView(view);
    };


    return (
        <div className={styles.dashboard}>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <ul className={styles.menu}>
                        <li onClick={() => handleViewChange('profile')}>
                            <span className={styles.span}>
                                <FaUser className={styles.icon} />
                                Profile
                                <MdNavigateNext className={styles.iconNext} />
                            </span>
                        </li>
                        <li onClick={() => handleViewChange('favorites')}>
                            <span className={styles.span}>
                                <FaHeart className={styles.icon} />
                                Favorites
                                <MdNavigateNext className={styles.iconNext} />
                            </span>
                        </li>
                        <li onClick={() => handleViewChange('shopping')}>
                            <span className={styles.span}>
                                <FaShoppingCart className={styles.icon} />
                                Shopping
                                <MdNavigateNext className={styles.iconNext} />
                            </span>
                        </li>
                        <li onClick={() => handleViewChange('record')}>
                            <span className={styles.span}>
                                <FaHistory className={styles.icon} />
                                Record
                                <MdNavigateNext className={styles.iconNext} />
                            </span>
                        </li>
                    </ul>
                </aside>
                <main className={styles.content}>
                    <RenderView selectedView={selectedView} />
                </main>
            </div>
        </div>
    );
};

export default DashboardUser;