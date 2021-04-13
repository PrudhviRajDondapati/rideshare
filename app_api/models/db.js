const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://prudhvi:pRaj0219@cluster0.ddamr.mongodb.net/Ride_sre?retryWrites=true&w=majority';
mongoose.connect(dbURI,{dbName:'Ride_share'});
mongoose.connection.on('connected', () => {
    console.log(`Prudhvi connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Prudhvi, Your Connection is having some errors:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Prudhvi connection was disconneted');
});
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Prudhvi connection disconnected through ${msg}`);
        callback();
    });
};
process.once('SIGUSR2' , () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});
require('./ridesopted');
require('./ridesposted');
require('./user');
require('./login');
