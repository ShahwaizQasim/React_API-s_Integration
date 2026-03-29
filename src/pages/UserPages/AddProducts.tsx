// import React, { useRef } from "react";

import axios from "axios";
import { useState } from "react";
import { PrivateVariables } from "../../config/PrivateVariable";
import { getToken } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";

const AddProducts = () => {
  //   const imgRef: any = useRef(null);
  //   const ProductImageUpload = () => {
  //     imgRef?.current?.click();
  //   };
  const [formData, setFormData] = useState({
    ProductName: "",
    ProductPrice: "",
    ProductDescription: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = getToken();
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e?.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imagewUrl = URL.createObjectURL(file);
      setPreview(imagewUrl as any);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formDataPayload = new FormData();
      formDataPayload.append("ProductName", formData.ProductName);
      formDataPayload.append("ProductPrice", formData.ProductPrice);
      formDataPayload.append("description", formData.ProductDescription);
      if (image) {
        formDataPayload.append("ProductPicture", image as any);
      }
      console.log("api payload+++++++++", formDataPayload);

      const res = await axios.post(
        `${PrivateVariables.Api_Url}api/add/product`,
        formDataPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      navigate(ROUTES.PRODUCTS);
      setFormData({
        ProductName: "",
        ProductPrice: "",
        ProductDescription: "",
      });
      setImage(null);
      setPreview(null);
      console.log("api response+++++++++", res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex justify-center gap-4 flex-col items-center">
      <h1 className="text-3xl font-semibold mb-2">Add Products</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="ProductName"
          value={formData.ProductName}
          onChange={handleInputChange}
          className="border border-gray-400 p-3"
          placeholder="Enter Product Name"
        />
        <input
          type="text"
          name="ProductPrice"
          value={formData.ProductPrice}
          onChange={handleInputChange}
          className="border border-gray-400 p-3"
          placeholder="Enter Product Price"
        />
        <textarea
          name="ProductDescription"
          value={formData.ProductDescription}
          onChange={handleInputChange}
          className="border p-3 border-gray-400"
          placeholder="Enter Product Description"
        />
        <label htmlFor="product"> Product Picture</label>
        <input
          type="file"
          id="product"
          onChange={handleChange}
          placeholder="Select Product Picture"
          className="relative bottom-2"
        />
        {preview && <img src={preview} alt="preview" width="100" />}
        {/* <button onClick={ProductImageUpload}>Product Image Upload</button>
        <input type="file" className="hidden" ref={imgRef} /> */}
        <button
          type="submit"
          className="border border-gray-400 p-3 transform hover:scale-95 transition active:scale-95"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
