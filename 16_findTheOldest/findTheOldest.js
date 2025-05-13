const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear()
        };

        if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear()
        };
        
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;

        return aAge < bAge ? 1 : -1
    });

    return oldest[0];
};


// Do not edit below this line
module.exports = findTheOldest;
