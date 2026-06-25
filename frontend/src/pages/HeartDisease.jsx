import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import API from "../services/api";
import PredictionResult from "../components/PredictionResult";

function HeartDisease() {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    dataset: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalch: "",
    exang: "",
    oldpeak: "",
    slope: "",
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

      const response = await API.post("/predict/heart", formData);

      setResult(response.data.prediction);
    } catch (error) {
      console.error(error);
      setResult("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Paper
        elevation={8}
        sx={{
          p: 5,
          borderRadius: 4,
          maxWidth: "1000px",
          mx: "auto",
        }}
      >
        {" "}
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Heart Disease Prediction{" "}
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Sex</InputLabel>
              <Select
                name="sex"
                value={formData.sex}
                label="Sex"
                onChange={handleChange}
              >
                <MenuItem value={0}>Female</MenuItem>
                <MenuItem value={1}>Male</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Dataset</InputLabel>
              <Select
                name="dataset"
                value={formData.dataset}
                label="Dataset"
                onChange={handleChange}
              >
                <MenuItem value={0}>Cleveland</MenuItem>
                <MenuItem value={1}>Hungary</MenuItem>
                <MenuItem value={2}>Switzerland</MenuItem>
                <MenuItem value={3}>VA Long Beach</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Chest Pain Type</InputLabel>
              <Select
                name="cp"
                value={formData.cp}
                label="Chest Pain Type"
                onChange={handleChange}
              >
                <MenuItem value={0}>Typical Angina</MenuItem>
                <MenuItem value={1}>Atypical Angina</MenuItem>
                <MenuItem value={2}>Non-Anginal Pain</MenuItem>
                <MenuItem value={3}>Asymptomatic</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Resting Blood Pressure"
              name="trestbps"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Cholesterol"
              name="chol"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Fasting Blood Sugar</InputLabel>
              <Select
                name="fbs"
                value={formData.fbs}
                label="Fasting Blood Sugar"
                onChange={handleChange}
              >
                <MenuItem value={0}>Normal</MenuItem>
                <MenuItem value={1}>High</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Rest ECG</InputLabel>
              <Select
                name="restecg"
                value={formData.restecg}
                label="Rest ECG"
                onChange={handleChange}
              >
                <MenuItem value={0}>Normal</MenuItem>
                <MenuItem value={1}>ST-T Abnormality</MenuItem>
                <MenuItem value={2}>LV Hypertrophy</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Maximum Heart Rate"
              name="thalch"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Exercise Angina</InputLabel>
              <Select
                name="exang"
                value={formData.exang}
                label="Exercise Angina"
                onChange={handleChange}
              >
                <MenuItem value={0}>No</MenuItem>
                <MenuItem value={1}>Yes</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Old Peak"
              name="oldpeak"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Slope</InputLabel>
              <Select
                name="slope"
                value={formData.slope}
                label="Slope"
                onChange={handleChange}
              >
                <MenuItem value={0}>Upsloping</MenuItem>
                <MenuItem value={1}>Flat</MenuItem>
                <MenuItem value={2}>Downsloping</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            py: 1.5,
            fontWeight: "bold",
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Predict Heart Disease"
          )}
        </Button>
        <PredictionResult result={result} />
      </Paper>
    </Container>
  );
}

export default HeartDisease;
