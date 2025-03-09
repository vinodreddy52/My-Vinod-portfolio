import { Container, Grid, Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";
import { Code, Storage, Build, BugReport, Devices, Brush, Cloud } from "@mui/icons-material";

const skills = [
  { category: "Web Technologies", icon: <Code />, skills: ["HTML5", "JavaScript", "CSS3", "XHTML", "jQuery", "Bootstrap"] },
  { category: "Frameworks", icon: <Build />, skills: ["React JS", "Angular JS"] },
  { category: "Databases", icon: <Storage />, skills: ["SQL Server"] },
  { category: "Development Tools", icon: <Devices />, skills: ["VS Code", "Sublime Text", "Atom"] },
  { category: "Debugging Tools", icon: <BugReport />, skills: ["Firebug", "Chrome DevTools"] },
  { category: "Operating Systems", icon: <Cloud />, skills: ["Windows 10", "MacOS"] },
  { category: "Version Control", icon: <Storage />, skills: ["Git", "SVN"] },
  { category: "Design Tools", icon: <Brush />, skills: ["MS-Office", "Adobe Photoshop"] },
];

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "90px" }} >
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Technical Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 5,
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s ease-in-out",
                '&:hover': { transform: "scale(1.05)" }
              }}
            >
              <CardContent>
                <Box sx={{ fontSize: 40, color: "primary.main", mb: 2 }}>{skill.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {skill.category}
                </Typography>
                {skill.skills.map((item, i) => (
                  <Box key={i} display="flex" alignItems="center" gap={1} sx={{ mb: 1 }}>
                    <Typography variant="body2" fontWeight="bold">{item}</Typography>
                    <LinearProgress variant="determinate" value={Math.random() * (100 - 70) + 70} sx={{ flexGrow: 1, height: 6, borderRadius: 5 }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
