import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { useState, useEffect } from "react";
import { ApplicationViews } from "./views/ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./FilmToFridge.css"
import { UserHomePage } from "./UserPages/UserHomePage";

export const FilmToFridge = () => {
	const [products, setProducts] = useState([])	
	
	// useEffect(() => {
  //   fetch(`http://localhost:8088/products?_expand=productType`)
  //     .then((response) => response.json())
  //     .then((productArray) => {
  //       setProducts(productArray);
  //     });
  // }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <>
              <NavBar />
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
};