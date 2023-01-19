import { denormalize, normalize, schema } from "normalizr";

import util from "util";

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true));
}

const blogpost = {
  id: "1",
  title: "My blog post",
  description: "Short blogpost description",
  content: "Hello world",
  author: {
    id: "1",
    name: "John Doe",
  },
  comments: [
    {
      id: "1",
      author: "Rob",
      content: "Nice post!",
    },
    {
      id: "2",
      author: "Jane",
      content: "I totally agree with you!",
    },
  ],
};

const authorSchema = new schema.Entity("author");
const commentsSchema = new schema.Entity("comments");
const postSchema = new schema.Entity("post", {
  author: authorSchema,
  comments: [commentsSchema],
});
const normalizedPost = normalize(blogpost, postSchema);

const denormalizedPost = denormalize(
  normalizedPost.result,
  postSchema,
  normalizedPost.entities
);

console.log("--------- OBJETO NORMALIZADO ------------");
print(normalizedPost);
console.log(JSON.stringify(normalizedPost).length);

console.log("--------- OBJETO ORIGINAL ------------");
print(blogpost);
console.log(JSON.stringify(blogpost).length);

console.log("--------- OBJETO DENORMALIZADO ------------");
print(denormalizedPost);
console.log(JSON.stringify(denormalizedPost).length);
