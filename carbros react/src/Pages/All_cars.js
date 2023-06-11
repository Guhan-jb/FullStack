import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Allcars() {
  const baseURL = "http://localhost:8080/api/Vehicles";
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchCars();
  }, [currentPage, pageSize]);

  const fetchCars = () => {
    axios.get(`${baseURL}/pagingVehicles/${currentPage}/${pageSize}`)
      .then((response) => {
        setCars(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching cars", error);
      });
  };
  const goToPreviousPage = () => {
    if (currentPage >0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <table className="table table-bordered">
        {/* Table headers */}
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Launch Date</th>
            <th>Price</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {cars.map((obj) => (
            <tr key={obj.vehicleid}>
              <td>{obj.vehicleid}</td>
              <td>{obj.model}</td>
              <td>{obj.manufacturer}</td>
              <td>{obj.launch_date}</td>
              <td>{obj.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-buttons">
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          Previous Page
        </button>
        <button onClick={goToNextPage}>Next Page</button>
      </div>
    </>
  );
}

export default Allcars;
