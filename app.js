let superCollection = new Collection();


DataService.getSeries().then(data => {
    fillFilmArrayFromServer(data);
    displayCollection();
})

function fillFilmArrayFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const serie = new Serie(object.title, object.creator, object.seasons, object.isCompleted, object.upVotes, object.downVotes, object.imageUrl, object.id);
        superCollection.addSerie(serie);
    }
}

function displayCollection() {
    const superCollectionDiv = document.getElementById('collection-list');
    superCollectionDiv.innerHTML = '';
    superCollectionDiv.classList.add('collection-list');
    displayButton();

    for (let i = 0; i < superCollection.seriesArray.length; i++) {
        const serie = superCollection.seriesArray[i];

        const newSection = document.createElement('section');
        newSection.classList.add('locandina');

        const img = document.createElement('img');
        img.src= serie.imageUrl;
        img.classList.add('locandina-img')

        const textDiv = document.createElement('div');
        newSection.appendChild(img);
        newSection.appendChild(textDiv);

        textDiv.appendChild(createTitle(serie));
        textDiv.appendChild(createInfo(serie));
        superCollectionDiv.appendChild(newSection);
        createButtonVote(superCollection, serie, newSection);
    }
}

function displayButton() {
    const sortByTitleBtn=document.getElementById('order-title-btn');
    sortByTitleBtn.innerHTML='Order by title';
    sortByTitleBtn.addEventListener('click', (event)=>{
        orderByTitle(superCollection);
    })

    const sortByDownvoteBtn = document.getElementById('order-downvote-btn');
    sortByDownvoteBtn.innerHTML = 'Order by downvote';
    sortByDownvoteBtn.addEventListener('click', (event)=>{
        orderByDownvote(superCollection);
    })

    const sortByUpvoteBtn = document.getElementById('order-upvote-btn');
    sortByUpvoteBtn.innerHTML = 'Order by upvote';
    sortByUpvoteBtn.addEventListener('click', (event)=>{
        orderByUpvote(superCollection);
    })

    const sortByBestBtn = document.getElementById('order-best-btn');
    sortByBestBtn.innerHTML = 'Order by best';
    sortByBestBtn.addEventListener('click', (event)=>{
        orderByBest(superCollection);
    })
    
}

function createButtonVote(superCollection, serie, tag) {
    const btnUpvote = document.createElement('button');
    const btnDownvote = document.createElement('button');

    btnDownvote.classList.add('vote-btn');
    btnUpvote.classList.add('vote-btn');

    btnUpvote.innerHTML = 'Upvote';
    btnDownvote.innerHTML = 'Downvote';

    btnUpvote.addEventListener('click', (event)=>  
        {
        superCollection.increaseUpvote(serie);
        DataService.putSerie(serie).then(updatedSerie =>{
            displayCollection();
        })
        });

    btnDownvote.addEventListener('click', (event)=>  
        {
        superCollection.increaseDownvote(serie);
        DataService.putSerie(serie).then(updatedSerie =>{
            displayCollection();
        })
        });

    tag.appendChild(btnUpvote);
    tag.appendChild(btnDownvote);
}

function orderByBest(superCollection) {
    superCollection.sortByBest();
    displayCollection();
}

function orderByUpvote(superCollection) {
    superCollection.sortByUpvote();
    displayCollection();
}

function orderByTitle(superCollection) {
    superCollection.sortByTitle();
    displayCollection();
}



function orderByDownvote(superCollection) {
    superCollection.sortByDownvote();
    displayCollection();
}



function createTitle(serie) {
    const spanTitle = document.createElement('span');
    const titleNode = serie.getTitle;
    spanTitle.classList.add('serie-name');
    spanTitle.innerHTML=titleNode;
    return spanTitle;
}

function createInfo(serie) {
    const spanInfo = document.createElement('span');

    const infoNode = '<br> Created by' + serie.getCreator + '<br>'+'Seasons: ' + serie.getSeasons + '<br>' + '↑'  + ' :'+ serie.upVotes + '<br>' + '↓' + ' :' + serie.downVotes;
    spanInfo.innerHTML=infoNode;
    return spanInfo;
}

console.log('esercizio, id riunioni meet');

let meetId = /[a-z]{3}-[a-z]{4}-[a-z]{3}/;
testRegex(meetId, 'ikz-tjrf-igh'); //true
testRegex(meetId, 'mmf-tire-sgm'); //true
testRegex(meetId, 'mmf-aaaaaa-sgmaa'); //false
testRegex(meetId, '___mmf-tire-sgm'); //true
testRegex(meetId, 'm_f-tire-sgm'); //false

function testRegex(pattern, string) {
    console.log("testing string '" + string + "': " + pattern.test(string));
}

console.log('riconoscere la data \n\n');
let datePattern = /^\d{1,2}\/\d{1,2}\/\d+( [ad]\.c\.)?$/
testRegex(datePattern, '10/3/2023'); //true
testRegex(datePattern, '11/10/1992'); //true
testRegex(datePattern, '5/5/1800 a.c.'); //true
testRegex(datePattern, '10-03-2002 d.c'); //false
testRegex(datePattern, '500/10/10000 a.c'); //true (pattern presente da qualche parte all'interno della stringa)

console.log('esercizio: riconoscere un dominio \n\n');
let domainPattern=/^[a-zA-Z][\w\-]*(\.[a-zA-Z]+)*(:\d+)?$/
testRegex(domainPattern, 'google.com'); //true
testRegex(domainPattern, 'localhost:8080'); //true
testRegex(domainPattern, 'english-.site.co.uk:21'); //true
testRegex(domainPattern, 'localhost:'); //false
testRegex(domainPattern, 'personal-home-page.it'); //true
testRegex(domainPattern, '.page.it'); //false
testRegex(domainPattern, 'www.my-life-sucks.it'); //false


