import React, { useEffect } from 'react';
import { Typography, Divider, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import { key } from '../keys';

export const SearchPhotosPage: React.FC = () => {
    useEffect(() => {
        const fetcha = async () => {
            const res = await axios.get('https://mlemapi.p.rapidapi.com/randommlem', {
                headers: {
                    'x-rapidapi-host': 'mlemapi.p.rapidapi.com',
                    'x-rapidapi-key': `${key}`
                }
            });
            const { data } = res;
            console.log(data,'=> data');
        };
        fetcha();
    },[]);
    return (
        <div style={{ margin: '20px auto' }}>
            <Card>
                <CardMedia
                    component="img"
                    height="100%"
                    alt="Uploaded photo"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Random animal
                </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
