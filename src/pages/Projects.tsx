import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

const projects = [
  {
    id: 1,
    title: "Logistic System",
    description: "A comprehensive dashboard for a logistics management system.",
    image: "/img/dashboard.png",
    repoLink: "https://github.com/aleep98",
    liveLink: "#",
    tags: ["React", "Node.js", "MUI"],
  },
  {
    id: 2,
    title: "Barber Studio",
    description: "A modern website for the Natan Passeberg Barber Studio.",
    image: "/img/barber.png",
    repoLink: "https://github.com/aleep98",
    liveLink: "https://np-barber.vercel.app",
    tags: ["Next.js", "Tailwind", "Framer"],
  },
  {
    id: 3,
    title: "Lash Design Studio Thainá Roberta",
    description: "A portfolio website for a professional Lash Designer.",
    image: "/img/studio-th.png",
    repoLink: "https://github.com/aleep98",
    liveLink: "https://studio-thaina-roberta.vercel.app",
    tags: ["Next.js", "CSS Modules", "Tailwind"],
  },
];
export default function Projects() {
  return (
    <section 
      className="py-8 bg-[#0D0E11] text-white" 
      id="projects"
     
    >
      <h3 className="text-2sm text-center mb-10 text-red-500">
        My Projects
      </h3>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{
                maxWidth: 345,
                background: "rgba(31, 41, 55, 0.4)", 
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                color: "white",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                }
              }}
            >
                 <CardMedia
                 className="p-2"
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{
                    borderRadius: 3,
                    objectFit: "cover"
                }}
              />
                <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#9ca3af" }}>
                  {project.description}
                </Typography>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        color: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    />
                  ))}
                </div>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button size="small"   sx={{ color: "#bd92feff"}} href={project.repoLink} target="_blank">
                  GitHub
                </Button>
                {project.liveLink && (
                  <Button size="small" sx={{ color: "#bd92feff" }} href={project.liveLink} target="_blank">
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
          </div>
        </div>
    </section>
  );
}
