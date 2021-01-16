

export const _get= () => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=`,
    {
      method: "GET",
    }
  )
}

const request = async (params) => {
  const { method, val } = params;
  const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Origin": "*",
  });

  const response = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${val}`,
    {
      method,
      headers
    }
  )

  let json;
  try {
    json = await response.json();
  } catch (error) {
    console.log(error);
  }
  if (response.status >= 200 && response.status <= 300) {
    return json;
  } else {
    const message = json && json.error ? json.error : response.status;
    throw new Error(message);
  }
}

export const doSearch = (text) => {
  console.log(text)
  const params = {
    method: "GET",
    val: text
  }
  request(params).then(json => console.log('json', json))
}