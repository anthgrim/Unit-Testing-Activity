const greet = (gParam) => {
    //If Null
    if(gParam === null) return `Hello there!`;

    //If the param is type of string
    if(typeof(gParam) === "string"){
        //If it's uppercase
        if(gParam == gParam.toUpperCase()) return `HELLO ${gParam}!`;

        //Regular Single String
        return `Hello, ${gParam}`;
    }

    //If it's an array
    if(typeof(gParam) == 'object') {
        let greet = "Hello";
        for(let i = 0; i < gParam.length; i++){
            greet += ", " + gParam[i];
        }
        return greet;
    }
}

module.exports = greet;