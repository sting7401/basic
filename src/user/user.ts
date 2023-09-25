export const fetchUserDate = async () => {
    const response= await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();

    console.log(user.name);

    return {
        name: user.name,
    }
}