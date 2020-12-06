const input = require("./input");

const groups = input.split("\n\n");

let count = 0;

const createUniqueGroupAnswers = (persons, answerArr) => {
    persons.forEach((person) => {
        let noOfQs = person.length;
        for (i = 0; i < noOfQs; i ++){
            if (!answerArr.includes(person[i])){
                answerArr.push(person[i]);
            }
        }
    })
    return answerArr;
}

const filterUniqueAnswers = (persons, answerArr, allAnswer) => {
    if (persons.length === 1){
        allAnswer += persons[0].length;
    } else {
        persons.forEach((person) => {
            let personAnswerArr = person.split("");
            answerArr = answerArr.filter((allAnswerArr) => {
                return personAnswerArr.includes(allAnswerArr);
            })
            //console.log(answerArr);
        })
    }
    return answerArr.length;
}

groups.forEach((group) => {
    let persons = group.split("\n"), answerArr = [], allAnswer = 0;
    answerArr = createUniqueGroupAnswers(persons, answerArr);
    count += filterUniqueAnswers(persons, answerArr, allAnswer);
})

console.log(count);