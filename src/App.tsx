import React from 'react';
import ComicsPage from "./pages/ComicsPage";

const BASE_URL = 'https://localhost:7198';

function App() {
    return (
        <ComicsPage baseUrl={BASE_URL}/>
    )
}

export default App;
