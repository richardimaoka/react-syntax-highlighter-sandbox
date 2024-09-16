"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./Component.module.css";

interface Props {
  codeString: string;
}

export const Component = (props: Props) => {
  return (
    <div
      onMouseDown={(e) => {
        if (e.target instanceof Element) {
          const label = e.target.getAttribute("data-copy-start");
          console.log(label, typeof label);
        }
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        wrapLines
        wrapLongLines
        className={styles.component}
        // @ts-expect-error using data attribute
        lineProps={() => {
          return {
            "data-copy-start": 1,
          };
        }}
      >
        {props.codeString}
      </SyntaxHighlighter>
    </div>
  );
};
