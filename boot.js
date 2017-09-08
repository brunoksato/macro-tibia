var exec = require('child_process').exec;
exec('node ./spells.js', function(error, stdout, stderr) {
    console.log('START SPELLS');
    if (error !== null) {
        console.log('error');
    }
});

exec('node ./buyPotion.js', function(error, stdout, stderr) {
    console.log('START BUY POTION');
    if (error !== null) {
        console.log('error');
    }
});

exec('node ./usePotion.js', function(error, stdout, stderr) {
    console.log('START USE POTION');
    if (error !== null) {
        console.log('error');
    }
});

exec('node ./eatFood.js', function(error, stdout, stderr) {
    console.log('START EAST FOOD');
    if (error !== null) {
        console.log('error');
    }
});