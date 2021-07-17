import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
  white-space: nowrap;
  min-width: 100px;
  max-width: 200px;
  curson: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  aligh-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '5px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};
  &:hover {
    transform: translateY(-2px);
  }
`;