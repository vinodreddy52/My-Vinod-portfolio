import { useState } from "react";
import { 
  Container, Typography, Button, Box, Grid, IconButton, Tooltip, 
  CircularProgress, Snackbar, Alert, Card, CardContent, CardMedia 
} from "@mui/material";
import { LinkedIn, Email, WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/VinodReddy_Resume.pdf";
      link.setAttribute("download", "Vinod_Reddy_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
      setOpen(true);
    }, 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "90px", minHeight: "100vh" }}>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        
        {/* Left Side - Enlarged Image with Text Below */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
          <Card sx={{ p: 2, borderRadius: 3, boxShadow: 5, background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", textAlign: "center" }}>
            <CardMedia
              component="img"
              image="/images/home.jpg"
              alt="Home Image"
              sx={{ width: "100%", maxWidth: 500, borderRadius: 2 }}
            />
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                Explore my journey as a Senior UI Developer and see how I craft seamless user experiences.
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#6200ea", color: "white", "&:hover": { backgroundColor: "#5a00d3" } }}
                onClick={() => navigate("/about")}
              >
                Learn More About Me
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side - Content Section */}
        <Grid item xs={12} md={6}>
          {/* <Card sx={{ p: 4, borderRadius: 3, boxShadow: 5, background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
            <CardContent> */}
              <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                Hi! I'm Vinod Kumar Reddy
              </Typography>
              <Typography variant="h6" color="secondary" gutterBottom>
                Senior UI DEVELOPER
              </Typography>

              {/* Social Links with Hover Effect */}
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Tooltip title="LinkedIn" arrow>
                  <IconButton color="primary" target="_blank" href="https://www.linkedin.com/in/vinodreddy-ui">
                    <LinkedIn fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Email" arrow>
                  <IconButton color="error" target="_blank" href="mailto:vinodreddy.info07@gmail.com">
                    <Email fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="WhatsApp" arrow>
                  <IconButton color="success" target="_blank" href="https://wa.me/9042238332">
                    <WhatsApp fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Download CV Button with Gradient & Animation */}
              <Button
                variant="contained"
                sx={{ 
                  mt: 4, 
                  px: 4, 
                  py: 1.5, 
                  fontSize: "1rem", 
                  borderRadius: "30px",
                  minWidth: 160,
                  background: "linear-gradient(45deg, #6200ea, #8e24aa)",
                  color: "white",
                  "&:hover": { background: "linear-gradient(45deg, #5a00d3, #7b1fa2)" },
                  transition: "all 0.3s ease-in-out"
                }}
                onClick={handleDownload}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Download CV"}
              </Button>
            {/* </CardContent>
          </Card> */}
        </Grid>
      </Grid>

      {/* Snackbar Notification - Top Right */}
      <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={() => setOpen(false)} 
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: "100%" }}>
          CV Downloaded Successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
