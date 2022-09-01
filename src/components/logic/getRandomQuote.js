const baseURL = 'https://api.quotable.io';

const getRandomQuote = async () => {
  const response = await fetch(`${baseURL}/random?tags=inspirational`);
  if (!response.ok) {
    return { content: "Couldn't retrieve quote" };
  }

  const data = await response.json();
  return data;
};

export default getRandomQuote;
