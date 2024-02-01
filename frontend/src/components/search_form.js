import React from "react";
import "../css/search_form.css";

const Search_form = () => {
    return (
        // <div className="searchForm-cont">
        <form className="search-form">
            <div class="form-row">
                <div className="field">
                    {/* <label htmlFor="location">Location:</label> */}
                    <input type="text" id="location" placeholder="Enter Your City" />
                </div>
                <div className="field">
                    {/* <label htmlFor="type">Type:</label> */}
                    <select id="type">
                        <option value="">Gender</option>
                        <option value="Kids">Kids</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                </div>
                <div className="field">
                    {/* <label htmlFor="category">Category:</label> */}
                    <select id="category">
                        <option value="">Categories</option>
                        <option value="Jenes">Jeans</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Shirts">Shirts</option>
                        <option value="Kurtis">Kurtis</option>
                        <option value="Saree">Saree</option>
                    </select>
                </div>
                <button type="submit">Search Accumulator</button>
            </div>
        </form>
        // </div>
    )
}

export default Search_form;