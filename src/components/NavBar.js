import React from "react";
import { Box, AppBar, Toolbar, Typography, Button, Menu } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const NavBar = () => {
  return (
    <Box>
      <AppBar sx={{ m: "5px" }} position="static">
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            {"</sumancoding>"}
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
