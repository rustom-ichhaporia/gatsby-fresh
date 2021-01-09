import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const PageStyle = styled.div`
  font-size: 30px;
  line-height: 1.3em;
`;

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
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

  const projectsToShow = data.projects.edges.filter(({ node }) => node);


  return (
    <>
    <div>
      
    </div>
      <h2>
        <a href="about">About</a>
      </h2>
      <h2>
        <a href="experience">Experience</a>
      </h2>
    </>
  );
}
