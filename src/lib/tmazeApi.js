const baseUrl = " https://api.tvmaze.com";

export async function getShows(query) {
  const url = `${baseUrl}/search/shows?q=${query}`;
  const response = await fetch(url);
  const shows = await response.json();

  const results = {
    length: shows.length,
    shows: shows,
  };

  return results;
}

export async function getShowById(id) {
  const url = `${baseUrl}/shows/${id}?embed=cast`;
  const response = await fetch(url);
  const show = await response.json();

  return show;
}
