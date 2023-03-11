import React, { useEffect, useState } from 'react'
import { Images, planetImgs, planetInts, planetGeos, setImg } from './constants'
import './Pages.css'
import { PlanetImg, PlanetInt, PlanetGeo } from './planetImages'
import { Bottomcard } from './bottomcard'
import { Navbutton } from './changebutton'

const Planet = ({ currentPlanet }) => {
    if (currentPlanet && currentPlanet.name) { // checks if currentplanet state hook setted 
        // Set color state to current planet's name
        const [color, setColor] = useState();

        useEffect(() => {
            console.log("Current Planet is", currentPlanet.name) // Current planet console log
            setColor(currentPlanet.name.toLowerCase())
        }, [currentPlanet])

        // Function to change information button colors 
        const buttonColorHandler = (addColor, remove1, remove2) => {
            const buttonAdd = document.querySelector(`.${addColor}`)
            const buttonRemove1 = document.querySelector(`.${remove1}`)
            const buttonRemove2 = document.querySelector(`.${remove2}`)
            if (window.innerWidth > 1024) {
                buttonAdd.classList.add(`bg-c-${color}`)
                buttonRemove1.classList.remove(`bg-c-${color}`)
                buttonRemove2.classList.remove(`bg-c-${color}`)
            } else {
                buttonAdd.classList.add('border-b-2')
                buttonRemove1.classList.remove('border-b-2')
                buttonRemove2.classList.remove('border-b-2')
            }
        }

        // Functions to change data based on information button clicked
        const setOverview = () => {
            const element = document.querySelector('.main_text')
            element.innerHTML = currentPlanet.overview.content
            buttonColorHandler('OVERVIEW', 'STRUCTURE', 'GEOLOGY')

            const source = document.querySelector('.source_link')
            source.href = currentPlanet.overview.source

            setImg('imgDiv', 'intImgDiv', 'geoImgDiv')
        }

        const setInternal = () => {
            const element = document.querySelector('.main_text')
            element.innerHTML = currentPlanet.structure.content
            buttonColorHandler('STRUCTURE', 'OVERVIEW', 'GEOLOGY')

            const source = document.querySelector('.source_link')
            source.href = currentPlanet.structure.source

            setImg('intImgDiv', 'imgDiv', 'geoImgDiv')
        }

        const setGeology = () => {
            const element = document.querySelector('.main_text')
            element.innerHTML = currentPlanet.geology.content
            buttonColorHandler('GEOLOGY', 'OVERVIEW', 'STRUCTURE')

            const source = document.querySelector('.source_link')
            source.href = currentPlanet.geology.source

            setImg('geoImgDiv', 'imgDiv', 'intImgDiv')
        }


        // Splitting planet to names to animate on laod
        const planetName = currentPlanet.name.toUpperCase().split('');

        return (
            <div className='pb-20'>
                {/* <div>{currentPlanet.name}</div>
                <div>{currentPlanet.overview.content}</div> */}
                <div className='TOP mt-10  lg:flex lg:justify-around'> {/*flex justify-center flex-col*/}
                    <div className='IMAGE flex justify-center items-center h-[40rem]'>
                        <PlanetImg imgUrl={planetImgs[currentPlanet.order]} />
                        <PlanetInt imgUrl={planetInts[currentPlanet.order]} />
                        <PlanetGeo imgUrl1={planetImgs[currentPlanet.order]} imgUrl2={planetGeos[currentPlanet.order]} />
                    </div> {/*currentPlanet.name.toUpperCase()*/}
                    <div className="INFO lg:mt-20 lg:w-[30%]">
                        <h1 className='text-center font-bold lg:text-left text-7xl font-f-header tracking-[0.0852275rem]'>
                            <div className='planetsDiv overflow-hidden h-20 width-auto'>
                                {planetName.map((letter) => {
                                    return (
                                        <span className='planetLetter'>{letter}</span>
                                    )
                                })}
                            </div>
                        </h1>
                        <p className='main_text text-center lg:text-left h-44 mx-20 lg:mx-auto mt-12 text-2xl lg:text-xl text-c-nav-text'>{currentPlanet.overview.content}</p>
                        <div className='flex text-xl mt-10 justify-center text-c-nav-text lg:justify-start'>
                            Source:
                            <a className='source_link flex underline ml-1' target="__blank">Wikipedia <img className='w-5 h-5 ml-1 mt-1 opacity-40' src={Images.sourceIcon}></img></a>
                        </div>
                        <div className='absolute top-32 flex justify-between px-10 w-screen text-c-nav-text
                        lg:block lg:relative lg:w-auto lg:flex-col lg:left-0 lg:top-10'>
                            <Navbutton number={"01"} text={"OVERVIEW"} color={color} param={setOverview} def={window.innerWidth > 1024 ? true : false} />
                            <Navbutton number={"02"} text={"STRUCTURE"} color={color} secondaryText={"INTERNAL "} param={setInternal} />
                            <Navbutton number={"03"} text={"GEOLOGY"} color={color} secondaryText={"SURFACE "} param={setGeology} />
                        </div>
                    </div>
                </div>
                <div className='BOTTOM mt-12 lg:mt-[7rem] lg:flex lg:justify-center'>
                    <Bottomcard text={"ROTATION TIME"} number={currentPlanet.rotation} />
                    <Bottomcard text={"REVOLUTION TIME"} number={currentPlanet.revolution} />
                    <Bottomcard text={"RADIUS"} number={currentPlanet.radius} />
                    <Bottomcard text={"AVERAGE TEMP"} number={currentPlanet.temperature} />
                </div>
            </div >
        )
    }
}

export default Planet