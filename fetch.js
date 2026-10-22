async function PegarDados (){

    try {
        const response = await fetch("http://localhost:3000/api/dados")
        if(!response.ok) console.log("Erro")
            const data = await  response.json()
        console.log(data)
    } catch (error) {
       console.log(Error)     
    }

}

PegarDados()