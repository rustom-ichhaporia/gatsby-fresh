import React from 'react';
import styled from 'styled-components';
import { useStaticQuery } from 'gatsby';
import Icon from '@components/icons';
import { IconContext } from '@meronex/icons';

const ProjectsStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

const ProjectItem = styled.div`
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  // width: 80%;
  border: 2px solid var(--accent-1-dark-color);
  max-width: 700px;
`;

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  return (
    <ProjectsStyle>
      {/* <IconContext.Provider > */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ProjectItem key={node.id}>
          <h1>
            {node.frontmatter.title} <span> {node.frontmatter.date}</span>
          </h1>
          <a href={node.external}>
            <Icon name={node.} />
          </a>



          <p>{node.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </ProjectItem>
      ))}
      {/* </IconContext.Provider> */}
    </ProjectsStyle>
  );
}
