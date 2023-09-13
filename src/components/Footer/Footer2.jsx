

const Footer2 = () => {
  return (
    <div className="bg-purple-50 pt-1">
            <img className="sm:block hidden p-5  sm:ml-auto sm:mr-[7em]" src="./Group 48702.svg" alt="logo" />
            <hr className="border sm:block hidden sm:ml-[8rem] sm:mr-[8em]" />
    <div className="flex flex-col pb-32  bg-purple-50  px-5 sm:pl-[8rem] sm:pr-[3em]  w-auto sm:flex sm:flex-row ">
    <div className="w-auto sm:w-8/12">
        
        <div className="flex flex-start ">
            
            <div className="grid grid-cols-4 text-[14px] sm:text-[16px]  sm:grid-cols-4 mt-10 sm:mt-10 font-medium leading-7 text-gray-400 ">
                <div>Home</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                </div>
        </div>
        <div className="flex flex-col text-[14px] sm:text-[16px]  sm:flex-row sm:flex justify-between mt-8 font-medium text-gray-400"> 
          <div className="flex mr-8">
            <div className="mr-8"  >Pharma</div>
            <div >Agrochemicals</div>
          </div>
          <div className="flex flex-1 justify-between mt-8 sm:mt-0 w-full">
            <div className="w-8/12" >Plastics & Polymers</div>
            <div className="w-8/12 ">Adhesives & Sealants</div>
          </div>
            <div className="mt-8 sm:mt-0">Nutritional Suppliments</div>
        </div>
    </div>

    {/* =====================-right-=============== */}

    <div className="right mt-8 ml-0 sm:ml-[6rem]">
      <div className="socioicon flex sm:flex place-content-start sm:place-content-end">
        <div className="tweeter mr-5">
          <img src="./Group 38552.svg" alt="tweeter" />
        </div>
        <div className="linkdin mr-5">
          <img src="./Linkdin.svg" alt="linkdin" />
        </div>
        <div className="whastaap sm:h-auto">
          <img src="./Group 38548.svg" alt="tweeter" />
        </div>
        </div>
        <p className="mt-6 font-medium text-[14px] sm:text-[16px] text-gray-600">Elara Technology Private Limited</p>
      </div>
      
    </div>
    </div>
    
  )
}

export default Footer2