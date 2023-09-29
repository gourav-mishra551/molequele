import "./header.css"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="main flex pl-[1%]  2xl:pl-[8%] xl:pl-[6%] sm:pl-[6%] overflow-hidden">
        <div className="lefts sm:w-[898px] sm:max-w-[auto] ml-auto">
            <h1 className="text-3xl ml-5 sm:ml-0 font-bold heading sm:text-5xl sm:leading-loosen leading-relaxed ">Your Speciality chemicals 
                <span className="flex flex-col sm:flex sm:flex-row sm:leading-loose md:leading-relaxed leading-relaxed">procuments
                <span className= "flex flex-col sm:flex sm:flex-row sm:ml-4 ml-0">partner</span></span>
            </h1>
            <p className="mt-4 para text-[16px] w-[273px] sm:w-[768px] sm:text-[24px] md:text-[25px] text-blacks leading-relaxed font-normal ml-5 sm:ml-0">We Provide high quality chemicals with exceptional services & 
                <span className="initial ml-[0.4rem] sm:ml-0 sm:flex">competitive price</span>
            </p>
            <Link to = "/industry">            <button className="mt-4  text-white buttonss text-[14px] sm:text-[18px] w-[147px] h-[51px] sm:w-[199px] sm:h-[59px] sm:mt-10 ml-5 sm:ml-0">Browse Products</button>
            </Link>

        </div>
        <div className="rights float-right mt-2">
            <img className="h-auto w-[100%] " src="\Mask group.png" alt="chemical-svg" />
        </div>
    </div>
  )
}

export default Header