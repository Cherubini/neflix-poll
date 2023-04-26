class Serie{
    
    constructor(title, creator, seasons = 1, isCompleted=false, upVotes = 0, downVotes = 0, imageUrl, id){
        this.title=title;
        this.creator=creator;
        this.seasons=seasons;
        this.isCompleted=isCompleted;
        this.upVotes=upVotes;
        this.downVotes=downVotes;
        this.imageUrl=imageUrl;
        if (id) {
            this.id = id;
        }
    }

    get getTitle(){
        return this.title+'';
    }

    get getCreator(){
        return this.creator+'';
    }

    get getSeasons(){
        return this.seasons;
    }

    get getIsCompleted(){
        return this.isCompleted;
    }

    get getUpVotes(){
        return this.upVotes;
    }

    get getDownVotes(){
        return this.downVotes;
    }

    compareByTitle(serie2){
        return this.title.localeCompare(serie2.title)
    }

    compareByUpvote(serie2){
        if (this.getUpVotes < serie2.getUpVotes) 
            return 1;
         else 
            return -1;          
        }

    compareByDownvote(serie2){
        if (this.getDownVotes < serie2.getDownVotes) 
            return 1;
            else 
            return -1;          
        }

    compareByRating(serie2){
        if (this.getUpVotes - this.getDownVotes < serie2.getUpVotes - serie2.getDownVotes) 
            return 1;
         else 
            return -1;          
    }
}
