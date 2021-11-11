import React, { useEffect } from 'react';
import { Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import { key } from '../keys';
import { loadAnimals } from '../redux/animals/animalsActions';
import { useSelector, useDispatch } from 'react-redux';
import { EMethod, IInitialState, TDispatch } from '../redux/types';

export const SearchPhotosPage: React.FC = () => {
    const dispatch: TDispatch = useDispatch();
    const { loadingAnimals, errorAnimals, animalData } = useSelector((state: IInitialState) => {
        const { animals } = state;
        console.log(animals)
        return animals

    });

    useEffect(() => {
        dispatch(loadAnimals('https://mlemapi.p.rapidapi.com/newmlem',EMethod.GET,key,null,));
    },[]);

    const renderer = () => {
        let component = null;
        if (loadingAnimals) {
            component = (
                <div style={{ margin: '50px auto', width: '100px', }}>
                    <CircularProgress color="secondary"/>
                </div>
            )
 
        } else if (!loadingAnimals && errorAnimals) {
            component = <div>eroror</div>
        } else if (!loadingAnimals && animalData) {
            component = (
                <Card>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Random animal
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="100%"
                        width="50%"
                        src={animalData.url}
                        alt="Uploaded photo"
                    />
                </Card>
            )
        }
        return component;
    }

    return (
        <div style={{ margin: '20px auto' }}>
            {renderer()}
        </div>
    )
}
