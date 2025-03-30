import ReactIcon from '../assets/react.svg'

function Hero(){

    return(
        <>
        <div className='flex w-screen  justify-between'>
            <div>
                <h1>We are here to serve you the best quality of products ever</h1>
                <p>BOM offers a variety of sales which include those at the wildest 
                    of your dreams
                </p>
            </div>
            <div>
                <img src={ReactIcon} alt="" />
            </div>
        </div>
        </>
    )
}
export default Hero