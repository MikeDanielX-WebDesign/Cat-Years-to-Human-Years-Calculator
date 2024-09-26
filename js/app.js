// Cat Years to Human Years Calculator // 

//  --- Clarification: ---  //
//When our furry feline is 2 years old, in human years he would be 24, 
//because in this time he has matured and is now a young adult.
//From 2 years old, 4 are added to each feline year
//this will give us the human age of our feline.

//See ya ^^

var human_age=0;
console.log("Cat    Human");
console.log("--------------");

for (let cat_age = 1; cat_age < 22; cat_age++) {
    if(cat_age==1){
        human_age=15;
    }else if(cat_age==2){
        human_age=24;
    }else{
        human_age=human_age+4;
    }
    console.log(" "+cat_age+"       "+human_age);
}
