import "./ProjectCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function ProjectCard({ project, idx }) {

  return (
    <Link to={`${idx}`} style={{textDecoration: 'none'}}>
    <Card className="ProjectCard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.pic} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          <strong>Summary:</strong> {project.description}
          <br />
          <strong>Tech:</strong> {project.tech.join(', ')}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Link>
  );
}

