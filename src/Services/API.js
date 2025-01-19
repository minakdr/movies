const API_KEY = "cc77d13c9408bc8cfee7ee73c9e83820";
const BASE_URL = "https://www.themoviedb.org/3"; // 3 refers to the API version

export const getPopularMovies = async () => {
  // async means it will take some time before we get the result  . fetch is used to make a server request
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
