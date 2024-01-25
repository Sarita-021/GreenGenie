import React from "react";
import "../css/search_form.css";

const Search_form = () => {
    return (
        <>
            <form className="search-form">
                <div className="field">
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" placeholder="Enter City" />
                </div>
                <div className="field">
                    <label htmlFor="type">Type:</label>
                    <select id="type">
                        <option value="">Select Type</option>
                        <option value="Kids">Kids</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="category">Category:</label>
                    <select id="category">
                        <option value="">Select Category</option>
                        <option value="Jenes">Jeans</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Shirts">Shirts</option>
                        <option value="Kurtis">Kurtis</option>
                        <option value="Saree">Saree</option>
                    </select>
                </div>
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default Search_form;