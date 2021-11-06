import React from 'react';
import styles from './header.module.css';
import MenuIcon from '@mui/icons-material/Menu';

interface IHeaderProps {
    onOpen: (param: boolean) => void
};

export const Header: React.FC<IHeaderProps> = ({ onOpen }) => {
    return (
        <header className={styles.header}>
            <div className={styles.iconwrapper}>
                <MenuIcon 
                    onClick={() => onOpen(true)}
                    className={styles.icon}
                    htmlColor="white"
                />
            </div>
        </header>
    )
}
