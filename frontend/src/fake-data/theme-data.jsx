// Gradients taken from: https://webgradients.com/
export const ThemeData = [
  {
    id: 1,
    css: "linear-gradient( to top, #110014  10%, #531d1d 100%)",
  },

  {
    id: 3,
    css: "linear-gradient(135deg, #6b5b7a 0%, #295683 100%)",
  },
  {
    id: 4,
    css: "linear-gradient(135deg, #8d5493 0%, #f5576c 100%)",
  },
  {
    id: 5,
    css: "linear-gradient(135deg, #6a7b76 0%, #775a71 100%)",
  },
  {
    id: 6,
    css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
  },
  {
    id: 7,
    css: "linear-gradient(135deg, #18333d 0%, #1b6b2a 100%)",
  },
  {
    id: 8,
    css: "linear-gradient(135deg, #550477 0%, #1e9c05 100%)",
  },
  {
    id: 9,
    css: "linear-gradient(135deg, #dabb56 0%, #d3846e 100%)",
  },
  {
    id: 10,
    css: "linear-gradient(135deg, #69c291 0%, #f9f586 100%)",
  },
  {
    id: 11,
    css: "linear-gradient(135deg, #a4d9e9 0%, #002c2c 100%)",
  },
  {
    id: 12,
    css: "linear-gradient(135deg, #bbb3af 0%, #ace0f9 100%)",
  },
  {
    id: 13,
    css: "linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)",
  },
  {
    id: 14,
    css: "linear-gradient(135deg, #7657dd 0%, #faaca8 100%, #faaca8 100%)",
  },
  {
    id: 15,
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
  {
    id: 16,
    css: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
  },
  {
    id: 17,
    css: "linear-gradient(to right top, #520112, #670023, #7a0039, #8b0053, #980071, #882a90, #6c42aa, #3956be, #0065b7, #006c9f, #006d7f, #006b64)",
  },
  {
    id: 18,
    css: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
  },
  {
    id: 19,
    css: "linear-gradient(to right, #ef675d 19%, #fff67a 10%, #c1ff7f 21%, #85e9f9 52%, #cf556c 78%, #b12a5b 100%)",
  },
  {
    id: 20,
    css: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
  },
  { id: 22, css: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)" },
  { id: 23, css: "linear-gradient(to top, #30cfd0 0%, #330867 100%)" },

  { id: 24, css: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { id: 25, css: "linear-gradient(180deg, #2af598 0%, #009efd 100%)" },
  {
    css: "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",
  },
  { id: 26, css: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)" },
  { id: 27, css: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)" },
  { id: 28, css: "linear-gradient(to top, #f43b47 0%, #453a94 100%)" },
  { id: 29, css: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)" },
  { id: 30, css: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)" },
  { id: 31, css: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)" },
  {
    id: 32,
    css: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
  },
  { id: 33, css: "linear-gradient(to top, #f43b47 0%, #453a94 100%)" },
  { id: 34, css: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)" },
  { id: 35, css: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)" },
  {
    id: 36,
    css: "linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)",
  },
  { id: 37, css: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)" },
  { id: 38, css: "linear-gradient(to top, #09203f 0%, #537895 100%)" },
  {
    id: 39,
    css: "radial-gradient(to top, #009097 0%, #0285a5 47%, #90ccf7 100%)",
  },
];

// import React, { useState } from "react";
// import {
//   useTransition,
//   useSpring,
//   useChain,
//   config,
//   animated,
//   useSpringRef,
// } from "@react-spring/web";

// import data from "./data";
// import styles from "./styles.module.css";

// export default function App() {
//   const [open, set] = useState(false);

//   const springApi = useSpringRef();
//   const { size, ...rest } = useSpring({
//     ref: springApi,
//     config: config.stiff,
//     from: { size: "20%", background: "hotpink" },
//     to: {
//       size: open ? "100%" : "20%",
//       background: open ? "white" : "hotpink",
//     },
//   });

//   const transApi = useSpringRef();
//   const transition = useTransition(open ? data : [], {
//     ref: transApi,
//     trail: 400 / data.length,
//     from: { opacity: 0, scale: 0 },
//     enter: { opacity: 1, scale: 1 },
//     leave: { opacity: 0, scale: 0 },
//   });

//   // This will orchestrate the two animations above, comment the last arg and it creates a sequence
//   useChain(open ? [springApi, transApi] : [transApi, springApi], [
//     0,
//     open ? 0.1 : 0.6,
//   ]);

//   return (
//     <div className={styles.wrapper}>
//       <p>Оберіть тему: </p>
//       <animated.div
//         style={{ ...rest, width: size, height: size }}
//         className={styles.container}
//         onClick={() => set((open) => !open)}
//       >
//         {transition((style, item) => (
//           <animated.div
//             className={styles.item}
//             style={{ ...style, background: item.css }}
//           />
//         ))}
//       </animated.div>
//     </div>
//   );
// }

// html,
// body,
// #root {
//   height: 100%;
//   width: 100%;
// }

// body {
//   font-family: system-ui;
//   margin: 0;
// }

// *,
// *:after,
// *:before {
//   box-sizing: border-box;
// }

// .flex {
//   display: flex;
//   align-items: center;
// }

// .flex.fill {
//   height: 100%;
// }

// .flex.center {
//   justify-content: center;
// }

// .wrapper {
//   width: 100%;
//   height: 100%;
//   background: lightblue;
//   padding: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .container {
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(4, minmax(100px, 1fr));
//   grid-gap: 25px;
//   padding: 25px;
//   background: white;
//   border-radius: 5px;
//   cursor: pointer;
//   box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
//   will-change: width, height;
// }

// .item {
//   width: 100%;
//   height: 100%;
//   background: white;
//   border-radius: 5px;
//   will-change: transform, opacity;
// }
