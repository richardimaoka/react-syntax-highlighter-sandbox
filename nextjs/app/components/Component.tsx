"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./Component.module.css";

interface Props {
  codeString: string;
}

export const Component = (props: Props) => {
  const highlights = [
    { start: 2, end: 3 },
    { start: 6, end: 8 },
  ];

  return (
    <div
      onMouseDown={(e) => {
        if (e.target instanceof Element) {
          const start = e.target.getAttribute("data-highlight-start");
          const end = e.target.getAttribute("data-highlight-end");
          if (
            typeof Number(start) === "number" &&
            typeof Number(end) === "number"
          ) {
            console.log(`start = ${start} end = ${end}`);
          }
        }
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        showLineNumbers // necessary for lineProps to accept (argument: number)
        wrapLines
        // wrapLongLines
        className={styles.component}
        lineProps={(lineNumber) => {
          const hFound = highlights.find(
            (h) => h.start <= lineNumber && lineNumber <= h.end
          );

          if (hFound) {
            return {
              style: { backgroundColor: "yellow" },
              "data-highlight-start": hFound.start,
              "data-highlight-end": hFound.end,
              // className: "abcde", className is forcefully canceled inside React Syntax Highlighter's lineProps processing
            };
          } else {
            return {};
          }
        }}
      >
        {props.codeString}
      </SyntaxHighlighter>
    </div>
  );
};
