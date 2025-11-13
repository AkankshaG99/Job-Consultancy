import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
 
const ConsentForm = ({ open, onClose, onSubmit }) => {
    const [agreed, setAgreed] = React.useState(false);
 
  const handleAgree = () => {
    if (agreed) {
      onSubmit();
      onClose();
    } else {
      alert("Please agree to the terms before proceeding.");
    }
  };
 
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="font-semibold text-lg">
        Consent Form
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" className="mb-4 text-gray-700">
          Before applying for this job, please confirm that your details will
          be shared with the employer. Your contact information and resume will
          be visible to the hiring team for review.
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              color="primary"
            />
          }
          label="I agree to share my details with the employer"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button
          onClick={handleAgree}
          color="primary"
          variant="contained"
          disabled={!agreed}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}
 
export default ConsentForm