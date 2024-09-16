"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./Component.module.css";

interface Props {
  codeString: string;
}

export const Component = (props: Props) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={docco}
      wrapLines
      className={styles.component}
      onClick={onclick}
    >
      {props.codeString}
    </SyntaxHighlighter>
  );
};
