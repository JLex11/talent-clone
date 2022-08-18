let page = 1;

/* export const getJobs = async ({ search_terms, location }) => { 
  page++;

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'e3842244cbmsh3ef8d368be208c9p164506jsn345b1d23a55e',
      'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
    },
    body: `{"search_terms":"${search_terms}","location":"${location}","page":"${page}"}`
  };

  // location code if needed: 30301
  
  return fetch('https://linkedin-jobs-search.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
}; */

export const getJobs = async ({ search_terms, location }) => { 
  page++;

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '61443bbd1cmsh5b5610d7f7e9145p10ab02jsnb3a93317ebb2',
      'X-RapidAPI-Host': 'indeed11.p.rapidapi.com'
    },
    body: `{
      "search_terms":"${search_terms}",
      "location":"${location}",
      "page":"${page}"
    }`
  };
  
  fetch('https://indeed11.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
};