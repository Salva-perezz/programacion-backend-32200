import { execFile } from "child_process";

execFile(`${process.cwd()}/myScript.sh`, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);

    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);

    return;
  }

  console.log(`Stdout: ${stdout}`);
});
