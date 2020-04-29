const path = require('path');
const express = require('express');

console.log(__dirname);

const app = express();

const publicDirectoryPath = path.join(__dirname,'..');
console.log(publicDirectoryPath);

app.use(express.static(publicDirectoryPath));

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})