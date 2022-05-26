// React Imports 

import React, {useEffect, useRef, useState} from "react";
import { useNavigate, NavLink } from "react-router-dom";

import './Slider.sass'

// Import JSON

import JSONData from '../../../db.json'

// Import Components


// Import Medias

import BG from './../../../Assets/Medias/monkey_one.png'

// Creation Component

let allProjects = JSONData

const Slider = () => {
    const [allSlides, setAllSlides] = useState([])
    const [currentProject, setCurrentProject] = useState([])
    const [click, setClick] = useState(0)

    var slideLength = allSlides.length

    var project = []

    // Une fois que le composant est monté 

    useEffect(() => {
        setAllSlides(document.querySelectorAll('.slider--figures>.slider--item'))

        project = allProjects.find(project => project.id === document.querySelector('.slider--figures .slide--center').getAttribute('data-project')) 
        setCurrentProject(project)
    }, []) 

    let nextSlideStep = () => {

        setTimeout(() => {
            setClick(click + 1) 
        }, 1000);

        if(click<=1) {
            setClick(7);
        } 


        for (let i = 0; i < slideLength; i++) {
            allSlides[i].classList = "slider--item slide slide--hidden-right";
        }

        allSlides[(click - 1) % slideLength].classList = "slider--item slide slide--hidden-left";
        allSlides[click % slideLength].classList = "slider--item slide slide--left";
        allSlides[(click + 1) % slideLength].classList = "slider--item slide slide--center";
        allSlides[(click + 2) % slideLength].classList = "slider--item slide slide--right";

        project = allProjects.find(project => project.id === allSlides[(click + 1) % slideLength].getAttribute('data-project')) 

        setCurrentProject(project)
    };


    // let prevSlideStep = () => {

    //     setClick(click - 1) 
    //     // setTimeout(() => {
            
    //     // }, 1000);

    //     if(click<=1) {
    //         setClick(7);
    //     } 

    //     for (let i = 0; i < slideLength; i++) {
    //         allSlides[i].classList = "slider--item slide slide--hidden-left";
    //     }   

    //     allSlides[(click - 1) % slideLength].classList = "slider--item slide slide--left";
    //     allSlides[click % slideLength].classList = "slider--item slide slide--center";
    //     allSlides[(click + 1) % slideLength].classList = "slider--item slide slide--right";
    //     allSlides[(click + 2) % slideLength].classList = "slider--item slide slide--hidden-right";

    //     project = allProjects.find(project => project.id === allSlides[click % slideLength].getAttribute('data-project')) 

    //     setCurrentProject(project)

    // };

    if(click<1) {
        setClick(7);
    } 

    console.log((click - 1) % slideLength, click % slideLength, (click + 1) % slideLength, (click + 2) % slideLength);
    
    return(
        <>
            <div className="slider slider--vl" id="allProjects">
                <div className="slider--container">
                    <div className="slider--grid slider--figures">
                        {
                            allProjects.map((project) =>  {
                                console.log(allProjects);
                                return(
                                    <div className={"slider--item slide slide--" + project.initialPosition} data-project={project.id} key={project.id}>
                                        <div className="slide--number">
                                            <h2> {'#0' + project.id} </h2>
                                        </div>
                                        <div className="slide--informations">
                                            <h2> {project.title} </h2>
                                        </div>
                                        <div className="slide--bg">
                                            <img src={project.data ? require("./../../../" + project.data.imgThumbnail) : BG} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>  
                    <div className="slider--grid slider--interaction">
                        <div className="slider--item slide slide--left"></div>
                        <NavLink className={"slider--item slide slide--center"} to={"/project/" + currentProject.slug}></NavLink>
                        <div className="slider--item slide slide--right" onClick={nextSlideStep}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
  