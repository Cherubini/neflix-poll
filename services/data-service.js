class DataService{
    
    static getSeries(){
        return fetch('https://643693e63e4d2b4a12d60917.mockapi.io/todos')
                    .then(resp => resp.json())
    }

    static putSerie(serie){
        const jsonTodo = JSON.stringify(serie);
        return fetch('https://643693e63e4d2b4a12d60917.mockapi.io/todos/'+serie.id, {method: 'PUT', headers:{'content-type':'application/json'}, body:jsonTodo})
        .then(resp => resp.json())
    }
}