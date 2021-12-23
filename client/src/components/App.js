import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route
                        exact
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
