// import styled from "styled-components";
// import { ThemeData } from "../../fake-data/theme-data";
// import { useState } from "react";

// export const ThemeWrapper = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: start;
//   background: ${(props) => props.background};
// `;

// export const ThemeCircle = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;
//   background: ${(props) => props.background};
//   border-radius: 50%;
//   height: 15px;
//   width: 15px;
//   margin: 5px;
//   cursor: pointer;
// `;

// const ThemeTogle = () => {
//   const [ToogleTheme, setToogleTheme] = useState("red");

//   console.log(ToogleTheme);
//   return (
//     <>
//       <ThemeWrapper background={ToogleTheme}>
//         {ThemeData.map((item) => (
//           <ThemeCircle
//             key={item.id}
//             dataset={item.id}
//             background={item.css}
//             onClick={(e) => setToogleTheme(item.css)}
//           ></ThemeCircle>
//         ))}
//       </ThemeWrapper>{" "}
//     </>
//   );
// };

// export default ThemeTogle;
