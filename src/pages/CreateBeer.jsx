import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";

function CreateBeer() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    Description: "",
    firstBrewed: "",
    tips: "",
    attenuation: "",
    contributed: "",
  });
  const [done, setDone] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: form.name,
        tagline: form.tagline,
        Description: form.description,
        firstBrewed: form.first_brewed,
        tips: form.brewers_tips,
        attenuation: form.attenuation_level,
        contibuited: form.contributed_by,
      })
      .then((result) => {
        setDone(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="w-50 mx-auto mt-5">
        {done && (
          <div className="alert alert-success" role="alert">
            Beer Created Successfully!!
          </div>
        )}
        <form onSubmit={submitHandler}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="image"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingTitle"
              placeholder="title"
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
            />
            <label htmlFor="floatingTitle">Tagline</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingTitle"
              placeholder="title"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, Description: e.target.value })
              }
            />
            <label htmlFor="floatingTitle">Description</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingTitle"
              placeholder="title"
              value={form.first_brewed}
              onChange={(e) =>
                setForm({ ...form, firstBrewed: e.target.value })
              }
            />
            <label htmlFor="floatingTitle">First Brewed</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingTitle"
              placeholder="title"
              value={form.brewers_tips}
              onChange={(e) => setForm({ ...form, tips: e.target.value })}
            />
            <label htmlFor="floatingTitle">Tips</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingPrice"
              placeholder="price per day"
              value={form.attenuation_level}
              onChange={(e) =>
                setForm({ ...form, attenuation: e.target.value })
              }
            />
            <label htmlFor="floatingPrice">Attenuation</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPrice"
              placeholder="price per day"
              value={form.contributed_by}
              onChange={(e) =>
                setForm({ ...form, contibuited: e.target.value })
              }
            />
            <label htmlFor="floatingPrice">Contributed</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Beer
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateBeer;
