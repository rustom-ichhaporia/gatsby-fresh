import React from 'react';
import styled from 'styled-components';
import { useStaticQuery } from 'gatsby';

// Graphql extraction of experience

const ExperienceItem = styled.div`
  // ul li:before {
  //   content: "+";
  //   position: absolute;
  //   left: 0;
  // }
  li {
    font: IBM Plex Mono;

    list-style: square;
    // list-style-type: "+";
  }
`;

const ItemTitle = styled.h3`
  // span {
  //   text-align: right;
  // }

  #date {
    float: right;
  }
`;

const ItemDescription = styled.div``;

export default function Experience() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              company
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1>EXPERIENCE</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ExperienceItem key={node.id}>
          <ItemTitle>
            {node.frontmatter.title}
            <span id="date"> {node.frontmatter.range} </span>
          </ItemTitle>

          {/* <ItemDescription> */}
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          {/* </ItemDescription> */}
        </ExperienceItem>
      ))}
    </div>
  );
}
