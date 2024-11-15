import { BrowserRouter, Routes, Route } from "react-router-dom";

// app key - AIzaSyD0iveGjsYwyMNLs4MkdbRjoj_z7h9AHU4
//cx=814e52f567ddf45f9

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
    return (
    
        <AppContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/:query/:startIndex" element={<SearchResult/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext>
    
    );
}

export default App;
