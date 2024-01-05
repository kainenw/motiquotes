// LLM
async function generate(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-base",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  let string = JSON.stringify(result);
  string = string.split(":")[1].split('"')[1];
  console.log(string);
  return string;
}

// DOM elements
const button = document.getElementById("button");
const output = document.getElementById("output");

// Click
const handleClick = async () => {
  const quote = await generate({
    inputs: "Here is an inspirinly optimistic motivational statement:",
  });
  output.innerHTML = quote;
};

button.addEventListener("click", handleClick);
