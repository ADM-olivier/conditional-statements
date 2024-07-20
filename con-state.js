let userIsAdmin = true;
let userIsLoggin = false;
let userPay = true;
const userDsicount = userPay && userIsAdmin && !userIsLoggin ? 25 : 0;
console.log(userDsicount);
//that expression of user getting disount, more advanced that previous one.


 userIsAdmin = true;
 userIsLoggin = false;
 userPay = true;
 const discount = userPay + userIsAdmin;
 console.log(discount);



let distance = 40;
const shipping = distance <=25 ? 20 :40;
console.log(shipping); 
//this code says that if distance is more that 25km shippinng price is 40, if its less its than 25km shipping cost is 20,
//it determines shipping cost upon the distance.
//the distance is more than 25, so 40 > 25, therefore its false/ it its false ternary operator shows second value, so its 40

//

//our very first "if...else" statement
userIsAdmin = true;
userIsLoggin = false;
userPay = false;
const listOfProducts = !userPay && (userIsAdmin || userIsLoggin);
if(listOfProducts){
    console.log('shoes, sweater, T-SHIRT');
}
//it checked expression, value and showed us list, first it checked all 3 values and determined its true,
//as we know when 'if' is true it shows us our value, when 'if' isn't true it didn't shows us anything.
//when 'if' is false it didn't shows us value, until we use else statement, which we use in next expamle
userIsAdmin = true;
userIsLoggin = false;
userPay = true;
const showButton = userPay && (userIsAdmin || userIsLoggin) ;
if(showButton){
    console.log('look for other product')
}else{console.log('paynow')};
//as wee see 'IF' is false, but we still get value of expression, that beacuse of 'ELSE' statement



//block sccope and child parent behaviour
userIsAdmin = true;
userIsLoggin = false;
userPay = true;
const sale = userIsAdmin && !userPay
let Discount;
if(sale){
    console.log('look for other product');
    Discount = 0;  
}else{console.log('paynow');
    Discount = 25 ;
}
console.log(Discount);
//here we create if/else statements, as well as block statement, we create block inside a block, child block,
//as we learn created value in child block won't show up in parent block, 
//so we create value in parent block which showed up in child and parrent block as well

//create block-give value, behavior in child and parent 
let y = 5;
{
    console.log(y);
}
//it will show expression, as value is given in parent block, as we parents block shows up in his child blocks as well
//beside block doesn't need 'if'||'else' to show value, it can work on his own


//create block in child block and give value
let x = 1;
{
    let x = 10
    console.log(x);
    {
        let x = 100;
        console.log(x);
        {
            let x = 1000;
            console.log(x);
        }
    }
}
console.log(x);
//value created in child block wont be shown in parrent block, but value created in parrent block is possible to be shown in child block
//value can't cross his parent border, and be shown in mother block.
//but value created in parent block can cross boder into child block.


//
//IF ELSE  together, we use if else between if and else statements, which means if first 'IF' isn't true then it ckeckes expression
//looks forward and calcualtes next 'IF ELSE' statement, determines if its true or not, after that if its true it shows 'if else' statement
//if its false it moves to next statement, beside you can write as many 'IF ELSE' statement as you want.
//'else if' statement is need to comand another order if first won't work:EX

//lets use 'IF ELSE' statemant

userIsAdmin = false;
userIsLoggin = false;
userPay = true;
let socialuriDaucveli =false;
const Sale = !userPay && userIsLoggin;
if(socialuriDaucveli){
    console.log('50%');
}else if(sale){
    console.log('25%');
}else if(userIsAdmin){
    console.log('25%');
}else{
    console.log('pay now');
}
//men or women gender using 'if', 'else if'
let women = 0
let men = 1
if(women){
    console.log('its women');
}else if(men){
    console.log('its kacia yverebiani');
}






