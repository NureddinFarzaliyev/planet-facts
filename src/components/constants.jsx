
//! Images

// icons
import hamburgerIcon from './assets/icon-hamburger.svg';
import chevron from './assets/icon-chevron.svg'
import sourceIcon from './assets/icon-source.svg'

// planet images
import mercury from './assets/planet-mercury.svg'
import venus from './assets/planet-venus.svg'
import earth from './assets/planet-earth.svg'
import mars from './assets/planet-mars.svg'
import jupiter from './assets/planet-jupiter.svg'
import saturn from './assets/planet-saturn.svg'
import uranus from './assets/planet-uranus.svg'
import neptune from './assets/planet-neptune.svg'

export const planetImgs = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]

// planet internal images
import mercuryInt from './assets/planet-mercury-internal.svg'
import venusInt from './assets/planet-venus-internal.svg'
import earthInt from './assets/planet-earth-internal.svg'
import marsInt from './assets/planet-mars-internal.svg'
import jupiterInt from './assets/planet-jupiter-internal.svg'
import saturnInt from './assets/planet-saturn-internal.svg'
import uranusInt from './assets/planet-uranus-internal.svg'
import neptuneInt from './assets/planet-neptune-internal.svg'

export const planetInts = [mercuryInt, venusInt, earthInt, marsInt, jupiterInt, saturnInt, uranusInt, neptuneInt]

// planet geology images
import mercuryGeo from './assets/geology-mercury.png'
import venusGeo from './assets/geology-venus.png'
import earthGeo from './assets/geology-earth.png'
import marsGeo from './assets/geology-mars.png'
import jupiterGeo from './assets/geology-jupiter.png'
import saturnGeo from './assets/geology-saturn.png'
import uranusGeo from './assets/geology-uranus.png'
import neptuneGeo from './assets/geology-neptune.png'

export const planetGeos = [mercuryGeo, venusGeo, earthGeo, marsGeo, jupiterGeo, saturnGeo, uranusGeo, neptuneGeo]

export const Images = {
    // Icons
    hamburgerIcon: hamburgerIcon,
    chevron: chevron,
    sourceIcon: sourceIcon,
};


//! Some functions

export const setImg = (shownImg, hiddenImg, hiddenImg2) => {

    const hidden1 = document.querySelector(`.${hiddenImg}`)
    const hidden2 = document.querySelector(`.${hiddenImg2}`)
    const shown = document.querySelector(`.${shownImg}`)

    hidden1.classList.add('hidden')
    hidden2.classList.add('hidden')
    shown.classList.remove('hidden')

    // console.log('hidden:', hidden1, hidden2)
    // console.log('shown:', shown)

}