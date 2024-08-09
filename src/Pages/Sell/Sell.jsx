// import React from 'react'
// import { Link } from "react-router-dom";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import Navbar from '../../components/Navbar'

// const Sell = () => {
//   return (
//     <>
//       <Navbar />
//       <Card />
//     <section className="sell">
//         <div className="container">
//           <Link to={"/"}>
//             Back to Home{" "}
//             <span>
//               <HiOutlineArrowNarrowRight />
//             </span>
//           </Link>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Sell


import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation (optional, add your validation logic here)
    if (!name || !image || !heading || !description || !phoneNumber || !price) {
      alert('Please fill out all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('heading', heading);
    formData.append('description', description);
    formData.append('phoneNumber', phoneNumber);
    formData.append('price', price);

    // Handle form submission (e.g., send data to server)
    fetch('/submit-form', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submission successful:', data);
        // Handle successful submission (e.g., clear form, show success message)
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        // Handle submission errors (e.g., show error message)
      });
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          required
        />
        {image && <img src={image} alt="Preview" className="image-preview" />}
      </div>
      <div className="form-group">
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel" // Use "tel" for phone number input
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number" // Use "number" for price input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;