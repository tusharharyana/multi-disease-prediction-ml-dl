import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { Favorite, Bloodtype } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          background: "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          borderRadius: 4,
          mb: 6,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          AI-Powered Healthcare
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Predict Diabetes and Heart Disease using Machine Learning Models
        </Typography>
      </Box>
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About This Project
        </Typography>

        <Typography>
          This system predicts Diabetes and Heart Disease using Machine Learning
          models trained on healthcare datasets. Technologies used: React,
          Flask, Scikit-Learn, Random Forest, Logistic Regression, Render and
          Material UI.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              p: 2,
              borderRadius: 4,
              textAlign: "center",
              boxShadow: 5,
            }}
          >
            <CardContent>
              <Bloodtype color="error" sx={{ fontSize: 80 }} />

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Diabetes Prediction
              </Typography>

              <Typography color="text.secondary">
                Predict the likelihood of Diabetes using patient health
                parameters.
              </Typography>

              <Button
                variant="contained"
                color="error"
                sx={{ mt: 3 }}
                onClick={() => navigate("/diabetes")}
              >
                Predict Diabetes
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card
            sx={{
              p: 2,
              borderRadius: 4,
              textAlign: "center",
              boxShadow: 5,
            }}
          >
            <CardContent>
              <Favorite color="error" sx={{ fontSize: 80 }} />

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Heart Disease Prediction
              </Typography>

              <Typography color="text.secondary">
                Predict the likelihood of Heart Disease using patient medical
                data.
              </Typography>

              <Button
                variant="contained"
                color="error"
                sx={{ mt: 3 }}
                onClick={() => navigate("/heart")}
              >
                Predict Heart Disease
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
