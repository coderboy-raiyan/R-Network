import PageRender from "PageRender";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <main>
            <input className="hidden" type="checkbox" id="theme" />

            <div className="App">
                <div className="main">
                    <Routes>
                        <Route path="/:page" element={<PageRender />} />
                        <Route path="/:page/:id" element={<PageRender />} />
                    </Routes>
                </div>
            </div>
        </main>
    );
}

export default App;
