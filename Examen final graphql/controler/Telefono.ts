

export const sacarLugar = async(telefono:string): Promise<string> => {
    const API_KEY= Deno.env.get("API_KEY")

    
    const url = `https://api.api-ninjas.com/v1/validatephone?number=${telefono}`

    const response= await fetch(url);

    const data= await response.json();

    return data.country;
}