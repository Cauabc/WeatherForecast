// import { useEffect, useState } from "react"

import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";

// // API : f6d75b0651cbd15b8f3c89fe3b2af5cc

// // const Children = () => {

// //   console.log("DAS")

// //   return(
// //     <>
// //       <p>Children</p>
// //     </>
// //   )
// // }

// // const Component = ({children}) => {
// //   const [clickCount, setClickCount] = useState(0)

// //   const handleClick = () => {
// //     setClickCount(prev => prev+1)
// //   }

// //   useEffect(() => {
// //     window.addEventListener("click", handleClick)

// //     return () => window.removeEventListener("click", handleClick)
// //   }, [])

// //   return(
// //     <>
// //       <h2>clicks: {clickCount}</h2>
// //       {children}
// //     </>
// //   )
// // }

// // const Children2 = ({message}) => {

// //   console.log("saddas")

// //   return(
// //     <>
// //       <h1>jurupema</h1>
// //       {message}
// //     </>
// //   )
// // }

// function App() {

//   // useEffect(() => {
//   //   fetch("http://api.openweathermap.org/geo/1.0/direct?q=São+Paulo&limit=1&appid=f6d75b0651cbd15b8f3c89fe3b2af5cc").then((response) => response.json()).then((data) => console.log(data))
//   //   fetch("https://api.openweathermap.org/data/2.5/weather?lat=-23.5506507&lon=-46.6333824&appid=f6d75b0651cbd15b8f3c89fe3b2af5cc").then((response) => response.json()).then((data) => console.log(data))
//   // }, [])

//   return (
//     <>
//       {/* <Component children={<Children/>}/>
//       <Children2>
//         <div>
//           <h1>tjasi</h1>
//         </div>
//       </Children2> */}
//     </>
//   )
// }

// export default App

function App() {
  const [theme, setTheme] = useState("dark");

  const handleChangeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header handleChangeTheme={handleChangeTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
