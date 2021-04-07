import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

// Graphql extraction of experience

const ExperienceItem = styled.div`
  li {
    font: IBM Plex Mono;

    list-style: square;
    // list-style-type: "+";
  }
`;

const ItemTitle = styled.h2`
  #company {
    color: ${(props) => props.theme.colors.accent};
  }
  #short-date {
    float: right;
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
              start(formatString: "YYYY")
              end(formatString: "YYYY")
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
            <span id="short-date">{node.frontmatter.end}</span>
          </ItemTitle>
          {/* <ItemDate>
            {node.frontmatter.start} - {node.frontmatter.end}
          </ItemDate> */}

          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          <br />
        </ExperienceItem>
      ))}
    </>
  );
}
