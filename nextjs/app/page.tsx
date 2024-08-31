import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./page.module.css";

export default function Home() {
  const codeString = `(num) => num + 1
(num) => num + 1
(num) => num + 1
(num) => num + 1
(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1(num) => num + 1
(num) => num + 1
  `;
  return (
    <SyntaxHighlighter
      className={styles.component}
      language="javascript"
      style={docco}
      wrapLines
      lineProps={(n) => ({ className: "specialline" })}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}
