import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div className="item-details-box">
            <div class="container">
                <div class="imgBx">
                    <img src="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true" alt="Nike Jordan Proto-Lyte Image" />
                </div>
                <div class="details">
                    <div class="content">
                        <h2>Jordan Proto-Lyte <br />
                            <span>Running Collection</span>
                        </h2>
                        <p>
                            Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
                            made for all-day, bouncy comfort.
                            Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
                            breathable support.
                            Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
                            Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.
                        </p>
                        <p class="product-colors">Available Colors:
                            <span class="black active" data-color-primary="#000" data-color-sec="#212121" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"></span>
                            <span class="red" data-color-primary="#7E021C" data-color-sec="#bd072d" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"></span>
                            <span class="orange" data-color-primary="#CE5B39" data-color-sec="#F18557" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"></span>
                        </p>
                        <h3>Rs. 12,800</h3>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default ItemDetailsForm;