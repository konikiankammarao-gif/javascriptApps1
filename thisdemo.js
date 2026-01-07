// this keyword
const empInfo = {
     firstName : "ankammarao",
     lastName : "koniki",
     empDetails : function () {
        return this.firstName + " " + this.lastName;
     }
};
console.log(empInfo.empDetails());
 