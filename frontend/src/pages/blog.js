import React, { useEffect, useRef, useState } from "react";
import "../css/blog.css";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const blogValues = useRef({ title: "", content: "", image: "" });

  const handleGetBlogs = async () => {
    // get all blogs from backend
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URI}/blog/get/all`
      );
      setBlogs(response.data.blogs);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URI}/blog/create`,
        blogValues.current,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const listblog = (title, image, content, key) => {
    return (
      <div className="blog" key={key}>
        <h3>{title}</h3>
        <div>
          {image && <img src={image} alt="blog image" />}
          <p>{content}</p>
        </div>
        <div className="blogOptions">
          {/* <button className="blogEdit">Edit</button> */}
          <button className="blogDelete">Delete</button>
        </div>
        <hr />
      </div>
    );
  };

  useEffect(() => {
    handleGetBlogs();
  }, []);

  return (
    <div className="blogPage">
      <form className="blog-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => {
            blogValues.current = {
              ...blogValues.current,
              title: e.target.value,
            };
          }}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          onChange={(e) => {
            blogValues.current = {
              ...blogValues.current,
              content: e.target.value,
            };
          }}
        />
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(e) => {
            blogValues.current = {
              ...blogValues.current,
              image: e.target.value,
            };
          }}
        />
        <button type="submit" onClick={(e) => handleCreateBlog(e)}>
          Create Blog
        </button>
      </form>

      <div className="seperator">
        <h2>Recent Blogs</h2>
        <hr />
      </div>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="blogs">
          {blogs?.length !== 0 ? (
            blogs?.map((blog) => {
              return listblog(blog.title, blog.image, blog.content, blog._id);
            })
          ) : (
            <h2>No Blogs</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
