// React Imports 

import React, {useEffect, useRef} from "react";
import { gsap, TimelineMax} from "gsap";
import CustomEase from "gsap/CustomEase";
import {Routes, Route, useLocation} from 'react-router-dom'


// Import SASS

import './App.sass';


// Creation All Views

import HomeView from "./Views/HomeView/HomeView";
import AboutView from "./Views/AboutView/AboutView";
import SingleProjectView from "./Views/SingleProjectView/SingleProject";
import Error404View from './Views/404/404'
import { AnimatePresence } from "framer-motion";

// Stock All Routes

const routes = [
  { path: "/", name: "HomeView", View: HomeView, exactBool : true },
  { path: "/about", name: "AboutView", View: AboutView},
  { path: "/project/:slug", name: "SingleProjectView", View: SingleProjectView},
  { path: "*", name: "Error404View", View: Error404View}
]

const App = () => {

  const location = useLocation()
  
  return (
    <main className="main_views">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          {routes.map(({name, path, View, exactBool})=> (
            <Route key={name}a path={path} element={<View/>} exact={`${exactBool}`}></Route>
          ))}
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;


