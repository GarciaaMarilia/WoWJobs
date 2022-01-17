import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Status from './Components/Status'
import './App.css';

import Registration from './Screens/Registration';
import Vacancies from './Screens/Vacancies';
import Experience from './Screens/Experience';
import Companys from "./Screens/Companys";
import Profile from './Screens/Profile';
import Login from './Screens/Login';

export default function App() {

    return (
        <>
            <Status />
            <Router>
                <Routes>
                    <Route exact path='/' element={<Login />} />

                    <Route path='/Registration' element={<Registration />} />

                    <Route path='/Experience' element={<Experience />} />

                    <Route path='/Companys' element={<Companys />} />

                    <Route path='/Vacancies' element={<Vacancies />} />

                    <Route path='/Profile' element={<Profile />} />
                </Routes>
            </Router>
        </>
    )
}