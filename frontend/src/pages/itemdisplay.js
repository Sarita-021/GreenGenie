import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/itemdisplay.css"

function ItemDetailsForm() {
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
            var userData = JSON.parse(localStorage.getItem("user")).username
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
        <div className="product_block">
            <nav class="product-filter">
                <div class="sort">
                    <div class="collection-sort">
                        <label>Filter by:</label>
                        <select>
                            <option value="/">All Jackets</option>
                            <option value="/">2016</option>
                            <option value="/">jacket</option>
                            <option value="/">Jackets</option>
                            <option value="/">layers</option>
                            <option value="/">Obermeyer</option>
                            <option value="/">Roxy</option>
                            <option value="/">womens</option>
                        </select>
                    </div>

                    <div class="collection-sort">
                        <label>Sort by:</label>
                        <select>
                            <option value="/">Featured</option>
                            <option value="/">Best Selling</option>
                            <option value="/">Alphabetically, A-Z</option>
                            <option value="/">Alphabetically, Z-A</option>
                            <option value="/">Price, low to high</option>
                            <option value="/">Price, high to low</option>
                            <option value="/">Date, new to old</option>
                            <option value="/">Date, old to new</option>
                        </select>
                    </div>
                </div>
            </nav>
            <div className='products' >
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
                    </div>
                    <div class="product-info">
                        <h5 className='product_title'>Winter Jacket</h5>
                        <h6 className='product_price'>$99.99</h6>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
                    </div>
                    <div class="product-info">
                        <h5 className='product_title'>Winter Jacket</h5>
                        <h6 className='product_price'>$99.99</h6>
                    </div>
                </div>
            </div>


            <div class="Item_outer_container">
                <div class="product_card">
                    <div class="product_image">
                        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
                    </div>
                    <div class="product_info">
                        <h3 className='product_name'>Winter Jacket</h3>
                        <h4 className='product_soldBy'> by <span>Shivam</span></h4>
                        <h4 className='product_price'>Rs 150</h4>
                        <div className='product_info_box'>
                            <h4 className='Product_detail_heading'>Size :</h4>
                            <h4 className='product_details'>XL</h4>
                        </div>
                        <div className='product_info_box'>
                            <h4 className='Product_detail_heading'>Fabric :</h4>
                            <h4 className='product_details'>Polyester</h4>
                        </div>
                        <div className='product_info_box'>
                            <h4 className='Product_detail_heading'>Brand :</h4>
                            <h4 className='product_details'>Lavish</h4>
                        </div>
                        <div className='product_info_box'>
                            <h4 className='Product_detail_heading'>Purpose :</h4>
                            <h4 className='product_details'>Wearable</h4>
                        </div>
                        <div className='product_info_box'>
                            <h4 className='product_desc'>Product is of good condition and is not used </h4>
                        </div>
                        <button className='Buy_button'>BUY NOW</button>
                        <button className='Cart_button'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailsForm;