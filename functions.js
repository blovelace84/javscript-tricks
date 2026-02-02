function words(str){
    return str.split(' ');

    if(str.length === 0){
        return [];
    }
    console.log("This line will never be executed");

    words("Hello World");
}