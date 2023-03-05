import React, { useEffect, useState } from 'react'
import { Images } from './constants'
import './Pages.css'

const Planet = ({ currentPlanet }) => {

    console.log("Current Planets is", currentPlanet)


    if (currentPlanet && currentPlanet.name) { // checks if currentplanet state hook setted 

        const link = `Images.${currentPlanet.name.toLowerCase()}`

        // Set color state to current planet's name
        const [color, setColor] = useState();

        useEffect(() => {
            setColor(currentPlanet.name.toLowerCase())
        }, [currentPlanet])

        // Function to change information button colors 
        const buttonColorHandler = (addColor, remove1, remove2) => {
            const buttonAdd = document.querySelector(`.${addColor}`)
            const buttonRemove1 = document.querySelector(`.${remove1}`)
            const buttonRemove2 = document.querySelector(`.${remove2}`)
            buttonAdd.classList.add(`bg-c-${color}`)
            buttonRemove1.classList.remove(`bg-c-${color}`)
            buttonRemove2.classList.remove(`bg-c-${color}`)
        }

        // Functions to change data based on information button clicked
        const setOverview = () => {
            const element = document.querySelector('.main_text')
            element.innerHTML = currentPlanet.overview.content
            buttonColorHandler('OVERVIEW', 'STRUCTURE', 'GEOLOGY')

            const source = document.querySelector('.source_link')
            source.href = currentPlanet.overview.source

            // const image = document.querySelector('.planet_image')
            // image.src = `Images.${currentPlanet.name.toLowerCase()}`
        }

        const setInternal = () => {
            const element = document.querySelector('.main_text')
            element.innerHTML = currentPlanet.structure.content
            buttonColorHandler('STRUCTURE', 'OVERVIEW', 'GEOLOGY')

            const source = document.querySelector('.source_link')
            source.href = currentPlanet.structure.source
        }

        const setGeology = () => {
            const element = document.querySelector('.main_text')
            element.innerHTML = currentPlanet.geology.content
            buttonColorHandler('GEOLOGY', 'OVERVIEW', 'STRUCTURE')

            const source = document.querySelector('.source_link')
            source.href = currentPlanet.geology.source
        }

        // Nav buttons (aka information buttons)
        const Navbutton = ({ number, text, secondaryText, param }) => {
            return (
                <button className={`${text} tracking-[0.15rem] h-20 px-10 font-bold flex transition-all duration-500
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

        return (
            <div className='pb-20'>
                {/* <div>{currentPlanet.name}</div>
                <div>{currentPlanet.overview.content}</div> */}
                <div className='TOP mt-10  lg:flex lg:justify-around'> {/*flex justify-center flex-col*/}
                    <div className='IMAGE flex justify-center items-center h-[40rem]'>
                        <img src={Images.earth} alt="imig" className='planet_image w-50 h-50' />
                    </div>
                    <div className="INFO lg:mt-20 lg:w-[30%]">
                        <h1 className='text-center font-bold lg:text-left text-7xl font-f-header tracking-[0.0852275rem]'>{currentPlanet.name.toUpperCase()}</h1>
                        <p className='main_text text-center lg:text-left mx-auto mt-12 text-2xl lg:text-xl text-c-nav-text'>{currentPlanet.overview.content}</p>
                        <div className='flex text-xl mt-10 justify-center text-c-nav-text lg:justify-start'>
                            Source:
                            <a className='source_link flex underline ml-1' target="__blank">Wikipedia <img className='w-5 h-5 ml-1 mt-1 opacity-40' src={Images.sourceIcon}></img></a>
                        </div>
                        <div className='absolute top-32 flex justify-between px-10 w-screen text-c-nav-text
                        lg:block lg:relative lg:w-auto lg:flex-col lg:left-0 lg:top-10'>
                            <Navbutton number={"01"} text={"OVERVIEW"} param={setOverview} />
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