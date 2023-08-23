export function getAuthToken(){
    const token=sessionStorage.getItem('token');
    return token;
}

export function getAuthHrToken(){
    const hrToken=sessionStorage.getItem('hrToken');
    return hrToken;
}

export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem('hrToken');
}