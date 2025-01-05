import { useState } from "react";
import { db } from "../firebase-config"; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import Button from "./Button";
import TitleDisplay from "./TitleDisplay";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save message to Firestore
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        title: formData.title,
        message: formData.message,
        timestamp: new Date(),
      });

      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", title: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <div className="mt-20 ">
        <div className="w-full p-10 flex justify-center items-center">
        <h1 className="text-white text-4xl font-firacode font-bold">
            Contact Me
        </h1>
        </div>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white w-1/2 mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <input
          className="p-2 bg-inherit border border-gray"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="p-2 bg-inherit border border-gray"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          className="w-full p-2 bg-inherit border border-gray"
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          className="w-full p-2 h-40 bg-inherit border border-gray"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <Button type="submit" text="Send" />
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
