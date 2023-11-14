const livroid = document.querySelector('input[type=text]')
const btnBuscar = document.querySelector('input[type=button]')

btnBuscar.onclick = function(){
    //Fazendo a conexão com a API
    fetch('http:localhost:8080/livros/' + livroid.value)
    .then(response => {
        if(response.ok){
            return response.json()
        }

        else{
            throw new Error('Erro na requisição.');
        }
        
    })
    .then(data => {
        document.querySelector('#id').textContent = data.id
        document.querySelector('#nome').textContent = data.nome
        document.querySelector('#editora').textContent = data.editora
        document.querySelector('#resumo').textContent = data.resumo
        document.querySelector('#autor').textContent = data.autor
        // E outros atributos que vc desejar
        console.log(data.bio)
})
.catch(error => {
    console.log('Erro:' + error)
})

}