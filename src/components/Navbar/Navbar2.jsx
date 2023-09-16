import "./navbar2.css"
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">Logo</a>
        </div>
        <input type="radio" name="slide" id="menu_btn" />
        <input type="radio" name="slide" id="cancel_btn" />
        <ul className="nav_links ml-32">
          <label for="cancel_btn" className="btn cancel_btn">
            <i className="fas fa-times"></i>
          </label>
          
          <li>
            <a href="#" className="desktop_item">Mega Menu</a>
            <input type="checkbox" id="showMega" />
            <div className="mega_box">
              <div className="content">

                <div className="row img_row">
                  <div className="w-60 h-auto  mt-10 hidden sm:block">
                    <div className="flex flex-col">
                      <div className="flex">
                        <p className="font-semibold text-lg ">
                          <Link to='/industry'>Industries</Link>
                        </p>
                        <button className="rounded-full bg-green-100 p-2 drop-shadow-sm my-auto text-xs text-green-700 ml-2">PREMIUM</button>
                      </div>
                      <p className="text-gray-500 leading-5 text-sm font-normal w-full mt-3 ">Demo Description non deserunt ullamco est sit aliqua amet sint. </p>
                    </div>
                    <button className="mt-10 float-left ml-2 font-medium text-xl">All Products</button>
                  </div>
                </div>

                <div className="row grid-cols-1 gap-10 p-8">
                  <ul className="mega_links first_links w-[443px] h-[287px]">
                    <li className="flex h-[91px]">
                      <a className="flex">
                        <img className="h-[64px]" src=".\Group 1000003216.svg " alt="first" />
                        <div className="flex flex-col ml-4">
                          <h1 className=" font-medium leading-none text-lg">Pharma</h1>
                          <p className=" mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </a>
                    </li>
                    <li><a className="flex h-[91px]" href="/industry">
                      <span className="flex-shrink-0">
                        <img src=".\Group 1000003216.svg " alt="second" />
                      </span>
                      <div className="flex flex-col ml-4">
                        <span className="text-left font-medium leading-none text-lg">Cosmetics & Personal Care</span>
                        <span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      </div>
                    </a>
                    </li>
                    <li><a className="flex h-[91px]" href="/industry">
                      <span className="flex-shrink-0 ">
                        <img src=".\Group 1000003217.svg " alt="third" />
                      </span>
                      <div className="flex flex-col ml-4">
                        <span className="text-left font-medium leading-none text-lg">Plastics & Polymers</span>
                        <span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.</span>
                      </div>
                    </a></li>
                  </ul>
                </div>

                {/*====================== second row =================*/}

                <div className="row  grid-cols-1 gap-10 p-8">
                  <ul className="mega_links w-[443px] h-[287px] ">
                    <li>	<a className="flex h-[91px]" >
                      <span className="flex-shrink-0">
                        <img src=".\Group 1000003218.svg " alt="Fourth" />
                      </span>
                      <div className="flex flex-col ml-4">
                        <span className="text-left font-medium leading-none text-lg">Agro Chemicals</span>
                        <span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.</span>
                      </div>
                    </a></li>
                    <li className="h-[91px]">
                      <a className="flex" href="/indusrty">
                        <span className="flex-shrink-0 ">
                          <img src=".\Group 1000003218.svg " alt="fifth" />
                        </span>
                        <div className="flex flex-col ml-4">
                          <span className="text-left font-medium leading-none texxt-lg">Nutrition & Supplements</span>
                          <span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                      </a>
                    </li>
                    <li className="h-[91px]">
                      <a className="flex" href="#">
                        <span className="flex-shrink-0 ">
                          <img src=".\Group 1000003220.svg " alt="six" />
                        </span>
                        <div className="flex flex-col ml-4">
                          <span className="text-left font-medium  leading-none text-lg">Adhesives & Sealants</span>
                          <span className="text-left mt-1 text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <label for="menu_btn" className="btn menu_btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  )
}

export default Navbar2