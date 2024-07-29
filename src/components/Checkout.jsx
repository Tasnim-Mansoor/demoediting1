import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Checkout = () => {
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/users`,
  });

  const getDataHandler = () => {
    api
      .get("/")
      .then((response) => setRows(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    AOS.init();
    getDataHandler();
  }, []);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(rows.length / rowsPerPage))
    );
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedRows = rows.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Container fluid className="mt-5 mb-5">
      <Row>
        <Col lg={12}>
          <h1
            style={{
              fontWeight: "bold",
              fontFamily: '"Anek Malayalam", sans-serif',
              fontSize: "45px",
            }}
            className="display-4 text-center mb-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Our Customer
          </h1>
          <Table
            striped
            bordered
            hover
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {selectedRows.map((row, index) => (
                <tr
                  key={row.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#d8e6f0" : "#182641",
                    color: "white",
                  }}
                >
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.username}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.website}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center mt-4">
            <Button
              variant="dark"
              onClick={handlePrevious}
              className="mx-2"
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {[...Array(Math.ceil(rows.length / rowsPerPage)).keys()].map(
              (number) => (
                <Button
                  key={number + 1}
                  variant="dark"
                  onClick={() => handlePagination(number + 1)}
                  className="mx-2"
                  active={currentPage === number + 1}
                >
                  {number + 1}
                </Button>
              )
            )}
            <Button
              variant="dark"
              onClick={handleNext}
              className="mx-2"
              disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
