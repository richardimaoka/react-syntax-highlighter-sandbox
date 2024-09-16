import { promises as fs } from "fs";
import { Component } from "./Component";

export const Container = async () => {
  const codeString = await fs.readFile(
    process.cwd() + "/app/components/source-code.txt",
    "utf8"
  );

  return <Component codeString={codeString} />;
};
