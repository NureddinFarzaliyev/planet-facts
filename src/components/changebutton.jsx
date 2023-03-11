export const Navbutton = ({ number, text, secondaryText, param, def, color }) => {
    return (
        <button className={`${text} ${def ? `bg-c-${color}` : ''} items-center border-${color} tracking-[0.15rem] h-20 px-10 font-bold flex transition duration-500
                    lg:px-0 lg:border-[1px] lg:border-c-nav-text lg:w-[120%] lg:ml-[-10%] lg:h-16 lg:flex lg:mt-5 lg:items-center
                    hover:scale-105`} onClick={param}>
            <span className='hidden lg:inline-block lg:mx-8'>{number}</span>
            <div className='text-white tracking-[0.3rem]'> <span className='hidden lg:inline-block'> {secondaryText} </span> {text}</div>
        </button>
    )
}