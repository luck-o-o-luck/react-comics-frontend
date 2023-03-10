import React from 'react';
import {Card, CardMedia, CardContent, Typography} from "@mui/material";
import {IComics} from "../models";

interface CurrentComicsProps {
    comics: IComics
}

const CurrentComics = ({comics}: CurrentComicsProps) => {
    return (
        <Card sx={{marginTop: 4}}>
            <CardMedia
                component="img"
                alt={comics.title}
                image={comics.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {comics.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {comics.num}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CurrentComics;