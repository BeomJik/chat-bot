import { Configuration, OpenAIApi } from 'https://cdn.skypack.dev/openai'

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

openai.createCompletion({
  model: "text-davinci-002",
  prompt: "hello",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
}).then((result) => {
  console.log(result.data);
});

let chatContent = document.querySelector('.chat-content');

let chatBox = document.querySelector('.chat-box');

let send = document.querySelector('#send');