import { ModelTraining, Search } from '@mui/icons-material';
import { ReactElement } from 'react';

interface IItem {
    title: string,
    path: string,
    icon?: ReactElement<SVGElement>,
}

type Icon = JSX.Element;

export const menu: Array<IItem> = [
    {
        title: 'Main',
        path: '/upload',
    },
    {
        title: 'Search',
        path: '/search',
    }
]