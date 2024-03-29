import { useState, useEffect } from "react"
import Planet from "./planet"
import './Pages.css'
import './animation.css'
import { Images } from "./constants"


const Pages = () => {
    const [planets, setPlanets] = useState([])
    const [currentPlanet, setCurrentPlanet] = useState([])

    // Get data and assign hooks
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('data.json')
            const data = await response.json()

            setPlanets(data)
            setCurrentPlanet(data[2])
        }
        getData()
    }, [])

    // Change data on click and animate
    const clickHandler = (number) => {
        setTimeout(() => {
            // Image animation
            menuHandler();
            const planetElement = document.querySelector('.TOP')
            planetElement.classList.add('planet--animate')
        }, 0)

        setTimeout(() => {
            // Image animation
            const planetElement = document.querySelector('.TOP')
            setCurrentPlanet(planets[number])
            planetElement.classList.remove('planet--animate')
            planetElement.classList.add('planet--animate-2')
        }, 500) //500

        setTimeout(() => {
            // Letter animation
            const planetLetters = document.querySelectorAll('.planetLetter')
            let i = 0
            for (i == 0; i < planetLetters.length; i++) {
                planetLetters[i].classList.add('header-animate')
            }
        }, 520);

        setTimeout(() => {
            // Image animation
            const planetElement = document.querySelector('.TOP')
            planetElement.classList.remove('planet--animate-2')

            // Letter animation
            const planetLetters = document.querySelectorAll('.planetLetter')
            let i = 0
            for (i == 0; i < planetLetters.length; i++) {
                planetLetters[i].classList.remove('header-animate')
            }
        }, 1200)

        // console.log(currentPlanet.overview.content)
    }

    // Menu handler
    const menuHandler = () => {
        const buttons = document.querySelector('.buttons')

        if (buttons.classList.contains('visible')) {
            // console.log(element)
            buttons.classList.remove('visible');
            buttons.classList.add('hidden')
            buttons.classList.remove('nav-animate')
            // console.log('hidden')
        } else if (buttons.classList.contains('hidden')) {
            buttons.classList.remove('hidden');
            buttons.classList.add('visible')
            if (window.innerWidth < 1024) {
                buttons.classList.add('nav-animate')
            }
            // console.log('sawed')
        }
    }

    //!Components
    // Buttons to change data
    const Planetbutton = ({ number }) => {
        if (planets && planets[number]) {
            return (
                // Nav Buttons
                <button
                    className={
                        `border border-y-2 border-x-0 border-y-c-border flex items-center justify-between w-[55rem] h-32
                        lg:h-10 lg:border-0 lg:w-16 lg:mx-3 hover:border-t-[2px] hover:mt-[-1px] lg:transition-all hover:border-t-red-900 lg:flex lg:justify-center group`
                    }
                    onClick={() => clickHandler(number)}>
                    <div className="flex">
                        {/* Round thing for mobile */}
                        <div className={`h-6 w-6 rounded-full bg-c-${planets[number].name.toLowerCase()} lg:hidden`}></div>
                        {/* Button text */}
                        <div className="tracking-[0.0852275rem] ml-10 font-f-text text-white lg:text-c-nav-text group-hover:text-white lg:ml-0 lg:text-sm">{planets[number].name.toUpperCase()}</div>
                    </div>
                    {/* chevron image for mobile buttons */}
                    <div>
                        <img className="h-4 lg:hidden" src={Images.chevron} alt="" />
                    </div>
                </button>
            )
        } else {
            return ('')
        }
    }

    // Buttons in one div
    const Buttons = () => {
        return (
            <div className="buttons z-30 w-[100%] lg:mt-0 pl-10 bg-c-background left-0 h-[90%] hidden text-c-nav-text top-32 text-4xl absolute
            lg:flex lg:text-xl lg:right-0 lg:background-none lg:mr-10
            lg:h-auto lg:top-auto lg:w-auto lg:left-auto lg:pl-auto">
                <Planetbutton number={0} />
                <Planetbutton number={1} />
                <Planetbutton number={2} />
                <Planetbutton number={3} />
                <Planetbutton number={4} />
                <Planetbutton number={5} />
                <Planetbutton number={6} />
                <Planetbutton number={7} />
            </div>
        )
    }

    return (
        <div className="wrapper bg-c-background bg-cover bg-center min-h-screen">
            {/* NAV */}
            <div className="NAV bg-c-background p-10 text-white flex justify-between items-center
           lg:h-10 lg:items lg:justify-center lg:items-start lg:flex-col lg:w-[100%] lg:shadow-2xl lg:border-b-0 z-10">
                {/* Logo */}
                <h1 className="font-f-header font-bold text-5xl lg:text-xl">THE PLANETS</h1>
                {/* Hamburger icon for mobile */}
                <div onClick={menuHandler} className="lg:hidden">
                    <img src={Images.hamburgerIcon} className="h-9" />
                </div>
                <Buttons />
            </div>
            {/* NAV END */}

            <div className="planet text-white">
                <Planet currentPlanet={currentPlanet} />
            </div>
        </div >
    )
}

export default Pages