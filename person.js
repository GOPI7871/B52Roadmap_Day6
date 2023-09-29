class person{
    constructor(name,age,dob,address,qualification,proffession,contact){
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.address = address;
        this.qualification = qualification;
        this.proffession = proffession;
        this.contact = contact;
    }
}
var details = new person("GOPINATH RAVI",29,"11-MAR-1994","CHENNAI","BE CSE","DEVELOPER",7200825943);
console.log("name:"+details.name,"age:"+details.age,"dob:"+details.age,"address:"+details.address,"qualification:"+details.qualification,"proffession:"+details.proffession,"contact:"+details.contact);