import http from "http";

const data = JSON.stringify({
  name: "Pepe",
  email: "pepe@mail.com",
});

const optionsGet = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/api/user",
  method: "GET",
  headers: {
    userId: "642ca1df2e7527f69c86bf4d",
  },
};

const optionsPost = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/api/user",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-length": data.length,
  },
};

const request = http.request(optionsGet, (res) => {
  console.log(`StatusCode: ${res.statusCode}`);

  res.on("data", (err) => {
    console.log(JSON.parse(data.toString("utf8")));
  });
});

request.on("error", (err) => {
  console.log(err);
});

request.write(data);

request.end();
