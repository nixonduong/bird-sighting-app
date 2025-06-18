import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Box,
  Button,
  Header,
  Keyboard,
  ResponsiveContext,
  Text,
  TextInput,
  Menu
} from 'grommet';
import { Search as SearchIcon, Hpe } from 'grommet-icons';

const StyledTextInput = styled(TextInput).attrs(() => ({
  'aria-labelledby': 'search-icon-example',
}))``;


export const MenuExample = ({ ...rest }) => {
  const items = [
    { label: 'Change username' },
    { label: 'Reset Password' },
    { label: 'Logout' },
  ];

  return <Menu label="Manage account" items={items} width="medium" {...rest} />;
};

export const GlobalHeader = ({appname}) => {
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();
  const items = [
    { label: 'Diurnal', onClick: () => navigate('/add-bird/diurnal') },
    { label: 'Nocturnal', onClick: () => navigate('/add-bird/nocturnal') }
  ];


  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, setFocused]);



  return (
    <Header fill="horizontal" pad={{ horizontal: 'medium', vertical: 'small' }}>
      <Button>
        <Box
          direction="row"
          align="start"
          gap="medium"
          onClick={() => navigate('/birds')}
          // pad maintains accessible hit target
          // non-responsive maintains same dimensions for mobile
          pad={{ vertical: 'xsmall' }}
          responsive={false}
        >
          <Hpe color="brand" height="medium" />
          {(!['xsmall', 'small'].includes(size) ||
            (['xsmall', 'small'].includes(size) && !focused)) && (
            <Box direction="row" gap="xsmall" wrap>
              <Text color="text-strong" weight="bold">{appname}</Text>
            </Box>
          )}
        </Box>
      </Button>
      <>
          <Box background="background-contrast" round="xsmall" width="medium">
            <Menu label="Add Bird" items={items} width="medium"/>
          </Box>
      </>
    </Header>
  );
};