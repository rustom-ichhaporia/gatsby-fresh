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
  color: var(--accent-1-color);
  #date {
    color: var(--text-color);
    float: right;
  }
`;

const ItemDescription = styled.div`
`;

export default function Experience() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "content/jobs/" } }
        sort: { fields: [frontmatter___start], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              start(formatString: "MM/YYYY")
              end(formatString: "MM/YYYY")
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
      {/* <h1>EXPERIENCE</h1> */}

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ExperienceItem key={node.id}>
          <ItemTitle>
            {node.frontmatter.title}
            <span id="date"> {node.frontmatter.company} </span>
          </ItemTitle>
          {node.frontmatter.start} - {node.frontmatter.end} 


          {/* <ItemDescription> */}
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          {/* </ItemDescription> */}
          <br />

        </ExperienceItem>
        
      ))}
    </div>
  );
}
