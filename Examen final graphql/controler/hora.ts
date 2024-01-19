

export const sacarhora = async(pais:string): Promise<string> => {

    const url = `https://api.api-ninjas.com/v1/worldtime?city=${pais}`

    const response= await fetch(url);

    const data= await response.json();

    return data.datetime;
}