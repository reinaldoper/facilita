const URL_GET_OPTIMIZE = 'http://127.0.0.1:3000/api/'

export const getClients = async (headers, path) => {
  const clientResponse = await fetch(`${URL_GET_OPTIMIZE}${path}`, headers);
  const response = await clientResponse.json();
  return response;
}