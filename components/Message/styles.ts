import styled from 'styled-components';
import { borderRadius } from '../../shared/styles'

export const MessageOuter = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  flex: 0 0 2.25rem;
  height: 2.25rem;
  borderRadius: ${borderRadius};
  overflow: hidden;
  background: rgba(211, 211, 211, 0.2)
`;

export const MessageInner = styled.div`
  padding-left: 0.5rem;
`;

export const MessageMeta = styled.div`
  flex: 1 1 auto;
  display: flex;
  font-size: 0.75rem;
  margin-bottom: 0.1rem;
`;

export const UserName = styled.strong`
  
`;

export const DateTime = styled.div`
  padding-left: 0.25rem; 
  color: #aaa
`;

export const Text = styled.p`
  margin: 0;
`