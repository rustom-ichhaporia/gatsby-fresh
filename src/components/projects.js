import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Icon from '@components/icons';
import { IconContext } from '@meronex/icons';

const ItemTitle = styled.h2`
  #company {
    color: var(--accent-1-color);
    float: right;
    a {
      color: var(--red);
    }
    a:hover {
      color: var(--black);
    }
  }
  margin-bottom: 30px;
  #spaces {
    padding-right: 48px;
  }
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
    <>
      <IconContext.Provider value={{ size: '35px' }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <>
            <ItemTitle>
              {node.frontmatter.title}
              {/* <span> {node.frontmatter.date}</span> */}
              <span id="company">
                {node.frontmatter.github && (
                <a
                  href={node.frontmatter.github}
                  aria-label="Link to GitHub repo"
                  target="_blank"
                  rel="noreferrer"
                  style={{display: 'inline-block'}}
                >
                  <Icon name="GitHub" />
                </a>
              ) }
              {' '}
              {node.frontmatter.external ? (
                <a
                  href={node.frontmatter.external}
                  aria-label="Link to project page"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{display: 'inline-block'}}
                >
                  <Icon name="Link" />
                </a>
              ) : (<span id="spaces"></span>)}
              </span>
              
            </ItemTitle>

            {/* <div dangerouslySetInnerHTML={{ __html: node.html }} /> */}
          </>
        ))}
      </IconContext.Provider>
    </>
  );
}
