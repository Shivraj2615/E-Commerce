import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./AdminForm.css";

export default function AddBookPage() {
  const navigate = useNavigate();
  const formObj = {
    title: "",
    author: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  };
  const [formData, setFormData] = useState(formObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/books", formData);
      toast.success("Book Added Successfully");
      // console.log(res.data);
      setFormData(formObj);
      navigate("/admin/books");
    } catch (error) {
      console.error(error);
      toast.error("Some Error Occurred");
    }
  };

  return (
    <div className="admin-form-container">
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>Add Book</h2>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
