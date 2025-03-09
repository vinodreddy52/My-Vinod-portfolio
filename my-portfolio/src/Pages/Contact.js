import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Card,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import { LinkedIn, Email, WhatsApp, LocationOn, Phone } from "@mui/icons-material";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false); // Snackbar for success message

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Email
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .send(
          "service_xo08jtx", // Your EmailJS Service ID
          "template_fufqkdg", // Your EmailJS Template ID
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          "xFkww3NP7lZTlgUwg" // Your EmailJS Public Key
        )
        .then(
          () => {
            setOpen(true); // Show success message
            setFormData({ name: "", email: "", message: "" }); // Clear form
          },
          (error) => {
            console.error("Email Error:", error);
          }
        );
    }
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: "120px" }}>
      <Typography variant="h4" fontWeight="bold" align="center" color="primary" gutterBottom>
        Get in Touch
      </Typography>

      {/* Contact Card */}
      <Card
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 5,
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold">Contact Info</Typography>
            <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
              <LocationOn color="primary" />
              <Typography variant="body1" sx={{ ml: 1 }}>Chennai, India</Typography>
            </Box>
            <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
              <Phone color="primary" />
              <Typography variant="body1" sx={{ ml: 1 }}>+91 90422 38332</Typography>
            </Box>
            <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
              <Email color="primary" />
              <Typography variant="body1" sx={{ ml: 1 }}>vinodreddy.info07@gmail.com</Typography>
            </Box>

            {/* Social Icons */}
            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Tooltip title="LinkedIn" arrow placement="bottom">
                <IconButton color="primary" target="_blank" href="https://www.linkedin.com/in/vinodreddy-ui">
                  <LinkedIn fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email" arrow placement="bottom">
                <IconButton color="error" target="_blank" href="mailto:vinodreddy.info07@gmail.com">
                  <Email fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="WhatsApp" arrow placement="bottom">
                <IconButton color="success" target="_blank" href="https://wa.me/9042238332">
                  <WhatsApp fontSize="large" />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Your Email"
                fullWidth
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" fullWidth type="submit">
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* Snackbar for Success Message */}
      <Snackbar open={open} autoHideDuration={4000}  anchorOrigin={{ vertical: "top", horizontal: "right" }} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" variant="filled">
          Email Sent Successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
