
getMessage(1, function (err, message) {
    if (err) {
        return console.log("Error - Could not get the message.");
    }

    getTag(1, function (err, tag) {
        if (err) {
            return console.log("Error - could not get the tag");
        }

        tagMessage(message, tag, function (err, result) {
            if (err) {
                return console.log("Error - Could not tag the message");
            }

            indexMessage(message, function (err) {
                if (err) {
                    return console.log("Error - Could not index message");
                }
                
                console.log("Tagged message:" + message.id + " with tag:" + tag.id);
            });
        });
    })
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