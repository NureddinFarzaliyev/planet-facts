import React, { useEffect, useState } from 'react'
import { Images, planetImgs, planetInts, planetGeos, setImg } from './constants'
import './Pages.css'

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

        // Nav buttons (aka information buttons)
        const Navbutton = ({ number, text, secondaryText, param, def }) => {
            return (
                <button className={`${text} ${def ? `bg-c-${color}` : ''} items-center border-${color} tracking-[0.15rem] h-20 px-10 font-bold flex transition duration-500
                            lg:px-0 lg:border-[1px] lg:border-c-nav-text lg:w-[120%] lg:ml-[-10%] lg:h-16 lg:flex lg:mt-5 lg:items-center
                            hover:scale-105`} onClick={param}>
                    <span className='hidden lg:inline-block lg:mx-8'>{number}</span>
                    <div className='text-white tracking-[0.3rem]'> <span className='hidden lg:inline-block'> {secondaryText} </span> {text}</div>
                </button>
            )
        }

        // Bottom information cards
        const Bottomcard = ({ text, number }) => {
            return (
                <div className='border-[1px] mx-[5%] px-[5%] py-5 mt-5 border-c-nav-text flex items-center justify-between
                    lg:mx-3 lg:px-5 lg:py-7 lg:flex lg:flex-col lg:w-[20%] lg:items-start'>
                    <p className='tracking-[0.15rem] text-c-nav-text font-bold'>{text}</p>
                    <h1 className='font-f-header text-4xl lg:mt-4 font-bold'>{number}</h1>
                </div>
            )
        }

        // Image with dynamic src
        const PlanetImg = ({ imgUrl }) => {
            return (
                <div className='imgDiv w-72 h-72 lg:w-96 lg:h-96'>
                    <img src={imgUrl} alt='' className='planet_image' />
                </div>
            )
        }

        const PlanetInt = ({ imgUrl }) => {
            return (
                <div className='intImgDiv w-72 h-72 lg:w-96 lg:h-96 hidden'>
                    <img src={imgUrl} alt='' className='planet_image' />
                </div>
            )
        }

        const PlanetGeo = ({ imgUrl1, imgUrl2 }) => {
            return (
                <div className='geoImgDiv w-72 h-72 lg:w-96 lg:h-96 hidden'>
                    <img src={imgUrl1} alt='' className='planet_image left-0 right-0 mx-auto' />
                    <img src={imgUrl2} alt="" className='mt-[-10rem] w-40 left-0 right-0 mx-auto' />
                </div>
            )
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
                            <div className='planetsDiv overflow-hidden h-20 width-auto overflow-hidden'>
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
                            <Navbutton number={"01"} text={"OVERVIEW"} param={setOverview} def={window.innerWidth > 1024 ? true : false} />
                            <Navbutton number={"02"} text={"STRUCTURE"} secondaryText={"INTERNAL "} param={setInternal} />
                            <Navbutton number={"03"} text={"GEOLOGY"} secondaryText={"SURFACE "} param={setGeology} />
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