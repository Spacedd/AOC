const input = require("./input");

const passports = input.split("\n\n");

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

let count = 0;

const validateField = (field, value) => {
    let valid = true;
    switch(field){
        case "byr":
            if (value < 1920 || value > 2002){
                valid = false;
            }
            break;
        case "iyr":
            if (value < 2010 || value > 2020){
                valid = false;
            }
            break;
        case "eyr":
            if (value < 2020 || value > 2030){
                valid = false;
            }
            break;
        case "hgt":
            const height = value.substring(0, value.length -2);
            if (value.substring(value.length -2, value.length) === "cm"){
                if (height < 150 || height > 193){
                    valid = false;
                }
            } else if (height < 59 || height > 76){
                valid = false;
            }
            break;
        case "hcl":
            if (!value.match(/^#[a-f0-9]{6}$/)){
                valid = false;
            }
            break;
        case "ecl":
            if (!value.match(/^(amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth)$/)){
                valid = false;
            }
            break;
        case "pid":
            if (!value.match(/^[0-9]{9}$/)){
                valid = false;
            }
            break;
    }
    return valid;
}

const isPassportValid1 = (passport) => {
    let valid = true;
    fields.forEach((field) => {
        if (!passport.includes(field + ":")){
            valid = false;
        }
    })
    return valid;
};

const isPassportValid2 = (passport) => {
    let valid = true;
    fields.forEach((field) => {
        if (passport.hasOwnProperty(field)){
            valid = validateField(field, passport[field]) && valid;
        } else {
            valid = false;
        }
    })
    return valid;
}

passports.forEach((passport, i) => {
    let passportObj = {}
    let passportDetails = passport.split(/[: \n]/g)
    for (i=0; i < passportDetails.length; i+=2){
        passportObj[passportDetails[i]] = passportDetails[i+1];
    }
    if (isPassportValid2(passportObj)){
        count ++;
    }
})

console.log(count);
