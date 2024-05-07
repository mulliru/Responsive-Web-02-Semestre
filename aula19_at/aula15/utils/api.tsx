// utils/api.tsx
interface Post{
    userId  : number;
    id      : number;
    title   : string;
    body    : string;
}

export const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async (endpoint:string): Promise<Post[] | null> =>{
    try{
        const response = await fetch(`${API_URL}/${endpoint}`);
        if(!response.ok){
            throw new Error('Falha ao conectar com a API');
        }
        return await response.json();
    } catch (error){
        console.log("Erro de conexão: ", error);
        return null;
    }
}