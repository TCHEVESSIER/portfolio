// React Imports 

import React, {useEffect, useRef} from "react";
import { gsap, TimelineMax} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Break from 'react-break';


import './AboutView.sass'
import './../../Components/Marquee/Marquee.sass'

// Import Components

import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";
import Marquee from "../../Components/Marquee/Marquee";
import Slider from "../../Components/Projects/Slider/Slider";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Skill from "../../Components/Skill/Skill"
import List from './../../Components/Projects/List/List'

// Import Medias

// Creation View

gsap.registerPlugin(ScrollTrigger);

const UIBreakpoints = {
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 1025,
};

const AboutView = () => {
  
    var tl = gsap.timeline()

    useEffect(() => {
  
        // Settings
        tl.set('.view--about .content--biography h1', {opacity: -1, translateY: "100px"})
        .set('.view--about .text--row .col-p--12', {opacity: -1, translateX: "-100px", translateY: "0px"})
        .set('.sidebar--fixed', {opacity: -1, translateY: "-100px"})
  
        // Animations
        tl.to('.view--about .content--biography h1', {duration: 1.5, ease: "expo.out", opacity: 1, translateY: "0px"}, 0.5)
        .to('.sidebar--fixed', {duration: 3, ease: "expo.out", opacity: 1, translateX: "0px", translateY: "0px"}, 1)
        .to('.view--about .content--biography .text--row .col-p--12:nth-of-type(1)', {duration: 3, ease: "expo.out", opacity: 1, translateX: "0px", translateY: "0px"}, 1)
        .to('.view--about .content--biography .text--row .col-p--12:nth-of-type(2)', {duration: 3, ease: "expo.out", opacity: 1, translateX: "0px", translateY: "0px"}, 1.1)
        .to('.view--about .content--biography .text--row .col-p--12:nth-of-type(2)', {duration: 3, ease: "expo.out", opacity: 1, translateX: "0px", translateY: "0px"}, 1.1)
    });

    return(
        <>
            <AnimatedPage>
                <section className="view view--about">
                    <Sidebar></Sidebar>
                    <div className="view--container">
                        <div className="content content--biography">
                            <h1> Un <span className="color--red">jeune créateur dans le monde du digital</span> </h1>
                            <div className="row text--row">
                                <div className="col-p--12 col-lp--6">
                                    <p> Depuis de nombreuses années, je suis guidé par un seul objectif : Vivre de ma passion. Aujourd'hui, la création de site web fait partie intégrante de ma vie et j'aime prendre part au développement numérique d'une structure </p>
                                    <br />
                                    <p> Passionné par cette envie d'innover, j'aime proposer une nouvelle façon de visiter un site en combinant ma créativité et les nouvelles technologies.  </p>
                                </div>
                                <div className="col-p--12 col-lp--6">
                                    <p> To reach this goal, I was able to integrate different trainings as a DUT MMI in initial and then in alternation, which allowed me to learn more about development but also about other fields such as webmarketing or graphic design. And currently, I'm doing a bachelor Webdesign for a communication agency La Fabrique de Com based in Orléans. </p>
                                </div>
                            </div>
                        </div>
                        <div className="content content--skills">
                            <div className="row">
                                <div className="col-p--12 col-lp--4">
                                    <h2> Ce que je <span className="color--red">fais ?</span> </h2>
                                </div>
                                <div className="col-p--12 col-lp--8">
                                    <div className="skills--grid">
                                        <Skill title="UI Design" svgCode={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352.17 383.32" fill="#fff"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path className="cls-1" d="M297.37,191.56c0-.61,0-1.23,0-1.84,0,.62,0,1.23,0,1.84s0,1.15,0,1.72C297.36,192.7,297.37,192.13,297.37,191.56Zm0,3.79c0,.73,0,1.45.06,2.18C297.35,196.81,297.33,196.07,297.33,195.35Z"/><path d="M346.67,301.89c-12.1-12.25-24.33-24.36-36.5-36.55-.89-.89-1.72-1.85-2.86-3.09,16.7-1,24.09-6,24.14-17.05a21.86,21.86,0,0,0-3.7-11.4c-4.38-6.64-11.64-7.4-18.91-6.94-.63-6.37-2.34-8.81-5.92-8.81s-5.14,2.3-5.9,8.83h-3.95c-9.24,0-18.47,0-27.71,0-10.91.05-18.28,7.33-18.52,18.24,0,1.81,0,3.63,0,5.68H234c-7.61,0-9,1.37-9,8.88q0,45.84,0,91.69c0,12.8-8,20.7-20.87,20.7q-85.92,0-171.82,0a26.6,26.6,0,0,1-5.21-.37c-10-2-15.77-9.67-15.78-21V32.61c0-.87,0-1.75,0-2.62.3-9.5,7.34-17.75,16.82-18.49,8-.62,16.16-.13,24.34-.13.83,4.36,1.59,8.53,2.42,12.68C57.46,36.9,67.62,45.66,80.72,45.74q37.44.24,74.87,0c13.11-.09,23.19-8.85,25.75-21.76.82-4.14,1.62-8.28,2.49-12.74,7.07,0,14,0,21,0a23.14,23.14,0,0,1,3.73.21C218.59,13.11,224.94,21,225,32q0,55.76,0,111.53c0,4.87,2.23,7.67,5.84,7.53s5.38-2.7,5.38-7.52c0-37.3.07-74.61,0-111.91C236.11,13,223.05,0,204.53,0Q118.07,0,31.59.06A35.46,35.46,0,0,0,22,1.36C8.22,5.33.05,17,.05,32.44Q0,184.21,0,336c0,5.86-.13,11.73.06,17.59C.45,364.48,5.35,373,14.64,378.63c3.55,2.14,7.78,3.16,11.7,4.69H210.53c.18-.16.34-.42.55-.48,17.5-5,25.11-15.08,25.11-33.18q0-41.55,0-83.09v-4.35h10.64c0,1.64,0,3.1,0,4.55.06,9.73-.24,19.48.29,29.18.5,9.1,8.28,15.68,17.41,15.64a17.23,17.23,0,0,0,17.3-15.82c.23-2.56,0-5.16,0-7.74l1.49-.89a21.35,21.35,0,0,0,2.24,3.31q17.94,18.06,36,36c6.35,6.3,14.83,7.49,21.91,3.31C353.57,323.82,355.17,310.49,346.67,301.89ZM172.32,11.39c-.78,4-1.4,7.71-2.23,11.35a14.67,14.67,0,0,1-14.48,11.78q-37.41.15-74.84,0c-7.54,0-13.22-5-14.76-12.37-.73-3.51-1.35-7-2.05-10.76Zm167,307.43a6.3,6.3,0,0,1-8.18,1,19.67,19.67,0,0,1-3.06-2.72q-23-23-46-46.05c-2.25-2.26-4.55-4.07-7.87-2.68s-3.39,4.28-3.37,7.26c0,5.74.07,11.47,0,17.21-.07,4.91-2.39,7.55-6.38,7.53s-6.26-2.65-6.31-7.61c-.06-7.74,0-15.47,0-23.2s0-15.47,0-23.2c0-5.94,2.25-8.2,8.08-8.21q23.19,0,46.4,0c4.9,0,8,2.62,7.86,6.54s-3.06,6.15-7.83,6.17c-6,0-12,0-18,0-2.85,0-5.17.72-6.39,3.54s.08,5,2,7q23.45,23.4,46.84,46.83a24.27,24.27,0,0,1,2.32,2.44A6.23,6.23,0,0,1,339.29,318.82Z"/><path d="M182.42,181.29c-.07,12.05-8.5,20.05-20.51,20.07q-43.8.06-87.6,0c-12.19,0-20.39-8.19-20.46-20.46-.07-10.34-.06-20.68,0-31q0-6.39,0-12.77,0-6,0-12.1c0-10.81,0-21.63,0-32.45C53.94,82.41,60.3,74.84,70,73a16.28,16.28,0,0,1,2.6-.28c3.57,0,6,1.94,6.25,5.07s-1.69,5.53-5.21,6.11c-6.37,1-8.57,3.53-8.57,10q0,43.05,0,86.09c0,7.25,3,10.16,10.29,10.17q42.87,0,85.73,0c7,0,10.15-3,10.16-10q.07-43.23,0-86.47c0-6.73-3.21-9.78-10-9.79q-28.64,0-57.28,0a29,29,0,0,1-3.36-.06,5.56,5.56,0,0,1,.12-11.1c2.74-.19,5.49-.06,8.23-.06q26.4,0,52.79,0c12.08,0,20.55,7.89,20.63,19.92Q182.71,136.94,182.42,181.29Z"/><path d="M135.65,252.65q0,27.89,0,55.77c0,22.3-16.72,38.07-39.15,36.94-16.36-.83-30.74-12.16-33.8-26.89a50.34,50.34,0,0,1-.64-9.68c-.08-8.61,0-17.22,0-25.83q0-15.15,0-30.32a22.1,22.1,0,0,1,.18-3.73,5,5,0,0,1,4.88-4.37c2.79-.22,4.91,1,5.7,3.79a16,16,0,0,1,.44,4.44c0,18.59.91,37.24-.23,55.76-1.12,18.18,17.87,29.76,33.66,24.41,11-3.73,18.2-11,17.87-24.06-.46-18.71-.12-37.43-.11-56.15a17.17,17.17,0,0,1,.14-3.73,5.57,5.57,0,0,1,10.91-.08A15.4,15.4,0,0,1,135.65,252.65Z"/><path d="M174.29,253.1q0,20.94,0,41.87t0,41.87a18.81,18.81,0,0,1-.35,4.45,5.47,5.47,0,0,1-10.67-.42,24.34,24.34,0,0,1-.19-4.1q0-41.86,0-83.74c0-5.89,1.64-8.45,5.43-8.55C172.45,244.38,174.29,247.1,174.29,253.1Z"/><path d="M153.4,145.22c.06,3.17-2.38,5.66-6.12,5.71-9.22.12-18.45,0-27.67,0h0c-9.1,0-18.21.07-27.31,0-4.49-.05-7.4-3.06-6.56-6.64.64-2.69,2.35-4.48,5.25-4.48q28.41-.08,56.84,0A5.4,5.4,0,0,1,153.4,145.22Z"/><path d="M153.4,124.27c-.07,3.2-2.48,5.36-6.3,5.42-4.73.07-9.45,0-14.18,0-5,0-10,.06-14.94,0-3.58-.06-5.92-2.17-6.09-5.24a5.67,5.67,0,0,1,5.93-5.88q14.73-.21,29.48,0C151,118.59,153.46,121.12,153.4,124.27Z"/><path d="M256.34,165a77.55,77.55,0,0,1-14.13.05c-3.07-.26-4.83-2.72-4.52-5.85a5.19,5.19,0,0,1,5.46-5c2-.06,4,0,6,0s4.24-.1,6.35,0a5.09,5.09,0,0,1,5.2,4.86C261,162.23,259.42,164.71,256.34,165Z"/><path d="M223,163.33a32.18,32.18,0,0,1-2.69,3.6c-2.11,2.23-4.53,4.17-6.58,6.46-2.38,2.65-5.26,3.41-7.88,1.68a5.23,5.23,0,0,1-1.35-7.82,54.13,54.13,0,0,1,10.4-9.84C218.44,155,223.11,158.12,223,163.33Z"/><path d="M308.48,197.73a5.34,5.34,0,0,1-5.65,5.25,5.4,5.4,0,0,1-5.44-5.45c-.05-.73-.06-1.45-.06-2.18s0-1.38,0-2.07,0-1.15,0-1.72,0-1.22,0-1.84c0-1.37,0-2.75,0-4.13.17-3.29,2.29-5.53,5.27-5.7a5.6,5.6,0,0,1,5.85,5.53C308.69,189.51,308.7,193.63,308.48,197.73Z"/><path d="M298.31,161.74c-.1,4.86-3.5,7.45-7,6.5-3.67-1-7.34-2-11-3.08-3-.86-4.78-2.88-4.45-6s2.36-5.41,5.49-4.87a79,79,0,0,1,14.14,3.88C297,158.7,297.79,161,298.31,161.74Z"/><path d="M211.42,209.44c-.26,3-2.73,4.38-5.71,4.15a5,5,0,0,1-5-5c-.16-2.22,0-4.46,0-6.7h0c0-2-.1-4,0-6,.19-3.21,2-5,5.2-5.23,3-.18,5.37,1.35,5.6,4.29A87.27,87.27,0,0,1,211.42,209.44Z"/><path d="M211.38,250.82a5.3,5.3,0,0,1-7.45-2.85c-1.65-3.68-1.8-7.9-1.86-12.19-.1-2.66-.51-4.61,1.14-6,3.39-2.79,7.8-.2,8.62,4.5a68.24,68.24,0,0,0,2.22,8.91C215.11,246.57,214.22,249.48,211.38,250.82Z"/><path d="M96.82,124a5.38,5.38,0,0,1-5.21,5.64,5.58,5.58,0,0,1-5.94-5.37,5.76,5.76,0,0,1,5.67-5.74A5.56,5.56,0,0,1,96.82,124Z"/><path d="M206.2,29.42a5.41,5.41,0,1,1-5.33-5.51A5.34,5.34,0,0,1,206.2,29.42Z"/><path d="M134.89,23.83c0,3.11-2.28,5.38-5.81,5.5-3.72.13-7.45,0-11.18,0v0c-3.48,0-7,.08-10.44,0-3.72-.11-6.17-2.41-6.15-5.57a5.62,5.62,0,0,1,5.84-5.56c7.33-.13,14.66-.14,22,0A5.48,5.48,0,0,1,134.89,23.83Z"/></g></g></svg>}></Skill>
                                        <Skill title="Front Developement" svgCode={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.91 335.55" fill="#fff"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M408.91,21.6V313.93c-2.39,7.85-6,15-13.93,18.38a35.62,35.62,0,0,1-13.41,3.06q-137.34.25-274.69.12a19,19,0,0,1-2.39-.07c-4.41-.51-7.57-3.77-7.63-7.83a8.1,8.1,0,0,1,7.47-8,35.66,35.66,0,0,1,4.39-.1H379.81c9.71,0,13.13-3.42,13.13-13.15V48c-5.27,0-10.28.14-15.28,0-6.8-.23-10.69-6.45-7.5-11.85C372,33,374.87,32,378.29,32c4.75,0,9.51,0,15.4,0-.92-4.21-1-8.26-2.75-11.32-1.28-2.22-4.76-3.27-7.4-4.55-1-.47-2.36-.11-3.56-.11H29c-9.5,0-13,3.48-13,12.86V48h4.21q45.32,0,90.63.06a7.71,7.71,0,0,0,6.24-2.64A115.43,115.43,0,0,1,127.59,35a12.23,12.23,0,0,1,7-2.9q92.84-.22,185.66-.11c5.8,0,9.51,3.22,9.51,8s-3.79,8-9.93,8q-89.24,0-178.47-.06a9.91,9.91,0,0,0-7.62,3.18c-15.93,15.65-8.68,12.67-31,12.82-27.28.18-54.57,0-81.85,0H16V307.13c0,8.67,3.69,12.38,12.28,12.39,6.65,0,13.31,0,20,0,5.83.06,9.4,3.22,9.32,8.11-.07,4.72-3.57,7.77-9.19,7.83-7.32.07-14.64.11-22,0-15.26-.25-26.06-11-26.36-26.24-.12-6,0-12,0-18V29.3C0,10.25,10.29,0,29.42,0q175.48,0,351,0c11.7,0,20.66,4.27,26,15A66.34,66.34,0,0,1,408.91,21.6Z"/><path d="M112.53,235.77c-2.93-.15-2.91-2-3-4.12-.25-8.89-.11-17.83-1.07-26.65-.49-4.46-4.28-8.71-4.26-13,0-4.48,3.73-8.85,4.25-13.44a239.43,239.43,0,0,0,1-25.85c0-3.45.91-4.75,4.56-5.24C124.59,146,131.64,136.9,131,126.27A19.57,19.57,0,0,0,111.35,108c-15.6.28-27.81,7-35.92,20.63-5.32,8.95-6.29,18.76-5.79,27.23,0,5.11-.1,8.57,0,12,.09,2.52-.51,3.75-3.4,4.12-10.7,1.37-18.19,9.82-18,19.92s7.44,18.22,18,19.58c2.83.36,3.52,1.49,3.46,4.06-.12,5.85-.09,11.71,0,17.56.23,21.92,14.49,38.54,36.07,42.1,12.55,2.06,23.39-4.92,25.1-16.37A19.83,19.83,0,0,0,112.53,235.77Zm-3.31,23.74c-13-.58-23.22-11.73-23.57-26.34-.16-6.38,0-12.77-.05-19.15-.16-10.26-6.19-17-16.35-18.2-2.67-.31-4.89-1.08-4.89-4.08s2.2-3.8,4.87-4.1c10.09-1.13,16.17-7.94,16.38-18.18.17-7.84-.17-15.73.58-23.51,1.15-12,11.19-21.1,23.17-22,2.82-.21,5.31.29,5.6,3.55s-2.1,4.09-4.91,4.43c-10.06,1.2-16.19,8-16.42,18.25-.14,6.12-.12,12.24,0,18.36a27.76,27.76,0,0,1-5.26,17.2c-3.3,4.61-3.31,7.37,0,12a27.67,27.67,0,0,1,5.28,17.19c-.11,5.85-.07,11.71,0,17.56.11,11,6,17.68,16.82,19.11,2.7.35,4.79,1.35,4.54,4.37S112.48,259.74,109.22,259.51Z"/><path d="M347.56,173.06c-2.72-1-6.63-1.23-7.85-3.16-1.39-2.2-.38-5.92-.41-9,0-1.06,0-2.13,0-3.19h0c0-2.93.09-5.86,0-8.78-.7-21.45-15.79-38.08-37-40.87-12.09-1.59-22.55,5.66-24.15,16.75-1.66,11.43,5.86,21,18.16,22.81,2.39.36,3.18,1.34,3.16,3.59-.07,5.72,0,11.44,0,17.16a44.84,44.84,0,0,0,4.75,21.17c.63,1.25.31,3.22-.12,4.7-1.14,3.93-3.37,7.7-3.73,11.67-.77,8.58-.72,17.24-.84,25.87,0,2.57-.74,3.7-3.54,4.07-11.55,1.52-18.9,10.7-17.87,21.92.95,10.45,10.11,18,21.39,17.76,21.58-.54,39.14-18.56,39.86-41,.19-6,.2-12,0-18-.12-3.35.63-4.8,4.42-5.28,9.5-1.18,16.06-8.67,16.93-18.37C361.35,184.51,355.81,176.06,347.56,173.06Zm-8.21,22.79c-9.62,1.13-15.75,8-16,17.72-.2,8,.16,16-.6,23.9-1.14,12-11.14,21.11-23.13,22-2.81.22-5.32-.26-5.63-3.52s2-4.12,4.88-4.45c10-1.14,16.2-8,16.44-18.23.14-6.11.12-12.24,0-18.35a27.72,27.72,0,0,1,5.25-17.21c3.31-4.63,3.33-7.4.05-12a27.66,27.66,0,0,1-5.3-17.18c.11-6,.09-12,0-18-.16-10.69-6.17-17.41-16.78-18.74-2.72-.34-4.82-1.33-4.57-4.34.27-3.26,2.71-3.82,5.54-3.62,13.48,1,23.38,11.87,23.79,26.31.09,3.32,0,6.65,0,10h0c0,3.32-.09,6.65,0,10,.29,9.47,6.56,16.38,15.89,17.41,2.74.3,5.29.8,5.32,4.07S342.11,195.53,339.35,195.85Z"/><path d="M261.54,112.66c-7.05-12.76-26.48-14.19-35.41,1.43-25.86,45.22-52,90.24-78,135.42A26.27,26.27,0,0,0,144.79,260c-.81,9.18,5.4,17.47,14.34,20.11,8.66,2.56,17.92-1.05,22.86-9.57q39.78-68.62,79.28-137.42c1.73-3,2.48-6.61,3.76-10.14C263.84,119.33,263.22,115.7,261.54,112.66Zm-13.86,12.13c-.31.59-.62,1.18-1,1.75q-38.79,67.2-77.62,134.36a21.79,21.79,0,0,1-3.43,3.86c-3.74,0-5.62-2.41-4.86-4.95a16.9,16.9,0,0,1,1.79-3.55q38.38-66.49,76.78-133c.47-.81.76-2,1.45-2.33,1.74-.78,3.93-2,5.46-1.52C248.62,120.14,248.83,122.56,247.68,124.79Z"/><path d="M353,39.81a8.16,8.16,0,0,1-8.15,8.1A7.94,7.94,0,0,1,344.88,32,8.17,8.17,0,0,1,353,39.81Z"/><path d="M89.67,327.57a8,8,0,0,1-7.88,7.89,8,8,0,1,1,.11-15.9A8,8,0,0,1,89.67,327.57Z"/><path d="M43.7,32.42A8.17,8.17,0,0,1,35,39.88a7.93,7.93,0,0,1,1.27-15.81A8.16,8.16,0,0,1,43.7,32.42Z"/><path d="M75.67,31.85a8.21,8.21,0,0,1-7.81,8.07A7.94,7.94,0,1,1,67.59,24,8.27,8.27,0,0,1,75.67,31.85Z"/><path d="M107.61,31.91a8.21,8.21,0,0,1-7.86,8A7.94,7.94,0,1,1,99.59,24,8.26,8.26,0,0,1,107.61,31.91Z"/></g></g></svg>}></Skill>
                                        <Skill title="Graphic Design" svgCode={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410.17 410.32" fill="#fff"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M346.53,52.82c.05,8.41,2.59,11,11,11,13.88,0,27.75-.08,41.62,0,5,0,8.88-1.28,11-6.11V5.68c-2.5-4.47-6.35-5.76-11.34-5.68C385,.21,371.05.06,357.17.08c-7.88,0-10.58,2.68-10.64,10.57,0,4.36,0,8.72,0,13.12H237c0-4.57,0-8.93,0-13.29C236.93,3,234,.09,226.51.08q-21.45,0-42.86,0c-7.44,0-10.41,3-10.47,10.43,0,4.36,0,8.72,0,13.16H63.65c0-4.82.06-9.34,0-13.86C63.49,3,60.61.1,53.77.09Q31.94,0,10.12.08C2.85.1,0,3,0,10.4Q0,32,0,53.67C0,60.75,2.88,63.75,9.9,63.8q21.84.12,43.67,0c7.31,0,10-2.88,10.08-10.33,0-4.37,0-8.75,0-13.14h64.9c-64,33.08-98.71,85.22-104.9,156.5-.19.08-.43.28-.66.28-4.28,0-8.54,0-12.82.08C2.9,197.24,0,200.11,0,207.46q0,21.63,0,43.26c0,7.1,2.84,10.14,9.83,10.19q22,.13,44.06,0c6.81,0,9.68-3,9.71-9.86q.14-22,0-44.07c0-6.89-3-9.71-9.79-9.78-4.5,0-9,0-13.53,0C43.22,120,103.58,55.29,173.18,43.4c0,3.51,0,7,0,10.4.11,6.81,3,9.94,9.7,10q22.23.15,44.45,0c6.68-.05,9.56-3.19,9.66-10,0-3.44,0-6.88,0-10.4,70.88,12.3,130.14,77.89,132.83,153.81-4.24,0-8.48,0-12.72,0-7.85,0-10.55,2.7-10.58,10.62q0,21.23,0,42.46c0,7.94,2.67,10.63,10.56,10.65,14.16.05,28.3-.06,42.45.06,4.87,0,8.56-1.49,10.62-6.1V202.79c-2.49-4.47-6.34-6-11.34-5.66-4.09.26-8.21.05-12.25.05-6.25-71.63-41-123.84-105.15-157h65.1C346.53,44.43,346.52,48.62,346.53,52.82Zm16.36-36.51H394V47.55h-31.1ZM47.33,47.56H16.22V16.29H47.33Zm0,165.85v31.25H16.21V213.41ZM220.71,47.54h-31.3V16.39h31.3ZM394,213.48v31.11H362.79V213.48Z"/><path d="M284.33,219.54q-35.76-65-71.61-130c-3.95-7.18-11.27-7.17-15.26,0q-16,28.86-31.84,57.83c-2.84,5.19-1.82,9.84,2.42,12.19s8.64.7,11.56-4.53c5.08-9.07,10.06-18.21,15.11-27.31.52-1,1.17-1.88,2-3.26a13.82,13.82,0,0,1,.35,1.72c0,17.9,0,35.79.08,53.68,0,2.49-1.29,3-3.07,3.83a27.21,27.21,0,1,0,21.91,0c-2.46-1.06-3-2.35-2.94-4.75.1-13.61,0-27.23,0-40.85V124c1,1.4,1.36,1.88,1.64,2.41q26,47.12,52,94.22c1.3,2.34.51,3.56-1,5.15a128.56,128.56,0,0,0-30,52.69c-1.11,3.8-2,7.67-2.93,11.52H177.48a4,4,0,0,1-.4-.86,131.82,131.82,0,0,0-33.24-64.19,4.53,4.53,0,0,1-.32-4.06c2.15-4.43,4.91-8.58,6.94-13.06,1-2.28,1.93-5.49,1.06-7.48a11.13,11.13,0,0,0-6.2-5.31c-3.54-1.17-6.46,1.1-8.24,4.22-3.57,6.25-7,12.59-10.47,18.9-3.68,6.7-3.4,9.08,2.07,14.39a112.92,112.92,0,0,1,23,31.52,101.53,101.53,0,0,1,9,26.23c-3.32,0-6.27-.22-9.16,0a23.9,23.9,0,0,0-21.4,18.2,23.55,23.55,0,0,0,10,25.51,5,5,0,0,1,2.49,4.87c-.06,20,.07,40.06-.11,60.08-.05,5,1.2,8.86,5.68,11.35H153c4.47-2.49,5.74-6.36,5.69-11.34-.19-18.68-.09-37.37-.09-56.05v-4.51h92.93v4.11c0,18.82.11,37.63-.07,56.45,0,5,1.22,8.85,5.68,11.34H262c4.49-2.49,5.74-6.37,5.69-11.35-.18-20-.12-40.05,0-60.08a6.36,6.36,0,0,1,2.11-4.51c9-6.57,12.89-16.6,10-26.63-3.09-10.58-11.81-17.24-23.12-17.6-2.33-.08-4.66,0-7.26,0,.38-1.71.62-2.88.92-4a113.61,113.61,0,0,1,31.49-53.87C286.65,227.54,287.21,224.77,284.33,219.54Zm-68.06-11a11.19,11.19,0,0,1-22.37,0,11.19,11.19,0,1,1,22.37,0Zm37.25,97.66a22.91,22.91,0,0,1,4.76.31,7.85,7.85,0,0,1,0,15.38,20.51,20.51,0,0,1-4.37.31q-24.59,0-49.22,0c-16.14,0-32.28,0-48.41,0a17.67,17.67,0,0,1-5.5-.67,7.14,7.14,0,0,1-5.12-7.32c0-3.57,1.73-6.2,5.12-7.3a19.75,19.75,0,0,1,5.9-.68Q205.11,306.14,253.52,306.17Z"/><path d="M165.42,178a8,8,0,0,1-7.83,8,8,8,0,0,1-7.91-7.86,8.07,8.07,0,0,1,7.78-8A8.15,8.15,0,0,1,165.42,178Z"/></g></g></svg>}></Skill>
                                        <Skill title="UX Design" svgCode={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.41 383.32" fill="#fff"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M270.54,262.29c-10-.05-20,0-30,0-1.32,0-2.64-.11-4-.16v-7.62h4.28c10.36,0,20.72.15,31.07-.07a18.56,18.56,0,0,0,0-37.11q-41.17-.24-82.36,0c-8.11.05-14.1,4.2-17,11.8-1.06,2.75-2.45,3.11-4.91,3.1-14-.08-28-.13-41.93,0-10.56.09-17.85,7.48-17.94,18-.06,7.61,0,15.22,0,22.83,0,1.19-.13,2.38-.21,3.79-9.09,0-17.81.08-26.52-.1-1,0-2.28-1.25-2.81-2.25-3.37-6.36-8.52-10.17-15.69-10.54a163.91,163.91,0,0,0-19.45,0c-9.59.61-16.42,7.64-17.26,17.08C25,289.85,31,298,40.17,300.31a70.07,70.07,0,0,0,7,1.07c0,5.26-.07,10.37,0,15.47.18,10.09,7.45,17.47,17.51,17.68,6.49.13,13,.06,19.47,0,4.29,0,6.95-2.29,6.91-5.7s-2.62-5.48-7-5.5c-6.24,0-12.48.05-18.72,0-4.08-.06-6.69-2.19-6.84-5.92-.22-5.32-.06-10.67-.06-16a6.68,6.68,0,0,1,1.32-.34c8.5-.09,14.77-3.72,18.8-11.32.49-.93,2.35-1.6,3.57-1.6q43.8-.14,87.6,0a5.69,5.69,0,0,1,4,2.26c4,5.8,9.28,8.92,16.3,9,4.24.07,8.49,0,12.73,0,7.33,0,14.66,0,22.16,0,.1,1.34.23,2.31.23,3.27,0,16.22.07,32.44,0,48.66-.06,12.68-8.23,20.69-21,20.69q-85.92,0-171.83,0a26.6,26.6,0,0,1-5.21-.36c-10-2-15.85-9.79-15.86-21V32.57c0-.87,0-1.74,0-2.61.45-9.06,6.5-17,15.49-18.08,8.43-1,17.06-.21,25.78-.21.91,4.52,1.71,9,2.74,13.53,2.75,12,12.66,20.41,24.84,20.5q38,.28,76,0c12.37-.1,22.42-8.67,25.06-20.74.82-3.77,1.41-7.6,2.29-11.35.2-.88,1.14-2.27,1.74-2.26,8.22,0,16.55-.57,24.63.58,9.74,1.38,15.31,9.62,15.31,20.5q0,79.35,0,158.7a39.48,39.48,0,0,0,.11,4.49,5.13,5.13,0,0,0,5.22,4.89,5.05,5.05,0,0,0,5.51-4.09,18.26,18.26,0,0,0,.38-4.44q0-34.62,0-69.25c0-30.19.06-60.38,0-90.58C236.3,13,223.22,0,204.06,0Q118.14,0,32.23.06A37.36,37.36,0,0,0,21.91,1.41C8.13,5.45,0,17.15,0,32.6Q0,191.68,0,350.75c0,1.12,0,2.25.06,3.37,1,12.37,7.14,21.29,18.37,26.58a70.08,70.08,0,0,0,7.72,2.62h184.2c.19-.16.36-.39.57-.45,17.44-4.8,25.44-15.28,25.45-33.37q0-22.83,0-45.67v-4.37h4c10,0,20,0,30,0,11.66,0,20.08-7.93,20-18.68C290.34,270.21,281.94,262.35,270.54,262.29ZM61.27,289.69c-2.86.13-5.73,0-8.6,0s-5.49.1-8.22,0c-4.37-.19-7.43-3.27-7.44-7.3a7.08,7.08,0,0,1,7-7.27c5.85-.23,11.72-.23,17.56,0a7.23,7.23,0,0,1,7.12,7.24A7.44,7.44,0,0,1,61.27,289.69ZM172.41,11.43c-.93,4.51-1.53,8.85-2.77,13a14.26,14.26,0,0,1-13.51,10q-38,.17-76,0c-6.35,0-11-3.57-13.15-9.43-1.56-4.25-2.07-8.9-3.1-13.6ZM190.88,228.5c13.36-.06,26.71,0,40.06,0,13,0,26,0,38.94,0,1.82,0,4.24,0,5.31,1.09,1.78,1.78,3.77,4.49,3.63,6.69s-2.56,4.45-4.43,6.2c-.89.83-2.84.73-4.31.73q-39.3.06-78.62,0c-4.87,0-7.85-1.9-8.76-5.43C181.37,232.68,184.93,228.52,190.88,228.5Zm-18.69,46a4,4,0,0,1-2.74,2.19c-16.46.1-32.92,0-49.38,0-.22,0-.43-.19-1-.45,0-9-.17-18.22.1-27.4.1-3.42,2.72-5.37,6.1-5.39q22.83-.16,45.65,0a4.13,4.13,0,0,1,2.79,1.79c4.08,6.34,9.91,9.21,17.32,9.21H225v7.57c-1.46.08-2.78.21-4.09.21-10,0-20,0-29.94,0C182,262.3,175.77,266.27,172.19,274.53ZM271,288.21c-13.35.06-26.7,0-40.05,0s-26.71,0-40.06,0c-4.49,0-7.44-2.07-8.23-5.58a7.17,7.17,0,0,1,5.83-8.9,23.34,23.34,0,0,1,4.1-.22H269c.75,0,1.5,0,2.24,0,4.69.24,7.89,3.17,7.94,7.27S275.84,288.19,271,288.21Z"/><path d="M204,180.36c-2.83,2-6,1.23-8.69-2.26q-14.75-19.33-29.42-38.74c-.59-.78-1.24-1.53-2.12-2.62-1,1.15-1.83,2.11-2.61,3.15q-13.54,17.91-27,35.83a17.07,17.07,0,0,1-1.89,2.32c-2.3,2.11-4.89,2.45-7.49.65-2.41-1.66-2.89-5-1-7.67,2.2-3.18,4.62-6.21,6.94-9.29l26-34.52c-7.9-10.43-15.72-20.75-23.55-31.07-1.88-2.48-3.83-4.92-5.64-7.45-2.23-3.12-1.9-6.31.7-8.3S134,79,136.33,81.93c8.66,11.27,17.23,22.62,25.83,33.94.38.49.78,1,1.48,1.84.92-1.14,1.76-2.11,2.53-3.13Q177.9,99,189.6,83.5c.52-.69,1-1.41,1.61-2.06,2.23-2.43,5.31-2.87,7.7-1.13,2.56,1.87,3.08,5,1.11,8-1.67,2.48-3.56,4.81-5.36,7.2l-23.91,31.72,25,33c2.86,3.78,5.76,7.53,8.58,11.34C206.94,175,206.76,178.41,204,180.36Z"/><path d="M103.42,116.14V144.2c0,17.41-9.06,29.81-25.67,35.13-20.27,6.49-43.49-6.07-47.35-25.92-.89-4.58-.49-9.43-.53-14.16-.08-7,0-14,0-21q0-15.35,0-30.69c0-5,2-7.6,5.68-7.54s5.54,2.65,5.54,7.75c0,19.2.74,38.45-.23,57.61-.73,14.5,15,26.08,28,24.31A29.49,29.49,0,0,0,85,162.61a20,20,0,0,0,7.22-15.75c-.13-19.33,0-38.67,0-58a28.91,28.91,0,0,1,.06-3.36c.39-3.48,2.77-5.6,6-5.41,3,.17,5.13,2.33,5.16,5.74C103.46,95.93,103.42,106,103.42,116.14Z"/><path d="M172.5,310.42q-23.55-.26-47.12,0c-10.8.1-19,8.29-18.92,18.56s8.27,18.34,19.07,18.45c7.73.07,15.45,0,23.18,0s15.71.07,23.56,0c10.66-.13,18.66-7.95,18.8-18.22C191.22,318.66,183.37,310.53,172.5,310.42Zm-1,25.77c-7.6.05-15.2,0-22.79,0s-15.2.05-22.79,0c-4.9,0-8.21-3-8.23-7.27s3.19-7.27,8.19-7.29q22.79-.11,45.58,0c5.32,0,8.41,2.9,8.32,7.45C179.73,333.43,176.63,336.16,171.54,336.19Z"/><path d="M206.37,29.48a5.61,5.61,0,0,1-5.68,5.32,5.45,5.45,0,1,1,.3-10.9A5.5,5.5,0,0,1,206.37,29.48Z"/><path className="cls-1" d="M117.9,29.35c-2.17,0-4.34,0-6.51,0,2.17,0,4.34,0,6.51,0,2.33,0,4.66,0,7,0C122.56,29.39,120.22,29.35,117.9,29.35Z"/><path d="M134.86,23.79c0,3.27-2.08,5.4-5.74,5.54-1.41.05-2.82.06-4.24.06-2.32,0-4.65,0-7,0-2.17,0-4.34,0-6.51,0-1.32,0-2.65,0-4-.05-3.65-.12-5.87-2.19-6-5.34s2.22-5.73,6-5.8c7.23-.12,14.47-.13,21.7,0C132.71,18.28,134.86,20.58,134.86,23.79Z"/></g></g></svg>}></Skill>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content content--works">
                            <Break breakpoints={UIBreakpoints} query={{ method: 'is', breakpoint: 'desktop' }}><Slider></Slider></Break>
                            <Break breakpoints={UIBreakpoints} query={{ method: 'isAtMost', breakpoint: 'tablet' }}><List></List></Break>
                        </div>
                        <div className="content content--contact">
                            <h2> <span className="color--red">Notre premier contact</span> commence ici</h2>
                            <a href="mailto:theo.chevessier@outlook.fr">theo.chevessier@outlook.fr</a>
                        </div>
                    </div>
                    <Marquee></Marquee>
                </section>
            </AnimatedPage>
        </>
    )
}

export default AboutView
  