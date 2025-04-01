// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function do_something(count){
setTimeout(()=>{
        console.log(count);
        do_something(++count);
},1000)
}

do_something(1);