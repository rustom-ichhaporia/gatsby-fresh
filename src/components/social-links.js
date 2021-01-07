import React from 'react';
import styled from 'styled-components';
import { IconContext } from '@meronex/icons';
import { siteMetadata } from '../../gatsby-config';
import Icon from '@components/icons';

const SocialLinksStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  // a:link, a:visited {
  //   color: var(--grey-4);
  // }
`;

export default function SocialLinks() {
  return (
    <SocialLinksStyle>
      <IconContext.Provider value={{ size: '0.75em' }}>
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
