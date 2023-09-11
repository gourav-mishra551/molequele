import "./header.css"
const Header = () => {
  return (
    <div className="main flex">
        <div className="lefts sm:ml-36 ml-5">
            <h1 className="text-3xl font-bold heading sm:text-5xl sm:leading-loosen leading-relaxed ">Your Speciality chemicals 
                <span className="flex flex-col sm:flex sm:flex-row sm:leading-loose md:leading-relaxed leading-relaxed">procuments
                <span className= "flex flex-col sm:flex sm:flex-row sm:ml-4 ml-0">partner</span></span>
            </h1>
            <p className="mt-4 para text-[16px] w-[273px] sm:w-[768px] sm:text-[24px] md:text-[25px] text-blacks leading-relaxed font-normal ">We Provide high quality chemicals with exceptional services & 
                <span className="initial ml-[0.4rem] sm:ml-0 sm:flex">competitive price</span>
            </p>
            <button className="mt-4  text-white buttonss text-[14px] sm:text-[18px] w-[147px] h-[51px] sm:w-[199px] sm:h-[59px] sm:mt-10">Browse Products</button>
        </div>
        <div className="rights float-right mt-2">
            <img className="h-auto w-[100%] " src="\Mask group.png" alt="chemical-svg" />
        </div>
    </div>
  )
}

export default Header