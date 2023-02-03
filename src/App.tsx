import React, {useState} from 'react';
import {Button, Container, Grid, Typography, Pagination} from "@mui/material";
import CurrentComics from "./components/CurrentComics";
import ComicsHistory from "./components/ComicsHistory";
import axios from "axios";
import {IComics} from "./models";

function App() {
    const [comics, setComics] = useState<IComics>()

    async function getRandomComics() {
        const response = await axios.get<IComics>('https://localhost:7198/api/Comics/GetComics')
        setComics(response.data)
    }

    return (
        <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{
                minHeight: '100vh',
                backgroundImage: 'url(/cyan.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {comics &&
                <Grid item>
                    <CurrentComics comics={comics}/>
                </Grid>
            }

            <Grid item>
                <Button variant="contained" onClick={getRandomComics}>
                    Показать случайный комикс
                </Button>
            </Grid>

            <Grid item>
                <Container/>
            </Grid>

            <Grid item>
                <Typography gutterBottom variant="h4" component="div">
                    История комиксов
                </Typography>
            </Grid>

            <Grid item>
                <ComicsHistory/>
            </Grid>

            <Grid item>
                <Pagination count={10} />
            </Grid>

        </Grid>
    );
}

export default App;
