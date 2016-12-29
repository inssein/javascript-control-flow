var async = require('async');

async.waterfall([
    cb => getMessage(1, cb),
    (message, cb) => getTag(1, (err, tag) => cb(err, message, tag)),
    (message, tag, cb) => tagMessage(message, tag, err => cb(err, message, tag)),
    (message, tag, cb) => indexMessage(message, err => cb(err, message, tag))
], (err, message, tag) => {
    if (err) {
        return console.log("An error occured");
    }

    console.log("Tagged message:" + message.id + " with tag:" + tag.id);
});

function getMessage(id, cb) {
    setTimeout(function () {
        cb(null, {
            id: 1,
            subject: "Test Message",
            to: "to@sedna.s3s.lab",
            from: "from@sedna.s3s.lab"
        });
    }, 100);
}

function getTag(id, cb) {
    setTimeout(function () {
        cb(null, {
            id: 1,
            name: "Tag"
        });
    }, 100);
}

function tagMessage(message, tag, cb) {
    setTimeout(function () {
        cb(null, true)
    }, 200);
}

function indexMessage(message, cb) {
    setTimeout(function () {
        return cb(null, true);
    }, 150);
}