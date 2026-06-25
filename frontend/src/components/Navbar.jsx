import { AppBar, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <FavoriteIcon sx={{ mr: 1 }} />

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Disease Prediction System
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
