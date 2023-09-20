const mongoose = require('mongoose');
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;
mongoose.set("strictQuery", false);
async function connect() {
    try {
        // const connectionString = `mongodb://${DB_USER}:vinhtieng@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
        const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
        console.log(`Connection String:::: ${connectionString}`)
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully')
    } catch (e) {
        console.log('Connect failure: ' + e)
    }
}

module.exports = { connect };