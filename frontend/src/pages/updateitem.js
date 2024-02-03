import React from "react";

const updateItem = () => {
    const [itemDetails, setItemDetails] = useState({
        Product_Name: '',
        Item_Size: '',
        itemCategory: '',
        Item_Category: '',
        Brand_name: '',
        Fabric: '',
        Item_Price: '',
        Item_Quality: '',
        Item_Motive: '',
        itemImage: '',
        Other_Details: '',
    });

    useEffect(() => {
        const fetchItemDetails = async () => {
            var userData = JSON.parse(localStorage.getItem("user")).data.username
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/item/${userData}`); // Replace with your backend endpoint
            console.log(response);
        };

        fetchItemDetails();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setItemDetails({ ...itemDetails, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="Product_Name">Fashion Style:</label>
                <select className="input" onChange={handleChange} value={inputs.Product_Name} id="Product_Name" name="Product_Name" required>
                    <option value="">Select a style</option>
                    <option value="casual">Casual</option>
                    <option value="ethical wear">Ethical Wear</option>
                    <option value="jeans">Jeans</option>
                </select>

                <label className="label" htmlFor="Item_Size">Size:</label>
                <input className="input" onChange={handleChange} value={inputs.Item_Size} type="text" id="Item_Size" name="Item_Size" required />

                <label className="label" htmlFor="itemCategory">Category:</label>
                <input className="input" onChange={handleChange} value={inputs.itemCategory} type="text" id="itemCategory" name="itemCategory" required />

                <label className="label" htmlFor="Item_Category">Gender:</label>
                <select className="input" onChange={handleChange} value={inputs.Item_Category} id="Item_Category" name="Item_Category" required>
                    <option value="">Select a gender</option>
                    <option value="kids">Kids</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
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
                    <option value="brand new">Brand New</option>
                    <option value="old">Old</option>
                    <option value="good">Good</option>
                </select>

                <label className="label" htmlFor="Item_Motive">Motive:</label>
                <select className="input" onChange={handleChange} value={inputs.Item_Motive} id="Item_Motive" name="Item_Motive" required>
                    <option value="">Select a motive</option>
                    <option value="donate">Donate</option>
                    <option value="sell">Sell</option>
                    <option value="recycle">Recycle</option>
                </select>

                <label htmlFor="itemImages">Upload Images:</label>
                <input id="itemImages" filename={file} name="itemImages" type="file" accept=".png, .jpg, .jpeg" onChange={handlePhoto} multiple />

                <label htmlFor="image" />
                <img src="data:image/<%=image.img.contentType%>;base64,<%=image.img.data.toString('base64')%>" />


                <label className="label" htmlFor="Other_Details">Description:</label>
                <textarea className="input" type="text" onChange={handleChange} value={inputs.Other_Details} id="Other_Details" name="Other_Details"></textarea>

                <button type="submit" value="submit">Add Item</button>
            </form>

        </>

    )
};

export default updateItem;