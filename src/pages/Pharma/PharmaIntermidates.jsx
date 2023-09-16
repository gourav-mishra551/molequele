import React from 'react';
import { Table, Thead, Tbody, Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import { PharmaIntermidatesData } from './data';


const tableHead = {
    name: "Campaign Name",
    parentId: "Campaign Id",
    campaignType: "Type",
    status: "Status",
    channel: "Channel",
    action: "Actions"
  };
const PharmaIntermidates = () => {
    // ========================search bar
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(PharmaIntermidatesData.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        PharmaIntermidatesData
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
    setCollection(cloneDeep(PharmaIntermidatesData.slice(from, to)));
  };

  const tableRows = rowData => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <Td key={i}>{key[keyD]}</Td>;
    });
    return <Tr key={index}>{columnData}</Tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <Td key={index}>{title}</Td>
    ));
  };

  // search bar end =  =========== ====

  return (
    <div className='ml-0 mr-0  relative w-auto'>
                <Table className="responsive-table">
                  <Thead >
                    <Tr className=" bg-[#FBF6FF]  border border-[#E9EFF4] ">{headRow()}</Tr>
                  </Thead>
                  <Tbody className="trhover bg-white">{tableData()}</Tbody>
                </Table>
                <Pagination
                  pageSize={countPerPage}
                  onChange={updatePage}
                  current={currentPage}
                  total={PharmaIntermidatesData.length}
                  style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
                />
              </div>
  )
}

export default PharmaIntermidates