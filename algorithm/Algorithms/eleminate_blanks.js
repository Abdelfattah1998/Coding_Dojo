function blank(str) {
    j = 0;
    let newstring = "";
    for (let i = 0; i < str.length; i++) {

        if (str[i] != " " && str[i] != ",") {
            newstring += str[i];
            j++;
        }
    }
    return newstring;
}
console.log(blank("play that funky ,Music"))