import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import NavBar from '../components/navBar/NavBar';
import AddPropertyPage from '../pages/AddPropertyPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';

export default function Routing() {
    const isUser = useSelector(store => store.auth.isUser)
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        path="/" element={<HomePage />
                        } />
                <Route path="/addproperty"
                    element={
                        <PrivateRoute isUser={isUser}>
                            <AddPropertyPage />
                        </PrivateRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/search" element={<PublicRoute isUser={isUser}>


                    <SearchPage />
                </PublicRoute>} />


            </Routes>
        </BrowserRouter>

        </div >

    )
}


