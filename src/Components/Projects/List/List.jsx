// React Imports 

import React, {useEffect, useRef, useState} from "react";
import { useNavigate, NavLink } from "react-router-dom";

import './List.sass'

// Import JSON

import JSONData from '../../../db.json'

// Import Components


// Import Medias

import BG from './../../../Assets/Medias/monkey_one.png'

// Creation Component

let allProjects = JSONData

const List = () => {    
    return(
        <>
            <div className="list list--vl" id="allProjects">
                <div className="list--container">
                    <div className="list--grid list--figures">
                        {
                            allProjects.map((project) =>  {
                                return(
                                    <div className={"list--item"} data-project={project.id} key={project.id}>
                                        <NavLink to={"/project/" + project.slug}>
                                            <div className="list--number">
                                                <h2> {'#0' + project.id} </h2>
                                            </div>
                                            <div className="list--informations">
                                                <h2> {project.title} </h2>
                                            </div>
                                            <div className="list--bg">
                                                <img src={project.data ? require("./../../../" + project.data.imgThumbnail) : BG} alt="" />
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>  
                </div>
            </div>
        </>
    )
}

export default List
  