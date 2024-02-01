import React from "react";

const updateItem = () => {
    const [itemDetails, setItemDetails] = useState({
        itemFashion: '',
        itemSize: '',
        itemCategory: '',
        itemGender: '',
        itemBrand: '',
        itemFabric: '',
        itemPriceRange: '',
        itemQuality: '',
        itemMotive: '',
        itemImage: '',
        itemDescription: '',
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
                <label className="label" htmlFor="itemFashion">Fashion Style:</label>
                <select className="input" onChange={handleChange} value={inputs.itemFashion} id="itemFashion" name="itemFashion" required>
                    <option value="">Select a style</option>
                    <option value="casual">Casual</option>
                    <option value="ethical wear">Ethical Wear</option>
                    <option value="jeans">Jeans</option>
                </select>

                <label className="label" htmlFor="itemSize">Size:</label>
                <input className="input" onChange={handleChange} value={inputs.itemSize} type="text" id="itemSize" name="itemSize" required />

                <label className="label" htmlFor="itemCategory">Category:</label>
                <input className="input" onChange={handleChange} value={inputs.itemCategory} type="text" id="itemCategory" name="itemCategory" required />

                <label className="label" htmlFor="itemGender">Gender:</label>
                <select className="input" onChange={handleChange} value={inputs.itemGender} id="itemGender" name="itemGender" required>
                    <option value="">Select a gender</option>
                    <option value="kids">Kids</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                </select>

                <label className="label" htmlFor="itemBrand">Brand:</label>
                <input className="input" onChange={handleChange} value={inputs.itemBrand} type="text" id="itemBrand" name="itemBrand" required />

                <label className="label" htmlFor="itemFabric">Fabric:</label>
                <input className="input" onChange={handleChange} value={inputs.itemFabric} type="text" id="itemFabric" name="itemFabric" required />

                <label className="label" htmlFor="itemPriceRange">Price Range:</label>
                <input className="input" onChange={handleChange} value={inputs.itemPriceRange} type="text" id="itemPriceRange" name="itemPriceRange" required />

                <label className="label" htmlFor="itemQuality">Quality:</label>
                <select className="input" onChange={handleChange} value={inputs.itemQuality} id="itemQuality" name="itemQuality" required>
                    <option value="">Select quality</option>
                    <option value="brand new">Brand New</option>
                    <option value="old">Old</option>
                    <option value="good">Good</option>
                </select>

                <label className="label" htmlFor="itemMotive">Motive:</label>
                <select className="input" onChange={handleChange} value={inputs.itemMotive} id="itemMotive" name="itemMotive" required>
                    <option value="">Select a motive</option>
                    <option value="donate">Donate</option>
                    <option value="sell">Sell</option>
                    <option value="recycle">Recycle</option>
                </select>

                <label htmlFor="itemImages">Upload Images:</label>
                <input id="itemImages" filename={file} name="itemImages" type="file" accept=".png, .jpg, .jpeg" onChange={handlePhoto} multiple />

                <label htmlFor="image" />
                <img src="data:image/<%=image.img.contentType%>;base64,<%=image.img.data.toString('base64')%>" />


                <label className="label" htmlFor="itemDescription">Description:</label>
                <textarea className="input" type="text" onChange={handleChange} value={inputs.itemDescription} id="itemDescription" name="itemDescription"></textarea>

                <button type="submit" value="submit">Add Item</button>
            </form>

        </>

    )
};

export default updateItem;