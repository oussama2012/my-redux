
 //stor.js
import { createStore } from "redux";
import UsersReduser from "./reduser";

//indesx.js

import { Provider } from 'react-redux';
import Store from './rudex.js/store';

//app.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/list';
import Update from './components/Update';
import Show from './components/show';

//home.jsx

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

//show.jsx
import { useParams } from "react-router-dom";