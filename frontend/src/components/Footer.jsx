import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt: 8,
        py: 3,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography>© 2026 Multi Disease Prediction System</Typography>
    </Box>
  );
}

export default Footer;
