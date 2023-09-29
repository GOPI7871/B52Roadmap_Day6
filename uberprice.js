class uber{
    constructor(distanceKM,basicfare){
        this.distanceKM = distanceKM;
        this.basicfare = basicfare;
    }
    get ufare(){
        return "total ride fare is: "+ this.distanceKM*this.basicfarefare;
    }
}
var total = new uber(10,10);
console.log(total.ufare);


