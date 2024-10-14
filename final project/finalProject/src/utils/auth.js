export const isLoggedIn = () => {
    const userId = localStorage.getItem('userId');
    return userId !== null;
};