async function pokeapi(url){
    try{
        const response=await fetch(url);
        const result=await response.json();
        console.log(result);
        const Name=result.chain.species.name;
        console.log("Name : ",Name);
    
    }
    catch(error){
        console.error(error);
    }
    finally{
        console.log("Operation finished");
    }
}
pokeapi("https://pokeapi.co/api/v2/evolution-chain/50")