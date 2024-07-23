import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NLink = styled(NavLink)`
  background-color: #007bff; /* Basic blue background */
  border-radius: 8px; /* Normal border-radius */
  color: #ffffff; /* White text color */
  display: inline-block;
  font-weight: 500; /* Normal font weight */
  padding: 0.75rem 1.5rem; /* Slightly smaller padding */
  text-decoration: none;
  transition: box-shadow 250ms ease, background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #0056b3; /* Darker blue on hover */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Subtle blue shadow */
    outline: none;
  }

  &.active {
    background-color: #28a745; /* Green for active state */
  }
`;
