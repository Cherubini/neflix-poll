class DataService{
    static DATA = 'https://643693e63e4d2b4a12d60917.mockapi.io/todos/';

    static getSeries(){
        return fetch(this.DATA)
                    .then(resp => resp.json())
    }

    static putSerie(serie){
        const jsonTodo = JSON.stringify(serie);
        return fetch(this.DATA+serie.id, {method: 'PUT', headers:{'content-type':'application/json'}, body:jsonTodo})
        .then(resp => resp.json())
    }
}