export async function fetchApi() {  
  try {
    const requestUsers = await fetch('http://localhost:3001');
    const { results } = await requestUsers.json();
    return results;
  } catch (error) {
    return error;
  } 
}

export async function fetchFederatedUnits() {
  const endpoint = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
  try {
    const requestUsers = await fetch(endpoint);
    const results = await requestUsers.json();
    return results;
  } catch (error) {
    return error;
  } 
}
