import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// API Model
const api = axios.create({
  baseURL: `https://ministries.obicbusiness.com/api/v1/app/ministries?api_pass_key=api_pass_key`,
  headers: {
    'api_pass_key': "OzVWJLxQtxf4tOalF",
  },
});

const fetchMinistries = async (page) => {
  try {
    const response = await api.get(`?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const TableWithPagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMinistries(currentPage);
        setData(response.result);
        setTotalPages(Math.ceil(response.meta.total / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentPage]);

  // View
  
  const TableView = () => (
    
    <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item) => (
            <tr key={item.ministry_id}>
              <td>{item.ministry_id}</td>
              <td>{item.ministry_name}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  // Controller
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return <TableView />;
};

export default TableWithPagination;
