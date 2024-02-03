import React from "react";
import "../css/search_form.css";

const Search_form = () => {
    return (
        <form className="search-form">
            <div className="form-row">
                <div className="field">
                    <input type="text" id="location" placeholder="Enter Your City" />
                </div>
                <div className="field">
                    <select id="type">
                        <option value="">Gender</option>
                        <option value="Kids">Kids</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                </div>
                <div className="field">
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
    )
}

export default Search_form;