const toCapitalize = string => {
    const words = string.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ") 
    }
    
    const longstr = "gdfgdf fhdfghjgfj jghfjghf jfhgjfgh";
    
    ;
    console.log(toCapitalize(longstr));
    module.exports = toCapitalize;
