class Collection{
    constructor(seriesArray=[]){
        this.seriesArray=seriesArray;
    }

    addSerie(series){
        this.seriesArray.push(series);
    }

    removeFilm(series){
        this.seriesArray.filter((element) => element!==series)
    }

    sortByTitle(){
        return this.seriesArray.sort((series1,series2) => series1.compareByTitle(series2));
    }

    sortByUpvote(){
        return this.seriesArray.sort((series1,series2) => series1.compareByUpvote(series2));
    }

    sortByDownvote(){
        return this.seriesArray.sort((series1,series2) => series1.compareByDownvote(series2));
    }

    sortByBest(){
        return this.seriesArray.sort((series1,series2) => series1.compareByRating(series2));
    }

    increaseUpvote(serie){
        serie.increaseUpvote = ++serie.upVotes;
    }
    increaseDownvote(serie){
        serie.increaseDownvote = ++serie.downVotes;
    }

}