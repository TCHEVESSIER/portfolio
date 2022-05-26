// React Imports 

import React, {useEffect, useRef} from "react";
import { gsap, TimelineMax} from "gsap";
import CustomEase from "gsap/CustomEase";
import { NavLink } from "react-router-dom";


import './HomeView.sass'

// Imports Medias

import picture from './../../Assets/Medias/photo_exemple.png'
import ArrowDiscover from './../../Assets/Medias/arrow_discover.svg'

// Imports Components 

import Button from './../../Components/Button/Button'
import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";

// Creation View

const HomeView = () => {

    const helloText = useRef()
  
    var tl = gsap.timeline()
    
    useEffect(() => {
        // Settings
        tl.set('.text--hello', {zIndex:"1"})
        .set('.text--hello>h1', {opacity: -1, translateY: "100px"})
        .set('.hero--content', {opacity: -1, zIndex: 0})
        .set('.hero--content .image', {opacity: -1, translateX: "-80px"})
        .set('.hero--content>.text>.text--block:nth-child(1)>span', {opacity: 1, translateY: "520px"})
        .set('.hero--content>.text>.text--block:nth-child(2)>span', {opacity: 1, translateY: "520px"})
        .set('.hero--content .cta--buttons button', {opacity: 1, translateY: "50px"})
        
        // Animations
        tl.to('.text--hello>h1', {duration: 1.5, ease: "expo.inOut", opacity: 1, translateY: "0px"}, 0)
        .to('.text--hello>h1', {duration: 1.5, ease: "expo.inOut", opacity: 0, translateY: "-100px"}, 1.5)
        .to('.hero--content', {duration: 1.5, ease: "power3.InOut", opacity: 1}, 2.5)
        .to('.hero--content .image', {duration: 1.5, ease: "power3.out", opacity: 1, translateX: 0}, 2.5)
        .to('.hero--content>.text>.text--block:nth-child(1)>span', {duration: 1.5, ease: "power3.out", opacity: 1, translateY: "0px"}, 2.7)
        .to('.hero--content>.text>.text--block:nth-child(2)>span', {duration: 1.5, ease: "power3.out", opacity: 1, translateY: "0px"}, 2.8)
        .to('.hero--content .cta--buttons button', {duration: 1.5, ease: "power3.out", opacity: 1, translateY: "0px"}, 3)
        .set('.hero--content', {zIndex: 2})
    });
    
    return(
        <>
            <AnimatedPage>
                <section className="view view--home view-active">
                    <div className="view--container">
                        <div className="text--hello text--fadeIn">
                            <h1 ref={helloText}> Bonjour 👋 </h1>
                        </div>
                        <div className="hero--content hero--banner">
                            <div className="text">
                                <div className="text--block">
                                    <span> Moi, c'est </span>
                                </div>
                                <div className="text--block">
                                    <span> Théo Chevessier </span>
                                </div>
                            </div>
                            <div className="image">
                                <img src={picture} alt="" draggable="false" />
                            </div>
                            <div className="cta--buttons">
                                <NavLink to="/about"><Button buttonIconUrl={ArrowDiscover}></Button></NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedPage>
        </>
    )
}

export default HomeView
  