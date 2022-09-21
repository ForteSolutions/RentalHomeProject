import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditRental = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [owner, setOwner] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [type, setType] = useState("");
    const [errors, setErrors] = useState({});
    const [rentalNotFoundError, setRentalNotFoundError] = useState("");
    const navigate = useNavigate();
    console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/update/${id}`)
            .then((response) => {
                console.log(response.data);
                setTitle(response.data.title);
                setAddress(response.data.address);
                setOwner(response.data.owner);
                setLocation(response.data.location);
                setDescription(response.data.description);
                setImage(response.data.image);
                setCity(response.data.city);
                setState(response.data.state);
                setZipcode(response.data.sipcode);
                setType(response.data.type);
            })
            .catch((err) => {
                console.log(err.response);
                setRentalNotFoundError('Rental not found using that ID');
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios
            .put(`http://localhost:8000/update/${id}`, { title: title, address: address, owner: owner, location: location, description: description, image: image, city: city, state: state, zipcode: zipcode, type: type })
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mx-auto">
                    <h2>Update Rental Home Information</h2>
                    <br/>
                    <form onSubmit={submitHandler}>
                        {rentalNotFoundError ? (
                            <h5>
                                {rentalNotFoundError} <Link to="/create">Click here to add rental</Link>
                            </h5>
                        ) : null}
                        <div className="d-flex justify-content-between w-100">
                            <div className="form-group">
                                <label htmlFor="name">Title: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                                {errors.title ? <p>{errors.title.message}</p> : null}
                                <label htmlFor="type">Street Address: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                                {errors.address ? <p>{errors.address.message}</p> : null}
                                <label htmlFor="description">Owner: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setOwner(e.target.value)}
                                    value={owner}
                                />
                                {errors.owner ? <p>{errors.owner.message}</p> : null}
                                <label htmlFor="name">Location: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setLocation(e.target.value)}
                                    value={location}
                                />
                                {errors.location ? <p>{errors.location.message}</p> : null}
                                <label htmlFor="name">Description: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                />
                                {errors.description ? <p>{errors.description.message}</p> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Image: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setImage(e.target.value)}
                                    value={image}
                                />
                                {errors.image ? <p>{errors.image.message}</p> : null}
                                <label htmlFor="name">City: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                        onChange={(e) => setCity(e.target.value)}
                                    value={city}
                                />
                                {errors.city ? <p>{errors.city.message}</p> : null}
                                <label htmlFor="name">State: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setState(e.target.value)}
                                    value={state}
                                />
                                {errors.state ? <p>{errors.state.message}</p> : null}
                                <label htmlFor="name">Zip Code: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setZipcode(e.target.value)}
                                    value={zipcode}
                                />
                                {errors.zipcode ? <p>{errors.zipcode.message}</p> : null}
                                <label htmlFor="name">Type: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setType(e.target.value)}
                                    value={type}
                                />
                                {errors.type ? <p>{errors.type.message}</p> : null}
                            </div>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-around w-100">
                            <button className="btn btn-primary" type="submit">
                                Update
                            </button>
                            <Link className="btn btn-danger" to="/">
                                    Cancel
                            </Link>
                        </div>
                    </form>
                    <Link to="/view">View Rental</Link>
                </div>
            </div>
        </div>
    );
};

export default EditRental;