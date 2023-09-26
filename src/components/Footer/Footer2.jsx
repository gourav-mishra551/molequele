

const Footer2 = () => {
  return (
    <div className="bg-purple-50 pt-1 sm:pl-0 pl-5">
      
      <img className="sm:block hidden p-10  sm:ml-auto xl:mr-[3.6em] 2xl:mr-[7.6em]" src="./Group 48702.svg" alt="logo" />
      <hr className="border border-[#e2c3f8] sm:block hidden sm:max-w-[100%-40px] sm:w-[1199px] m-auto w-[375px] max-w-[100%-40px]" />
     
      <div className="flex flex-col justify-between pb-20  bg-purple-50   sm:max-w-[100%-40px] sm:w-[1199px] m-auto w-[375px] max-w-[100%-40px]  sm:flex sm:flex-row ">
        <div className="w-auto ">

          <div className="flex flex-start ">
            <div className="grid grid-cols-4 text-[14px] sm:text-[16px]  sm:grid-cols-4 mt-10 sm:mt-10 font-medium leading-7 text-gray-400 ">
              <div>Home</div>
              <div>About</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </div>
          <div className="flex flex-col text-[14px] sm:text-[16px]  sm:max-w-[100%] sm:flex-row sm:flex  mt-8 font-medium text-gray-400">
            <div className="flex mr-8">
              <div className="mr-8"  >Pharma</div>
              <div >Agrochemicals</div>
            </div>
            <div className="flex mt-8 sm:mt-0 w-full">
              <div >Personal Care</div>
              <div className=" sm:ml-8 ml-5 sm:mt-0">Nutritional Suppliments</div>
            </div>
            
          </div>
        </div>

        {/* =====================-right-=============== */}

        <div className="right mt-8 flex justify-start flex-col">
          <div className="socioicon flex sm:flex place-content-start sm:place-content-end">
            <div className="tweeter mr-5">
              <img src="./Group 38552.svg" alt="tweeter" />
            </div>
            <a href="https://www.linkedin.com/company/molequle/" className="linkdin mr-5" target="_blank" rel="noreferrer">
              <img src="./Linkdin.svg" alt="linkdin" />
            </a>
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