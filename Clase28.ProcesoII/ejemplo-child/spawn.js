import { spawn } from "child_process";

const child = spawn("find", ["."]);

child.stdout.on("data", (data) => {
  console.log("Stdout:", data.toString());
});

child.stderr.on("data", (data) => {
  console.log("Stderr:", data);
});

child.on("error", (error) => {
  console.error(`Error: ${error.message}`);
});

child.on("close", (code) => {
  console.error(`Exit code: ${code}`);
});
