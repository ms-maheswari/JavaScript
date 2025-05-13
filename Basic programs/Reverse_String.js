
function reverse(name){
    let rev ="";
    for(var i=name.length-1; i>=0;i--){
        rev+=name.charAt(i);
    }
    console.log(rev);
}

let myname = "maheswari";
reverse(myname);  // irawseham
