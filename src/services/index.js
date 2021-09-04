export default async function fetchApi() {  
  try {
    const requestUsers = await fetch('https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json');
    const { results } = await requestUsers.json();
    return results;
  } catch (error) {
    return error;
  } 
}
