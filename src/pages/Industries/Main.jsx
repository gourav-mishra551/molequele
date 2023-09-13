import "./Industry.css"
import React from 'react';
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import { allData } from "./constants";
import NavBar from '../../components/Navbar/Navbar';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Group from "../../assets/Group13.png";

const tableHead = {
	name: "Campaign Name",
	parentId: "Campaign Id",
	campaignType: "Type",
	status: "Status",
	channel: "Channel",
	action: "Actions"
};
const Main = () => {
	const countPerPage = 10;
	const [value, setValue] = React.useState("");
	const [currentPage, setCurrentPage] = React.useState(1);
	const [collection, setCollection] = React.useState(
		cloneDeep(allData.slice(0, countPerPage))
	);
	const searchData = React.useRef(
		throttle(val => {
			const query = val.toLowerCase();
			setCurrentPage(1);
			const data = cloneDeep(
				allData
					.filter(item => item.name.toLowerCase().indexOf(query) > -1)
					.slice(0, countPerPage)
			);
			setCollection(data);
		}, 400)
	);

	React.useEffect(() => {
		if (!value) {
			updatePage(1);
		} else {
			searchData.current(value);
		}
	}, [value]);

	const updatePage = p => {
		setCurrentPage(p);
		const to = countPerPage * p;
		const from = to - countPerPage;
		setCollection(cloneDeep(allData.slice(from, to)));
	};

	const tableRows = rowData => {
		const { key, index } = rowData;
		const tableCell = Object.keys(tableHead);
		const columnData = tableCell.map((keyD, i) => {
			return <td key={i}>{key[keyD]}</td>;
		});
		return <tr key={index}>{columnData}</tr>;
	};

	const tableData = () => {
		return collection.map((key, index) => tableRows({ key, index }));
	};

	const headRow = () => {
		return Object.values(tableHead).map((title, index) => (
			<td key={index}>{title}</td>
		));
	};


	return (
		<>
			<NavBar />
			<div className='bg-gray-100'>
				<div style={{ backgroundImage: `url(${Group})` }}>
					<h1 className='flex justify-center font-semibold text-[28px] pt-14 ' style={{ lineHeight: "42px" }}>Some heading will come here</h1>
					<p className='flex justify-center font-medium text-[20px] pt-5 pb-8 text-black' style={{ letterSpacingz: "2%" }}>Need text let’s Discuss Get in touch & let us know how we can help Your Project</p>
				</div>
				<ul className=' sm:w-[1133px] w-[414px] h-[38px] ml-5 sm:ml-auto sm:h-[50px] mx-auto flex mt-10 mb-20 overflow-auto sm:overflow-visible'>
					<li className='font-medium text-[15px] sm:text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list text-purple-700 ' style={{ lineHeight: "24px" }}>All Products</li>
					<li className='font-medium text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}> Pharma</li>
					<li className='font-medium text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}> Agro Chemical</li>
					<li className='font-medium text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}>Cosmetic & Personal Care</li>
					<li className='font-medium text-[16px] sm:mr-8 md:mr-14 link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}>Nutrition & Suppliment</li>
					<li className='font-medium text-[16px] link-underline-list link-underline-black-list' style={{ lineHeight: "24px" }}>Plastics & Polymers</li>
				</ul>
				<div className=' ml-[6%] mr-[6%] relative'>

					<div className="search">
						<input
							placeholder="Search Productss....."
							style={{ position:"absolute",left: "0", right: "0",top:"-90px", marginLeft:"auto",marginRight:"auto",marginTop:"20px" , paddingLeft: "20px" }}
							value={value}
							onChange={e => setValue(e.target.value)}
						/>
						<button className="bg-[#8D2ED1] w-[131px] h-[44px] rounded text-white absolute  2xl:right-[11rem] md:right-[-2rem] lg:right-[5rem]  top-[-60px] ">Search</button>
					</div>
					<table>
						<thead className="mt-10">
							<tr className="bg-[#FBF6FF]  border border-[#E9EFF4]">{headRow()}</tr>
						</thead>
						<tbody className="trhover bg-white">{tableData()}</tbody>
					</table>
					<Pagination
						pageSize={countPerPage}
						onChange={updatePage}
						current={currentPage}
						total={allData.length}
						style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
					/>
					
				</div>
				
			<Contact />
			<Footer />
			</div>

		</>
	);
};

export default Main;
