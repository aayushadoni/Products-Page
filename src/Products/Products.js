import React, { useState } from "react";
import "./Product.css";

const Products = ({ result }) => {
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(result.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="products-container">
      <section className="card-container">
        {currentItems}
      </section>

      <div className="pagination-container">
        <ul className="pagination">
          <li onClick={prevPage}>Previous</li>
          {Array(Math.ceil(result.length / itemsPerPage))
            .fill()
            .map((_, i) => (
              <li
                key={i}
                className={i + 1 === currentPage ? "active" : ""}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </li>
            ))}
          <li onClick={nextPage}>Next</li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
