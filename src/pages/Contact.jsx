import React, { useState } from "react";
import { useContext } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "./contact.style.css";

export const Contact = () => {
  const [sendedMessage, setSendedMessage] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSendedMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  return (
    <div>
      <div name="contact" className="request-container" id="contact">
        <form
          action="https://formsubmit.co/anisazh08@gmail.com"
          className="request-form"
          method="POST"
        >
          <h1
            className="request-text"
            style={{
              color: "white",
              backgroundColor: "#8d72e1",
              width: "100%",
            }}
          >
            Contact Me
          </h1>
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#8d72e1",
              },
            }}
            name="name"
            label="Name"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.name}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#8d72e1",
              },
            }}
            name="email"
            label="Email"
            type="email"
            color="primary"
            focused
            required
            onChange={onChangeHandler}
            value={sendedMessage.email}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
                input: {
                  color: "#8d72e1",
                },
              },
            }}
            name="message"
            fullWidth
            label="Type your Message"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.message}
          />
          <Button
            type="submit"
            sx={{
              width: 200,
              height: 50,
              backgroundColor: "white",
              color: "#2c343f",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: "white",
                color: "white",
              },
            }}
            variant="contained"
          >
            Send
          </Button>
        </form>
      </div>
      <div className="contact__footer">
        <div className="contact__details">
          <LocalPhoneIcon sx={{ width: 35, height: 35 }} />
          <p>224-857-1677</p>
        </div>
        <div className="contact__details">
          <EmailIcon sx={{ width: 40, height: 40 }} />
          <p>anisazh08@gmail.com</p>
        </div>
        <p>©2023 Alina Zh</p>
      </div>
    </div>
  );
};
