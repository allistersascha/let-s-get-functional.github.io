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
    let elder = 0;
    let name = "";
    for (let i=0; i<array.length; i++){
        if (array[i].age > elder){
            elder = array[i].age;
            name = array[i].name;
        }
    }
    return name;
};

const youngestCustomer = function(array){
    let bebbe = 5000;
    let name = "";
    for (let i=0; i<array.length; i++){
        if (array[i].age < bebbe){
            bebbe = array[i].age;
            name = array[i].name;
        }
    }
    return name;
};

const averageBalance = function(arr){
    let mahMoney = 0;
    for (let i=0; i<arr.length; i++){
        let bal = arr[i].balance;
        let noDwolla = bal.slice(1, bal.length);
        let noComma = noDwolla.replace(",", "");
        let moneyNum = Number(noComma);
        mahMoney += moneyNum;
    }
    
    let avg = mahMoney / arr.length;
    return avg;
};

const firstLetterCount = function(array, letter){
    let count = 0;
    for (let i=0; i<array.length; i++){
        if (array[i].name.startsWith(letter.toUpperCase())){
            count++;
        }
    }
    return count;
}

const friendFirstLetterCount = function(arr, cust, letter){
    let target = {};
    for (let i=0; i<arr.length; i++){
        if (arr[i].name === cust){
            target = arr[i];
            }
        }
        return firstLetterCount(target.friends, letter);
    }


const friendsCount = function(arr, name){
    //init empty array to push all the moots into
    let buddies = [];
    //loop thru the array of customer objects
    for (let i=0; i<arr.length; i++){
        //...and then loop thru the friends array within each object
        for (let j=0; j<arr[i].friends.length; j++){
            //if that person's friend list (arr[i].friends)
            //has a friend with the name param in it
            if (arr[i].friends[j].name === name){
                buddies.push(arr[i].name);
            }
            
        }
        //...then put the arr[i].name of the person who has the given name param 
        //into the array...at some point...i kept moving this buddies.push line
     
    }
    return buddies;
};

//return array of 3 most common tags among custies
const topThreeTags = function(arr){
    // make a new array of every instance of a tag in every custie obj
    let lowTags = [];
    //make a new array to return of just the top 3
    let topTags = [];
    //loop thru the custie array
    for (let i=0; i<arr.length; i++){
        //abstract a couple parameters
        let custie = arr[i]; //the custie object
        let tags = custie.tags; //the array of tags within that
            for (let j=0; j<tags.length; j++){
                lowTags.push(tags[j]);
        }
       
    };
    //count how many times each tag appears in the array
    //whichever 3 tags have the highest count, push to topTags
    //sort thru all tags so they're in alphabetical order
    //let alphaBet = Array.from(lowTags.toSorted());
    const freakObj = {};
    for (let i=0; i < lowTags.length; i++){
        if (Object.hasOwn(freakObj, lowTags[i])){
            freakObj[lowTags[i]] += 1;
        }else{
            freakObj[lowTags[i]] = 1;
        }
    };
  
    let freakArr = Object.entries(freakObj);
    let ordered = freakArr.sort((a,b) => b[1] - a [1]);

   topTags.push(ordered[0][0]);
   topTags.push(ordered[1][0]);
   topTags.push(ordered[2][0]);
   return topTags;
}


const genderCount = function(arr){
    return arr.reduce(function(acc, c){
        if (Object.hasOwn(acc, c.gender)){
            acc[c.gender] += 1;
        }else{
            acc[c.gender] = 1;
        };
        return acc;
    }, {});
    //arr in, object out
    //must use reduce
    /*let gender = {};
    let wemon = arr.reduce((acc, c) => arr[c].gender === "female");
    let menz = arr.reduce ((acc, c) => arr[c].gender === "male");
    let gangGang = arr.reduce((acc, c) => arr[c].gender === "non-binary");
    gender[male] = menz;
    gender[female] = wemon;
    gender[non-binary] = gangGang;
    return gender; */

};

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
