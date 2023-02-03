import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardMedia, Grid} from "@mui/material";

const ComicsHistoryItem = () => {
    return (
        <Grid item>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://imgs.xkcd.com/comics/landscape_cropped_(1).jpg"
                        alt="green iguana"
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Ссылка
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ComicsHistoryItem;