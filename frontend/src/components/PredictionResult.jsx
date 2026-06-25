import { Alert } from "@mui/material";

function PredictionResult({ result }) {
  if (!result) return null;

  return (
    <Alert
      severity={result.toLowerCase().includes("non") ? "success" : "error"}
      sx={{ mt: 3 }}
    >
      {result}
    </Alert>
  );
}

export default PredictionResult;
