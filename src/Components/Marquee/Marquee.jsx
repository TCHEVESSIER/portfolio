// React Imports 

import React, {useEffect, useRef} from "react";
import { gsap, TimelineMax} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Marquee.sass'

// Import Components

// Creation Component

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => { 

    const allKeywords = [
        {
            id: '1',
            title : 'Creatif'
        },
        {
            id: '2',
            title : 'Curieux'
        },
        {
            id: '3',
            title : 'Passionné'
        },
        {
            id: '4',
            title : 'Attentif'
        },
        {
            id: '5',
            title : 'Ouvert d\'esprit'
        },
        {
            id: '6',
            title : 'Empathique'
        },
        {
            id: '7',
            title : 'Travail d\'équipe'
        }

    ]

    useEffect(() => {
        
        const sections = document.querySelectorAll('span');

        gsap.to('article', {
            scrollTrigger: {
                trigger: 'article',
                start: 'top',
                scrub: 1.25
            },
            yPercent: -20
        });

        sections.forEach((section, index) => {

            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top',
                    end: 'bottom',
                    toggleActions: 'play none none reverse',
                    markers: false,
                },
            });
            
            ScrollTrigger.create({
                trigger: section,
                id: index+1,
                start: 'top-=150px center',
                end: () => `+=${section.clientHeight + 50}`,
                toggleActions: 'play none none reverse',
                toggleClass: {targets: section, className: "is-active"},
            })
        
        })
    })
    
    return(
        <>
            <div className="marquee-container">
                <article>
                    {
                        allKeywords.map((keyword) => {
                            return(
                                <span key={keyword.id}>{keyword.title}</span>
                            )
                        })
                    }
                </article>
            </div>
        </>
    )
}

export default Marquee
  