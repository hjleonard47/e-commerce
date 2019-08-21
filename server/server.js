const app = require('./app');

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

module.exports = server;