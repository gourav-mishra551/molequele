import "./header.css"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="main flex  overflow-hidden h-auto">
        <div className="lefts sm:w-[898px] sm:max-w-[auto] ">
            <h1 className="text-3xl sm:mt-0 mt-[38px] sm:ml-0 font-bold heading sm:text-5xl sm:leading-loosen leading-relaxed ">Your Speciality chemicals 
                <span className="flex flex-col sm:flex sm:flex-row sm:leading-loose md:leading-relaxed leading-relaxed">procuments
                <span className= "flex flex-col sm:flex sm:flex-row sm:ml-4 ml-0">partner</span></span>
            </h1>
            <p className="mt-4 para text-[16px] w-[273px] sm:w-[auto] sm:text-[24px] md:text-[25px] text-blacks leading-relaxed font-normal  sm:ml-0 z-10 relative">We Provide high quality chemicals with exceptional services & 
            <br  className="hidden sm:block" />    competitive price
            </p>
            <Link to = "/industry">            <button className="mt-4  text-white buttonss text-[14px] sm:text-[18px] w-[147px] h-[51px] sm:w-[199px] sm:h-[59px] sm:mt-10  sm:ml-0">Browse Products</button>
            </Link>

        </div>
        
    </div>
  )
}

export default Header