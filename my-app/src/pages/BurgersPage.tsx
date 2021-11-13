import React, { useEffect } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { burgerkey } from '../keys';
import { loadBurgers } from '../redux/burgers/burgerActions';
import { EMethod, IBurger, IInitialState } from '../redux/types';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Masonry from 'react-masonry-css';
import styles from './burger.module.css';

const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
};

const BurgersPage = () => {
    const dispatch = useDispatch();
    const { loadBurger, errorBurger, burgersData } = useSelector((state: IInitialState) => {
        const { burger } = state;
        return burger
    });

    useEffect(() => {
        dispatch(
            loadBurgers('https://burgers1.p.rapidapi.com/burgers',EMethod.GET,burgerkey)
        )
    },[]);

    const renderIngridients = (burger: IBurger) => {
        const { ingredients } = burger
        return (
        <List>
            {ingredients.map(ing => {
                return (<ListItem>
                    <ListItemIcon>
                        <BookmarkBorderIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={ing}
                    />
                    </ListItem>
                    )
                })
            }
        </List>
        )
    };

    const renderBurgers = () => {
        return burgersData.map(burger => {
            return (
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Name: {burger.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description: {burger.description}
                            </Typography>
                            {renderIngridients(burger)}
                            <Typography variant="body2" color="text.secondary">
                                Restaurant: {burger.restaurant}
                            </Typography>
                            <Link href={burger.web} underline="none">
                                {'Visit website'}
                            </Link>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        })
    };

    const rednerFunc = () => {
        if (loadBurger) {
            return (
                <div style={{ width: '100px', margin: '50px auto' }}>
                    <CircularProgress color="primary"/>
                </div>
            )
        } else if (!loadBurger && errorBurger) {
            return <div style={{ textAlign: 'center' }}>Error</div>
        } else if (!loadBurger && burgersData) {
            return (
                <div>
                    <h1 style={{ textAlign: 'center' }}>Burgers</h1>
                    <Divider/>
                    <div style={{ marginTop: '30px' }}>
                        <Masonry
                            breakpointCols={breakpoints}
                            className={styles.myMasonryGrid}
                            columnClassName={styles.gridColumn}
                        >
                            {renderBurgers()}
                        </Masonry>
                    </div>
                </div>
            )
        }
    }
    return <div style={{ width: '98%', margin: '10px auto' }}>{rednerFunc()}</div>
}

export default BurgersPage
