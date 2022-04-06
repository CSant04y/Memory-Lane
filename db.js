import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const config = require('./src/config');

const app = initializeApp(config.firebaseConfig);

const auth = getAuth(app);

module.exports = {
    app,
    auth,
}
// export default firebase;