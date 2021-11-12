import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.css';
import { menu } from './menudata';
import PublishIcon from '@mui/icons-material/Publish';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import DiningIcon from '@mui/icons-material/Dining';

interface IMenuProps {
    onClose: (param: boolean) => void
}

export const Menu: React.FC<IMenuProps> = ({ onClose }) => {
    return (
        <div className={styles.menu}>
            {/* {menu.map(item => {
                const { path, title, icon } = item;
                return (
                    <div className={styles.menuitem}>
                        <Link to={path}>
                            {icon}
                            <span>{title}</span>
                        </Link>
                    </div>
                )
            })} */}
            <div className={styles.menuitem}>
                <Link to='/upload' className={styles.link} onClick={() => onClose(false)}>
                    <PublishIcon htmlColor="white" className={styles.myicon}/>
                    <span>Upload</span>
                </Link>
            </div>
            <div className={styles.menuitem}>
                <Link to='/search' className={styles.link} onClick={() => onClose(false)}>
                    <InsertPhotoIcon htmlColor="white" className={styles.myicon}/>
                    <span>Search</span>
                </Link>
            </div>
            <div className={styles.menuitem}>
                <Link to='/burgers' className={styles.link} onClick={() => onClose(false)}>
                    <DiningIcon htmlColor="white" className={styles.myicon}/>
                    <span>Burgers</span>
                </Link>
            </div>
        </div>
    )
}
