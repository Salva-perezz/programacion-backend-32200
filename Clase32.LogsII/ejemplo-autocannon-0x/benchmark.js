import autocannon from "autocannon";
import { PassThrough } from "stream";

function run(url) {
  const buf = [];
  const outputStream = new PassThrough();

  const inst = autocannon({
    url,
    connections: 100,
    duration: 20,
  });

  autocannon.track(inst, { outputStream });

  outputStream.on("data", (data) => buf.push(data));

  inst.on("done", () => {
    process.stdout.write(Buffer.concat(buf));
  });
}

run("http://localhost:8080/auth-bloq?username=marian&password=qwerty123");
run("http://localhost:8080/auth-nobloq?username=marian&password=qwerty123");

// curl -X GET "http://localhost:8080/newUser?username=marian&password=qwerty123"
