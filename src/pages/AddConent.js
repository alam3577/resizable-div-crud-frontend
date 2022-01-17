import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContent } from "../store/actions/dispatcher";

function AddContent() {
  const [detail, setDetail] = useState({
    name: "",
    desc: "",
    img: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, desc, img } = detail;
  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !desc || !img) {
      alert("Fill details carefully");
    } else {
      dispatch(addContent(detail));
      setDetail({
        name: "",
        desc: "",
        img: "",
      });
      navigate("/");
    }
  };
  return (
    <>
      <div className="hd ">
        <h3>Add Content</h3>
        <form>
          <input
            className="form-control mt-2 mb-4 "
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={(e) => handleChange(e)}
            value={name}
          />
          <input
            className="form-control  mb-4"
            type="text"
            name="img"
            placeholder="Enter img url"
            onChange={(e) => handleChange(e)}
            value={img}
          />
          <textarea
            className="form-control  mb-4"
            type="text"
            name="desc"
            placeholder="Enter desc"
            onChange={(e) => handleChange(e)}
            value={desc}
          />

          <button onClick={onSubmit} className="btn btn-outline-success">
            Add Content
          </button>
        </form>
      </div>
    </>
  );
}

export default AddContent;
