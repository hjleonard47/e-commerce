import app from './app';

const PATH = 3000;

const server = app.listen(PATH, () => {
    console.log(`Server is running on ${PATH}`);
});

export default server;