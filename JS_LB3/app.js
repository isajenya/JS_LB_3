function isFirstLetterBig(){
    let line = prompt("Please, input line:", "Line");
    if(/(^[A-Z].*)$/.test(line)){
        alert("First line is big");
    }else {
        alert("First line is small");
    }
}

function countOfWords(){
    const count = () => {
        let line = prompt("Please, input line:", "Line");
        const regex = /[a-zA-Z]+/g
        return ((line || '').match(regex) || []).length
    }
    let countOfWords = count();
    alert("Number of words = " + countOfWords);
}

function isTime(){
    let line = prompt("Please, input line:", "Line");
    if(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(line)){
        alert("Yes, it`s time");
    }else {
        alert("No, it`s not time");
    }
}

