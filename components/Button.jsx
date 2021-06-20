import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.cyan[8]};
  &:hover {
    background: ${palette.cyan[6]};
  }
`;



export default function Button(props) {
  return (
    <StyledButton {...props} />
  );
}