import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.asideColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NameHeader = styled.div`
  h1 {
    color: ${(props) => props.theme.fontColor};
    font-size: 2em;
  }
`;

export const SearchArea = styled.div`
  position: relative;
  width: 30vw;
  input {
    width: 100%;
    background-color: ${(props) => props.theme.backgroundColor};
    border: 0;
    border-radius: 15px;
    outline: 0;
    height: 2.7em;
    padding: 0 2em 0 2em;
    caret-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.fontColor};
    font-weight: bold;

    &::placeholder {
      font-weight: 400;
      font-size: 1.1em;
      color: #9ca3af;
    }
  }
`;

export const HeaderButtons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  display: flex;
  justify-content: center;

  .themeIcon {
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    height: 22px;
    width: 22px;
    border-radius: 50%;
  }
`;

export const CelsiusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 37px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 30em;
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  box-shadow: 0px 0px 11px 1px ${(props) => props.theme.shadowColor};
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-right: 12px;
  user-select: none;

  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }

  &.active {
    background-color: ${(props) => props.theme.reverseColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const FahrenheitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 37px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 30em;
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};
  margin-right: 2em;
  user-select: none;
  text-decoration: none;
  box-shadow: 0px 0px 11px 1px ${(props) => props.theme.shadowColor};
  border: 1px solid rgba(255, 255, 255, 0.2);

  cursor: pointer;

  &:hover {
    transform: scale(110%);
  }

  &.active {
    background-color: ${(props) => props.theme.reverseColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;
