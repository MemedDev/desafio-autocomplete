'user strict';

function RequestService(env) {
  const url = 'http://nathpaiva.com.br/memed.json';

  return fetch(url)
    .then(data => data.json())
    .then(data => data)
    .catch(error => error);
}

export default RequestService;
