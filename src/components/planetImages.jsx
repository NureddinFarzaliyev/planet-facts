

export const PlanetImg = ({ imgUrl }) => {
    return (
        <div className='imgDiv w-72 h-72 lg:w-96 lg:h-96'>
            <img src={imgUrl} alt='' className='planet_image' />
        </div>
    )
}

export const PlanetInt = ({ imgUrl }) => {
    return (
        <div className='intImgDiv w-72 h-72 lg:w-96 lg:h-96 hidden'>
            <img src={imgUrl} alt='' className='planet_image' />
        </div>
    )
}

export const PlanetGeo = ({ imgUrl1, imgUrl2 }) => {
    return (
        <div className='geoImgDiv w-72 h-72 lg:w-96 lg:h-96 hidden'>
            <img src={imgUrl1} alt='' className='planet_image left-0 right-0 mx-auto' />
            <img src={imgUrl2} alt="" className='mt-[-10rem] w-40 left-0 right-0 mx-auto' />
        </div>
    )
}