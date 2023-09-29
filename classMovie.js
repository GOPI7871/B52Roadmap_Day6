// class movie

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get PG(){
        var rating="";
        if(rating==="PG13"){
        return "rating is"+this.rating;
        }else{
            return "rating   " + " PG ";
        }
    }
}
var review = new movie("casino royal","Eon Productions","PG13");
console.log(review.title,review.studio,review.PG);

