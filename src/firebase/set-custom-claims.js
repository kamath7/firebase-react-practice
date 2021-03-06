var admin = require("firebase-admin");

var serviceAccount = require("./grid-react-firebase-adminsdk-kdveu-7ba5d261de.json");
var uid = process.argv[2]

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.auth().setCustomUserClaims(uid, {admin:true}).then(()=>{
    console.log(`Custom claims set for user ${uid} `)
    process.exit()
}).catch((error)=>{
    console.log(error)
    process.exit(1)
})