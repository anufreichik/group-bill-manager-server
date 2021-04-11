import mongoose from 'mongoose';

export const connectionString = process.env.MONGO_CONNECTION_STRING;

 function dbConnect() {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
        .catch((err) => console.log(err));
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('CONNECTED');
});
db.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});
export default dbConnect;
