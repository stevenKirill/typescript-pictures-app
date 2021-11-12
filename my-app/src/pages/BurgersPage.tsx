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
} from '@mui/material';
import Link from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { burgerkey } from '../keys';
import { loadBurgers } from '../redux/burgers/burgerActions';
import { EMethod, IBurger, IInitialState } from '../redux/types';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

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
            <div style={{ marginLeft: '20px', marginTop: '10px', width: 'calc(33.33% - 22px)' }}>
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

    return (
        <div style={{ width: '98%', margin: '10px auto' }}>
            {
            loadBurger ?
                <div style={{ margin: '50px auto', width: '100px', }}>
                    <CircularProgress color="primary"/>
                </div>
                  ? errorBurger 
                  : 
                  <div>Error</div>
                    :
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Burgers</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                            {renderBurgers()}
                        </div>
                    </div>
            }
        </div>
    )
}

export default BurgersPage
