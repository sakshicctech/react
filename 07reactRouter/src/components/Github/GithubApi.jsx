export  const githubInfoLoader = async (username) => {
    const response = await fetch(`https://api.github.com/users/bradtraversy`);
    const data = await response.json();
    return data;
}