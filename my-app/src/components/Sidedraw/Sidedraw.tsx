import React from 'react';
import Drawer from '@mui/material/Drawer';

interface IProps {
    open: boolean;
    setOpened: (param: boolean) => void;
};

export const Sidedraw: React.FC<IProps> = ({ open, children, setOpened }) => {
    return (
        <>
          <Drawer
            open={open}
            anchor="left"
            onClose={() => setOpened(false)}
          >
              {children}
            </Drawer>  
        </>
    );
};
