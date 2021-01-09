import React from 'react';
import styled from 'styled-components';
import { IconContext } from '@meronex/icons';
import { siteMetadata } from '../../gatsby-config';
import Icon from '@components/icons';

const SocialLinksStyle = styled.div`
  margin: auto;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
`;

export default function SocialLinks() {
  return (
    <SocialLinksStyle>
      <IconContext.Provider value={{ size: '35px' }}>
        {siteMetadata.socialMedia &&
          siteMetadata.socialMedia.map(({ url, name }) => (
            <a
              href={
                name == 'Email'
                  ? 'mailto:' + url + '?subject=Tell me something funny'
                  : url
              }
              aria-label={name}
              target="_blank"
              rel="noreferrer"
              className="buttons"
            >
              <Icon name={name} />
            </a>
          ))}
      </IconContext.Provider>
    </SocialLinksStyle>
  );
}
