const getToken = () => ({
    headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    
});

export default getToken;