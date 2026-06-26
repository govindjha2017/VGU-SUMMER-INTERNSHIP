var p="HEllo"
function outer(){
    var x=50;
    function inner(){
        x++;
        var a=10;
        console.log(x);
        console.log(a);
        function innerMost(){
            console.log(x);
            var x= 21;
            console.log(x);
        }
        innerMost()
    }

    inner()
}
console.log(p);
outer();
console.log(x);
console.log("END");