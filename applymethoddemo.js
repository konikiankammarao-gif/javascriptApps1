// apply method
const studentInfo = {
    studentdetails : function (qualification , branch){
        return this.rollnumber + " " + this.sname + " " + qualification + " " + branch;
    }    
}
const student = {
    rollnumber : 1234,
    sname : "ankammarao"
}
console.log(studentInfo.studentdetails.apply(student,['btech','cse']));