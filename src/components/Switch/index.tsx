import React, { useContext } from 'react';
import { RiSunLine } from 'react-icons/ri';
import { BiMoon } from 'react-icons/bi';
import { ThemeContext as ThemeContextProps } from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

import { Container, SwitchTheme } from './styles';

export function Switch() {
  const { toggleTheme } = useContext(ThemeContext);
  const { title } = useContext(ThemeContextProps);

  return (
    <Container>
      {title === 'dark' ? <BiMoon size={20} /> : <RiSunLine size={20} />}

      <SwitchTheme
        checked={title === 'dark'}
        height={20}
        width={40}
        onChange={toggleTheme}
        onColor="#50fa7b"
        offColor="#44475a"
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
      />
    </Container>
  );
}
