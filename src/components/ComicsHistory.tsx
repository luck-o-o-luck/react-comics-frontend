import React from 'react';
import {Grid} from "@mui/material";
import ComicsHistoryItem from "./ComicsHistoryItem";
import {IComics} from "../models";

interface ComicsHistoryProps {
    comics: IComics[]
    removeComics: (comics: IComics) => void
    showComicsFromHistory: (comics: IComics) => void
}

const ComicsHistory = ({comics, removeComics, showComicsFromHistory}: ComicsHistoryProps) => {
    return (
        <Grid
            container
            spacing={4}
        >
            {comics.map((historyItem, index) => {
                if (index < 3)
                    return (
                        <ComicsHistoryItem
                            comics={historyItem}
                            removeComics={removeComics}
                            showComicsFromHistory={showComicsFromHistory}
                            key={historyItem.num}/>
                    )
                else
                    return null
            })
            }
        </Grid>
    );
};

export default ComicsHistory;