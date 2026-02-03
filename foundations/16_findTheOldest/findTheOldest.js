const findTheOldest = function(people) {
    function getAge(person) {
        let age = 0;
        if (!("yearOfDeath" in person)) {
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        return age;
    }
    const currentYear = new Date().getFullYear();
    return people.reduce((oldestPerson, currentPerson) => {
        const currentAge = getAge(currentPerson);
        const oldestAge = getAge(oldestPerson);
        return currentAge > oldestAge ? currentPerson : oldestPerson;
    }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
