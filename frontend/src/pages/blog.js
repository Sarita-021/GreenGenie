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

  const handleDeleteBlog = async (id) => {
    document.getElementById(`${id}`).remove();
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URI}/blog/delete/${id}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    // create formdata to send to backend
    const formData = new FormData();
    formData.append("title", blogValues.current.title);
    formData.append("content", blogValues.current.content);
    formData.append("image", blogValues.current.image);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URI}/blog/create`,
        formData,
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

  const listblog = (title, image, content, key, id) => {
    return (
      <div className="blog" key={key} id={id}>
        <h3>{title}</h3>
        <div>
          {image && <img src={`${image.path}`} alt="blog image" />}
          <p>{content}</p>
        </div>
        <div className="blogOptions">
          {/* <button className="blogEdit">Edit</button> */}
          <button className="blogDelete" onClick={() => handleDeleteBlog(id)}>
            Delete
          </button>
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
              image: e.target.files[0],
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
            blogs?.map((blog, index) => {
              return listblog(
                blog.title,
                blog.image,
                blog.content,
                index,
                blog._id
              );
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
