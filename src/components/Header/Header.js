import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <ShoppingBasketIcon fontSize="large" />
          <Typography
            onClick={() => navigate("/products")}
            variant="h5"
            fontWeight={600}
            sx={{ ml: 1, cursor: "pointer" }}
          >
            Cartmate
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
