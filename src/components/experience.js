import React from 'react';
import styled from 'styled-components';
import { useStaticQuery } from 'gatsby';

// Graphql extraction of experience

const ExperienceItem = styled.div`
  li {
    font: IBM Plex Mono;

    list-style: square;
    // list-style-type: "+";
  }
`;

const ItemTitle = styled.h2`
  // color: var(--accent-1-color);
  #company {
    color: var(--accent-1-color);
    // float: right;
    // a {
    //   color: var(--red);
    // }
    // a:hover {
    //   color: var(--black);
    // }
  }
`;

const ItemDate = styled.p`
  // text-align: right;
`;

const ItemDescription = styled.div``;

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
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ExperienceItem key={node.id}>
          <ItemTitle>
            {node.frontmatter.title}

            {' @ '}

            <span id="company">
              <a
                href={node.frontmatter.url}
                aria-label="Link to company page"
                target="_blank"
                rel="noopener noreferrer"
              >
                {node.frontmatter.company}
              </a>
            </span>
          </ItemTitle>
          <ItemDate>
            {node.frontmatter.start} - {node.frontmatter.end}
          </ItemDate>

          {/* <ItemDescription> */}
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          {/* </ItemDescription> */}
          <br />
        </ExperienceItem>
      ))}
    </>
  );
}
