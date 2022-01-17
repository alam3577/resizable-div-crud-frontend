import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadContentsById, updateContent } from "../store/actions/dispatcher";
function EditContent() {
  const { contentId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContentsById(contentId));
  }, []);
  const { content } = useSelector((state) => state.content);
  const [detail, setDetail] = useState({
    name: content.name,
    desc: content.desc,
    img: content.img,
  });
  const { name, desc, img } = detail;

  const navigate = useNavigate();

  const handleChange = (event) => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !desc || !img) {
      alert("Update details carefully");
    } else {
      dispatch(updateContent(detail));
      setDetail({
        name: "",
        desc: "",
        img: "",
      });
      navigate("/");
    }
  };
  return (
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
  );
}

export default EditContent;
