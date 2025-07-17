// #!/usr/bin/env node

'use strict';

//IGNORE BELOW
/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//IGNORE ABOVE
//array of customer objects

const maleCount = function(array) {
    const mans = _.filter(array, function(customer){
        return customer.gender === 'male';
    });
    return mans.length;
    //why  nothing work now
    /*
    let maleCount = [];
    for (let i=0; i<array.length; i++){
        if (array[i].gender === "male"){
            maleCount.push(array[i]);
        }
    }
    return maleCount.length;
    */
    /*
   let mans = 0;
   for (let i=0; i<array.length; i++){
    if (array[i].gender === "male"){
        mans++;
    }
   }
   return mans; */
};

const femaleCount = function(array){
    const gyals = _.filter(array, function(customer){
        return customer.gender === "female";
    });
    return gyals.length;
};
    

const oldestCustomer = function(array){


};
/*
const youngestCustomer;

const averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;
*/
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
