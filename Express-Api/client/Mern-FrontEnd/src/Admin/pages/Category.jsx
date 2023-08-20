import React, { useState, useEffect } from "react";
import axios from "axios";
// import {AiFillAlert, AiFillDelete } from "react-icons/all";

import CategoryModal from "../components/CategoryModal";
import { storage } from "../utils/FirebaseConfig";

export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("/api/get-all-categories")
      .then((json) => setCategory(json.data.category))
      .catch((err) => alert(err.message));
  }, []);

  const deleteProduct = (CategoryName) => { console.log(CategoryName) }
  

  return (
    <div>
      <div className="d-flex justify-content-between">
        <span className="fs-4 fw-bold">Categories</span>
        <CategoryModal />
      </div>

      <div className="tablecontent">
        <table className="table tbl">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {category?.map((val, key) => (
              <tr key={key}>
                <th scope="row">{val._id}</th>
                <td>{val.CategoryName}</td>
                <td>
                  <img
                    src={val.CategoryImage}
                    className="img-fluid"
                    style={{ height: "5vh", objectFit: "contain" }}
                    // alt=""
                    // srcSet=""
                  />
                </td>
                <td>
                  <button className="btn btn-dark mx-1">icon1</button>
                  <button className="btn btn-dark mx-1" onClick={() => deleteProduct(val._id)}>
                    icon2
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
