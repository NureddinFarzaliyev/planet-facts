
export const Bottomcard = ({ text, number }) => {
    return (
        <div className='border-[1px] mx-[5%] px-[5%] py-5 mt-5 border-c-nav-text flex items-center justify-between
            lg:mx-3 lg:px-5 lg:py-7 lg:flex lg:flex-col lg:w-[20%] lg:items-start'>
            <p className='tracking-[0.15rem] text-c-nav-text font-bold'>{text}</p>
            <h1 className='font-f-header text-4xl lg:mt-4 font-bold'>{number}</h1>
        </div>
    )
}