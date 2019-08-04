import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Flipper } from 'react-flip-toolkit'

export const Li = styled.li`
  position: relative;
  list-style-type: none;
  margin-bottom: 1rem;
`

export const CollapsedTrackContainer = styled(Flipper)`
  position: relative;
  width: 100%;
  height: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
`

export const CollapsedTrack = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 2px 5px hsla(0, 0%, 0%, 0.1);
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: white;
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
  padding: 1rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: ${props => (props.isGettingDeleted ? `100%` : 0)};
  h3 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
`

export const List = styled.ul`
  padding: 1rem;
  margin: 0;
  background-color: white;
`

const pulse = keyframes`
 from {
  transform: scale(.9);
  opacity: .8;
 } to {
   transform: scale(1.5);
   opacity:0;
 }
`

export const PlayButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2.5rem;
  box-shadow: none;
  appearance: none;
  border: none;
  margin-right: 1.5rem;
  transition: background-color 0.3s;
  background-color: ${props =>
    props.isPlaying ? 'var(--dark)' : 'var(--light)'};
  position: relative;
  &:focus {
    outline: none;
  }
  &::after {
    display: ${props => (props.isPlaying ? 'block' : 'none')};
    z-index: -1;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: var(--dark);
    animation: ${props => (props.isPlaying ? pulse : '')} 1.25s infinite;
    border-radius: 2.5rem;
  }
`

export const TrashIconContainer = styled.div`
  width: ${props => (props.isGettingDeleted ? '3.5rem' : '2rem')};
  height: ${props => (props.isGettingDeleted ? '3.5rem' : '2rem')};
  color: var(--light);
  margin-left: 2.5rem;
  padding: 0.5rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${props => (props.isGettingDeleted ? 'block' : 'none')};
  img {
    width: 2rem;
    height: auto;
  }
`