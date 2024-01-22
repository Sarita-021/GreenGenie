import React from "react";

const Search_form = () => {
    return (
        <>
            <form class="search-form">
                <div class="field">
                    <label for="location">Location:</label>
                    <input type="text" id="location" placeholder="Enter City" />
                </div>
                <div class="field">
                    <label for="type">Type:</label>
                    <select id="type">
                        <option value="">Select Type</option>
                        <option value="Kids">Kids</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                </div>
                <div class="field">
                    <label for="category">Category:</label>
                    <select id="category">
                        <option value="">Select Category</option>
                        <option value="Jenes">Jenes</option>
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