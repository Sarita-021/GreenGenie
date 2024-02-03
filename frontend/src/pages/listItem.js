import React, { useState, useEffect } from "react";
import "../css/listItem.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ImagesGallery from '../components/ImagesGallery';


const AddItem = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("Username", JSON.parse(localStorage.getItem("user")).username);
            formData.append("fullname", JSON.parse(localStorage.getItem("user")).fullname);
            formData.append("Product_Name", inputs.Product_Name);
            formData.append("Item_Size", inputs.Item_Size);
            formData.append("Item_Category", inputs.Item_Category);
            formData.append("Brand_name", inputs.Brand_name);
            formData.append("Fabric", inputs.Fabric);
            formData.append("Item_Price", inputs.Item_Price);
            formData.append("Item_Quality", inputs.Item_Quality);
            formData.append("Item_Motive", inputs.Item_Motive);
            formData.append("itemDesciption", inputs.Other_Details);
            // formData.append("itemImages", file);
            // console.log(formData.itemImages)
            // console.log(file)
            for (const key of Object.keys(file)) {
                formData.append('images', file[key])
            }
            const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URI}/item/addItem`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }
                // 
            );
            if (data.success) {
                alert("item added successfully");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
            console.log(error.response.data.message);
        }
    }
    useEffect(() => {
        const data = localStorage.getItem("user");
        console.log(" i am here")
    }, []);
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        Product_Name: '',
        Item_Size: '',
        Item_Category: '',
        Brand_name: '',
        Fabric: '',
        Item_Price: '',
        Item_Quality: '',
        Item_Motive: '',
        Other_Details: ''
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const [file, setFile] = useState([])
    const handlePhoto = (e) => {
        console.log(e.target.files);
        setFile((prevState) => ([...prevState, URL.createObjectURL(e.target.files[0])]))
    }


    return (
        <div className="listitem">
            <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="Product_Name">Fashion Style:</label>
                <input className="input" onChange={handleChange} value={inputs.Product_Name} id="Product_Name" name="Product_Name" required>
                </input>

                <label className="label" htmlFor="Item_Size">Size:</label>
                <input className="input" onChange={handleChange} value={inputs.Item_Size} type="text" id="Item_Size" name="Item_Size" required />

                <label className="label" htmlFor="Item_Category">Gender:</label>
                <select className="input" onChange={handleChange} value={inputs.Item_Category} id="Item_Category" name="Item_Category" required>
                    <option value="">Select a gender</option>
                    <option value="Kid's">Kid's</option>
                    <option value="Men's">Men's</option>
                    <option value="Womens">Women's</option>
                </select>

                <label className="label" htmlFor="Brand_name">Brand:</label>
                <input className="input" onChange={handleChange} value={inputs.Brand_name} type="text" id="Brand_name" name="Brand_name" required />

                <label className="label" htmlFor="Fabric">Fabric:</label>
                <input className="input" onChange={handleChange} value={inputs.Fabric} type="text" id="Fabric" name="Fabric" required />

                <label className="label" htmlFor="Item_Price">Price Range:</label>
                <input className="input" onChange={handleChange} value={inputs.Item_Price} type="text" id="Item_Price" name="Item_Price" required />

                <label className="label" htmlFor="Item_Quality">Quality:</label>
                <select className="input" onChange={handleChange} value={inputs.Item_Quality} id="Item_Quality" name="Item_Quality" required>
                    <option value="">Select quality</option>
                    <option value="Brand New">Brand New</option>
                    <option value="Old">Old</option>
                    <option value="Good">Good</option>
                </select>

                <label className="label" htmlFor="Item_Motive">Motive:</label>
                <select className="input" onChange={handleChange} value={inputs.Item_Motive} id="Item_Motive" name="Item_Motive" required>
                    <option value="">Select a motive</option>
                    <option value="Donate">Donate</option>
                    <option value="Sell">Sell</option>
                    <option value="Recycle">Recycle</option>
                </select>

                <label htmlFor="itemImages">Upload Images:</label>
                <input id="itemImages" filename={file} name="itemImages" type="file" accept=".png, .jpg, .jpeg" onChange={handlePhoto} multiple />
                {/* 
                <label htmlFor="image" />
                <img src={file} /> */}

                <ImagesGallery images={file} />


                <label className="label" htmlFor="Other_Details">Description:</label>
                <textarea className="input" type="text" onChange={handleChange} value={inputs.Other_Details} id="Other_Details" name="Other_Details"></textarea>

                <button type="submit" value="submit">Add Item</button>
            </form>

        </div>
    )
}

export default AddItem;