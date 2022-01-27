
const User = require('../models/user');


exports.getProfiles = (req, res, next) => {
   User.find().then(users => {
      console.log(users)
      res.render('profile/profile', {
         prods: users,
         pageTitle: 'Profiles',
         path: '/profiles'
      });
   })
      .catch(err => {
         const error = new Error(err);
         error.httpStatusCode = 500;
         return next(error);
      })
};

// exports.getProfiles = (req, res, next) => {
//    User.find()
//       .then(users => {
//          console.log('hit')
//          res.render('profile/profiles', {
//             users: users,
//             path: '/profiles',
//             pageTitle: 'profile'
//          })
//       }).catch(err => {
//          console.log(err)
//          const error = new Error(err);
//          error.httpStatusCode = 500;
//          return next(error);
//       });
// };