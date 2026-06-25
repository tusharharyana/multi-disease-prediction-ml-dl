import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";

import API from "../services/api";
import PredictionResult from "../components/PredictionResult";

function Diabetes() {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await API.post("/predict/diabetes", formData);

      setResult(response.data.prediction);
    } catch (error) {
      console.error(error);

      setResult("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Diabetes Prediction
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Pregnancies"
              name="pregnancies"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Glucose"
              name="glucose"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Blood Pressure"
              name="bloodPressure"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Skin Thickness"
              name="skinThickness"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Insulin"
              name="insulin"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="BMI"
              name="bmi"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="DPF"
              name="dpf"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 4 }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Predict"}
        </Button>

        <PredictionResult result={result} />
      </Paper>
    </Container>
  );
}

export default Diabetes;
