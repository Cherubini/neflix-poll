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

function displayCollectionBrutta() {

    const container = document.getElementById('collection-list');
    displayButton();
    container.innerHTML = '';
    for (let i = 0; i < superCollection.seriesArray.length; i++) {
        const serie = superCollection.seriesArray[i];
        container.innerHTML+= 
        `
            <div>
                <img class="serie-img" src="${serie.imageUrl}" alt="${serie.getTitle}">
                <div>
                    <span class="serie-title">${serie.getTitle}</span>
                    <div>
                        <span>Created by ${serie.getCreator}</span>
                        <span>Seasons: ${serie.getSeasons}</span>
                    </div>
                </div>
            </div>
            <div>
                <div class = "button-container">
                    <button> Up </button>
                    <span>${serie.getUpVotes}</span>
                    <button> Down </button>
                    <span>${serie.getDownVotes}</span>
                </div>
            </div>
        `
    }    
    
}

function displayCollection () {
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
function longest(s1, s2) {
    let longest= s1>s2?s1:s2;
  }