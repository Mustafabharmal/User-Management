import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/user";
function App() {
    return (
        <>
            <BrowserRouter>
                <div className="page">
                    {/* <Sidebar /> */}
                    <Routes>
                        <Route exact path="/" element={<User />} />
                        {/* <Route path="/user" element={<User />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/unit" element={<Unit />} />
                        <Route path="/variety" element={<Variety/> } /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
