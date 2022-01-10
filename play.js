const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
   return (
      'Name is ' +
      userName +
      ', age is ' +
      userAge +
      ' and the user has hobbies: ' +
      userHasHobby
   );
}

console.log(summarizeUser(name, age, hasHobbies));


const fetchData = () => {
   const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('Done!');
      }, 1500);
   });
   return promise;
};

setTimeout(() => {
   console.log('Timer is done!');
   fetchData()
      .then(text => {
         console.log(text);
         return fetchData();
      })
      .then(text2 => {
         console.log(text2);
      });
}, 2000);

console.log('Hello!');
console.log('Hi!');
