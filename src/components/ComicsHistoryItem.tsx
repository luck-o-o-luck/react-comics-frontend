import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardMedia, Grid} from "@mui/material";
import {IComics} from "../models";

interface ComicsHistoryItemProps {
    comics: IComics
    removeComics: (comics: IComics) => void
    showComicsFromHistory: (comics: IComics) => void
}

const ComicsHistoryItem = ({comics, removeComics, showComicsFromHistory}: ComicsHistoryItemProps) => {
    return (
        <Grid item>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={comics.img}
                        alt={comics.title}
                    />
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => showComicsFromHistory(comics)}
                    >
                        Показать
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => removeComics(comics)}
                    >
                        Удалить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ComicsHistoryItem;