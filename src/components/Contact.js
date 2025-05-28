import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Section = styled.section`
  padding: 2rem;
  background-color: #111;
  color: white;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2rem auto;
  gap: 1rem;

  @media (max-width: 480px) {
    max-width: 90%;
    margin: 1rem auto;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background-color: #666;
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mrxtwej",
        "template_0vljrfo",
        {
          name: form.name,
          email: form.email,
          title: form.title,
          message: form.message,
        },
        "wwz_SJ4E_jfG3vYsC"
      )
      .then(() => {
        alert("Message sent!");
        setForm({ name: "", email: "", title: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Error sending message. Please try again.");
      });
  };

  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Subject"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <TextArea
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>

      <IconRow>
        <a href="mailto:sreejeshsj01@gmail.com" target="_blank" rel="noreferrer">
          <Mail color="white" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/sreejesh-a-0a4665239"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin color="white" size={24} />
        </a>
        <a
          href="https://github.com/sreejeshsj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color="white" size={24} />
        </a>
        <a
          href="https://www.instagram.com/s.r.e.e.j.e.s.h_sj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram color="white" size={24} />
        </a>
        <a
          href="https://leetcode.com/u/SREEJESH_A/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            style={{ width: 24, height: 24, filter: 'invert(1)' }}
          />
        </a>
      </IconRow>
    </Section>
  );
};

export default Contact;
