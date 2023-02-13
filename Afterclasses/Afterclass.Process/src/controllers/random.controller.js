import { fork } from "child_process";

const getRandom = (req, res) => {
  const { cant } = req.query;
  const childProcess = fork("child.js");
  const quantity = cant ? cant : 100000000;

  childProcess.send(quantity);

  childProcess.on("message", (response) => {
    res.json(response);
  });
};

const getInfo = (req, res) => {
  res.json({
    pid: process.pid,
    OS: process.platform,
    pathExec: process.execPath,
    memory: process.memoryUsage().rss,
  });
};

export const randomController = { getRandom, getInfo };
