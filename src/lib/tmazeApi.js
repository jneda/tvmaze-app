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

export async function getPersonById(id) {
  let url = `${baseUrl}/people/${id}?embed=castcredits`;
  let response = await fetch(url);
  let person = await response.json();
  person = {
    name: person.name,
    image: person.image,
  }

  url = `${baseUrl}/people/${id}/castcredits?embed[]=show&embed[]=character`;
  response = await fetch(url);
  let credits = await response.json();
  credits = credits.map(credit => {
    const { _embedded: { show, character } } = credit;
    return { show, character };
  })

  return { person, credits };
}
