import React, { useEffect } from 'react'
import { Images } from './constants'

const Planet = ({ currentPlanet }) => {
    // console.log(currentPlanet)



    if (currentPlanet && currentPlanet.name) {

        return (
            <div>
                {/* <div>{currentPlanet.name}</div>
                <div>{currentPlanet.overview.content}</div> */}
                <div className='TOP'>
                    <div className='IMAGE'></div>
                    <div className="INFO">
                        <h1>MERCURY</h1>
                        <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
                        <div>Source: <a href='#'>Wikipedia <img src={Images.sourceIcon}></img></a></div>
                        <div>
                            <button>
                                <span>01</span> <div>OVERVIEW</div>
                            </button>
                            <button>
                                <span>02</span> <div>INTERNAL STRUCTURE</div>
                            </button>
                            <button>
                                <span>03</span> <div>SURFACE GEOLOGY</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='BOTTOM'>
                    <div>
                        <p>ROTATION TIME</p>
                        <h1>59 DAYS</h1>
                    </div>
                    <div>
                        <p>REVOLUTION TIME</p>
                        <h1>88 DAYS</h1>
                    </div>
                    <div>
                        <p>RADIUS</p>
                        <h1>2440 KM</h1>
                    </div>
                    <div>
                        <p>AVERAGE TEMP</p>
                        <h1>430°C</h1>
                    </div>
                </div>
            </div >
        )
    }


}

export default Planet