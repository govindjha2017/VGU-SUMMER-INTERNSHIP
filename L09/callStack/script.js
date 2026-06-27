console.log("start");
function fun(){
    var a=11;
    function abc(){
        var money=50;
        a++;
        console.log(a);
        console.log(money);

    }
    console.log(a);
    abc();
    console.log(money);
}
console.log("hello");
fun();
console.log("end");