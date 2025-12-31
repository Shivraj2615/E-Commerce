import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AdminForm.css";

export default function EditBookPage() {
  const { id } = useParams();
  const formObj = {
    title: "",
    author: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  };
  const [formData, setFormData] = useState(formObj);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/books/${id}`, {});
        // console.log(res.data);
        setFormData({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
          price: res.data.price,
          quantity: res.data.quantity,
          image: res.data.image,
        });
      } catch (error) {
        console.error(error);
        toast.error("Some Error Occurred");
      }
    };
    fetchBook();
  }, [id]);

  //Handle all field change using single state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/books/${id}`, formData);
      toast.success("Book updated successfully");
      navigate("/admin/books");
      // console.log(res.data);
      setFormData(formObj);
    } catch (error) {
      console.error(error);
      toast.error("Some Error Occurred");
    }
  };

  return (
    <div className="admin-form-container">
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2>Edit Book</h2>
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

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
