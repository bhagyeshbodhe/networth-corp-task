import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

const Repositories = () => {
  const { repositories } = useSelector((store) => store.users);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Typography textAlign="center" variant="h5" component="div">
        REPOSITORIES
      </Typography>
      {Array.isArray(repositories) &&
        React.Children.toArray(
          repositories.map((repo) => (
            <Accordion
              expanded={expanded === `${repo.id}`}
              onChange={handleChange(`${repo.id}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{repo?.name.toUpperCase()}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Description : {repo?.description}</Typography>
                <Typography>Language Used : {repo?.language}</Typography>
                <Typography>Forks : {repo?.forks_count}</Typography>
                <Typography>
                  <Link
                    href={repo?.html_url}
                    style={{ textDecoration: "none" }}
                  >
                    Repository Link
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
    </div>
  );
};

export default Repositories;
