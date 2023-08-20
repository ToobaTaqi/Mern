import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../utils/FirebaseConfig";

export default function CategoryModal() {
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState("");
  const [CategoryImage, setCategoryImage] = useState(null);

  // Show the modal
  const handleShow = () => setShow(true);
  // Close the modal
  const handleClose = () => setShow(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storageRef = ref(storage, `images/${CategoryImage.name}`);
      await uploadBytes(storageRef, CategoryImage);

      const downloadURL = await getDownloadURL(storageRef);

      const payload = {
        CategoryName,
        CategoryImage: downloadURL,
      };

      console.log("Category payload:", payload);

      // Close the modal after successful submission
      handleClose();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div>
      <Button className="butn" onClick={handleShow}>
        Add category
      </Button>

      <Modal
        className="modall"
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Category Name
              </label>
              <input
                value={CategoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Category Image
              </label>
              <input
                className="form-control"
                onChange={(e) => setCategoryImage(e.target.files[0])}
                type="file"
                id="formFile"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="butn w-100">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
