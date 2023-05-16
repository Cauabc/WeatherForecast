import { useTheme } from "styled-components";
import * as S from "./styles";
import { BsMoon, BsSun } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";

export const Header = ({ handleChangeTheme }) => {
  const currentTheme = useTheme();
  const [isCelsiusActive, setIsCelsiusActive] = useState("active");
  const [isFahrenActive, setIsFahrenActive] = useState("");

  const handleChangeToCelsius = () => {
    setIsCelsiusActive("active");
    setIsFahrenActive("");
  };

  const handleChangeToFahren = () => {
    setIsCelsiusActive("");
    setIsFahrenActive("active");
  };

  return (
    <S.Container>
      <S.NameHeader>
        <h1>Weather Forecast</h1>
      </S.NameHeader>
      <S.SearchArea>
        <input
          type="text"
          name="SearchWeather"
          id="SearchWeather"
          placeholder="Search any place"
        />
        <FiMapPin />
      </S.SearchArea>
      <S.HeaderButtons>
        <S.CelsiusButton
          className={isCelsiusActive}
          onClick={handleChangeToCelsius}
        >
          °C
        </S.CelsiusButton>
        <S.FahrenheitButton
          className={isFahrenActive}
          onClick={handleChangeToFahren}
        >
          {" "}
          °F
        </S.FahrenheitButton>
        {currentTheme.theme === "dark" ? (
          <BsSun className="themeIcon" onClick={handleChangeTheme} />
        ) : (
          <BsMoon className="themeIcon" onClick={handleChangeTheme} />
        )}
      </S.HeaderButtons>
    </S.Container>
  );
};
