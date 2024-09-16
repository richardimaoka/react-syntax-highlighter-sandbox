import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { promises as fs } from "fs";

export const Component = async () => {
  const codeString = await fs.readFile(
    process.cwd() + "/app/components/source-code",
    "utf8"
  );

  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};
