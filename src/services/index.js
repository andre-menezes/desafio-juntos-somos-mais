export default async function fetchApi() {  
  try {
    const requestUsers = await fetch('http://localhost:3001');
    const { results } = await requestUsers.json();
    return results;
  } catch (error) {
    return error;
  } 
}
