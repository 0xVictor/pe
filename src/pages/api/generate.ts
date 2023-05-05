import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
let basePromptPrefix = 'summarize the sentence: ';
const generateAction = async (req, res) => {
  // run first prompt
  console.log(
    `API: ${basePromptPrefix}${req.body.userInput}, ${req.body.command}`
  );
  let maxTokens = 250;
  switch (req.body.command) {
    case 'rewrite':
      maxTokens = 500;
      basePromptPrefix = 'rewrite the sentence: ';
      break;
    case 'summarize':
      maxTokens = 300;
      basePromptPrefix = 'summarize the sentence: ';
      break;
    case 'shorter':
      maxTokens = 250;
      basePromptPrefix = 'make the the following sentence short: ';
      break;
    case 'longer':
      maxTokens = 1500;
      basePromptPrefix = 'make the the following sentence longer: ';
      break;
    case 'explain':
      maxTokens = 500;
      basePromptPrefix = 'explain with great words the following sentence: ';
      break;
    case 'fix':
      maxTokens = 3000;
      basePromptPrefix = 'fix spelling and grammar: ';
      break;
    case 'professional':
      maxTokens = 3000;
      basePromptPrefix =
        'rewrite all the following sentence with a tone more professional: ';
      break;
    case 'casual':
      maxTokens = 3000;
      basePromptPrefix =
        'rewrite all the following sentence with a tone more casual: ';
      break;
    case 'funny':
      maxTokens = 3000;
      basePromptPrefix =
        'rewrite all the following sentence with a tone more funny: ';
      break;
    case 'continue':
      maxTokens = 3000;
      basePromptPrefix =
        'continue writting the following sentence. Be creative: ';
      break;
    case 'personal':
      maxTokens = 3000;
      basePromptPrefix = 'Do it: ';
      break;
  }

  console.log(maxTokens, basePromptPrefix, 'dados');
  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput} `,
    temperature: 1,
    max_tokens: maxTokens,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
