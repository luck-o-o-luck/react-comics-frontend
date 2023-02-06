import React, {useEffect, useState} from 'react';
import {IComics} from "../models";
import localStorage from "mobx-localstorage";
import {Button, Grid, Pagination, Typography} from "@mui/material";
import CurrentComics from "../components/CurrentComics";
import ComicsHistory from "../components/ComicsHistory";
import axios, {AxiosError} from "axios";

export interface ComicsPageProps {
    baseUrl: string
}

const ComicsPage = ({baseUrl}: ComicsPageProps) => {
    const [comics, setComics] = useState<IComics>()
    const [history, setHistory] = useState<IComics[]>([])
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(0)

    async function getRandomComics() {
        setError('')
        try {
            const response = await axios.get<IComics>(baseUrl + '/api/Comics/GetComics')
            const comics = response.data;
            setComics(comics)
            const newComics: IComics = {num: comics.num, title: comics.title, img: comics.img}
            localStorage.set(localStorage.length.toString(), newComics)
            setHistory([...history, {num: comics.num, title: comics.title, img: comics.img}]);
            setPageQty(Math.ceil(localStorage.length / 3))
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    async function deleteComicsFromHistory(comics: IComics) {
        setError('')
        try {
            const oddComics = {id: comics.num, title: 'delete', imgPath: 'delete'}
            await axios.delete(baseUrl + '/api/Comics/DeleteComics/', {data: oddComics})
            localStorage.removeItem(comics.num.toString())
            setHistory(history.filter(h => h.num !== comics.num));
            setPageQty(Math.ceil(localStorage.length / 3))
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    function showComicsFromHistory(comics: IComics) {
        setComics(comics)
    }

    function fetchComicsFromLocalStorage() {
        let refreshComics: Array<IComics> = []
        for (var i = page * 3 - 3; i < page * 3; i++) {
            const comicsInfo = window.localStorage.getItem(i.toString())
            if (!comicsInfo)
                continue
            const comicsJson: IComics = JSON.parse(comicsInfo)
            refreshComics.push(comicsJson)
        }
        setHistory(refreshComics)
        setPageQty(Math.ceil(localStorage.length / 3))
    }

    useEffect(() => {
        fetchComicsFromLocalStorage()
    }, [page])

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={4}
            style={{
                minHeight: '100vh',
                backgroundImage: 'url(/cyan.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {comics && error === '' &&
                <Grid item>
                    <CurrentComics comics={comics}/>
                </Grid>
            }

            {error &&
                <Grid item>
                    <Typography gutterBottom color="red">
                        {error}
                    </Typography>
                </Grid>
            }

            <Grid item>
                <Button variant="contained" onClick={getRandomComics}>
                    Показать случайный комикс
                </Button>
            </Grid>

            <Grid item>
                <Typography gutterBottom variant="h4" component="h1">
                    История комиксов
                </Typography>
            </Grid>

            <Grid item>
                <ComicsHistory
                    comics={history}
                    removeComics={deleteComicsFromHistory}
                    showComicsFromHistory={showComicsFromHistory}
                />
            </Grid>
            {!!pageQty && (<Pagination
                color="primary"
                sx={{marginY: 3, marginX: 'auto'}}
                count={pageQty}
                page={page}
                onChange={(_, num) => setPage(num)}
            />)}
        </Grid>
    );
};

export default ComicsPage;