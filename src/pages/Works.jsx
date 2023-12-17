import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MoviesDom from "../assets/moviesdom.jpg";
import DeliveryForm from "../assets/deliveryform.jpg";
import CarDealer from "../assets/cardealer.jpg";
import Daycare from "../assets/daycare.png";
import MoviesData from "../assets/moviesdata.png";
import Shop from "../assets/shop.png";
import styles from "./Works.module.css";

export const Works = () => {
  return (
    <div name="works">
      <h1 className={styles.header}>Projects</h1>
      <div className={styles.projects}>
        <a
          href="https://movies-database-tomek.netlify.app/"
          className={styles.projects__card}
        >
          <Card
            sx={{
              maxWidth: 300,
              minWidth: 300,
              maxHeight: 360,
            }}
          >
            <CardMedia
              sx={{ height: 240 }}
              image={MoviesData}
              title="movies database"
            />
            <CardContent
              sx={{ minHeight: 150, height: 150, backgroundColor: "white" }}
            >
              <h4 className={styles.projects__header}>Movies Database</h4>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ backgroundColor: "white" }}
              >
                App with search function from OpenImdb database.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://moviestomek.netlify.app/"
          className={styles.projects__card}
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={MoviesDom}
              title="movies dom"
            />
            <CardContent
              sx={{ minHeight: 150, height: 150, backgroundColor: "white" }}
            >
              <h4 className={styles.projects__header}>Car Dealership</h4>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ backgroundColor: "white" }}
              >
                Js dom creates movie tile and modal from object data.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://helenlucydaycare.netlify.app/"
          className={styles.projects__card}
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia sx={{ height: 240 }} image={Daycare} title="daycare" />
            <CardContent
              sx={{ minHeight: 150, height: 150, backgroundColor: "white" }}
            >
              <h4 className={styles.projects__header}>Helen Lucy Daycare</h4>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ backgroundColor: "white" }}
              >
                Website for a daycare located in Chicago.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://myperfectstore.netlify.app/"
          className={styles.projects__card}
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia sx={{ height: 240 }} image={Shop} title="online store" />
            <CardContent
              sx={{ minHeight: 150, height: 150, backgroundColor: "white" }}
            >
              <h4 className={styles.projects__header}>Online Store</h4>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ backgroundColor: "white" }}
              >
                Explore a fully functional and visually captivating online store
                powered by JavaScript, React, CSS, and HTML.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://www.figma.com/proto/TL4ZW14DDKjvK8ozSb7A4s/DEALERSHIP?embed_host=share&kind=&node-id=5-20557&page-id=0%3A1&scaling=scale-down&starting-point-node-id=5%3A20557&type=design&viewport=543%2C361%2C0.33"
          className={styles.projects__card}
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={CarDealer}
              title="car dealership"
            />
            <CardContent
              sx={{ minHeight: 150, height: 150, backgroundColor: "white" }}
            >
              <h4 className={styles.projects__header}>Movies Database</h4>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ backgroundColor: "white" }}
              >
                Figma project of car dealership mobile website.
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a
          href="https://mui-todo-tomek.netlify.app/"
          className={styles.projects__card}
        >
          <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 360 }}>
            <CardMedia sx={{ height: 240 }} image={DeliveryForm} title="form" />
            <CardContent
              sx={{ minHeight: 150, height: 150, backgroundColor: "white" }}
            >
              <h4 className={styles.projects__header}>Delievery Form</h4>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ backgroundColor: "white" }}
              >
                App stores user input in an object. Fancy signature included.
              </Typography>
            </CardContent>
          </Card>
        </a>
      </div>
    </div>
  );
};
