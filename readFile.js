const fs = require('fs');
const path = require('path');
let lu = path.resolve(__dirname, './a.html')
function ReadFile(lu) {
    return new Promise((resolve, reject) => {
        fs.readFile(lu, (err, data) => {
            if (err) rejecr(err);
            resolve(data);
            return data
        })
    })
}
ReadFile(lu);

function fn() {

}