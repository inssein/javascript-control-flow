Promise
    .all([getMessage(1), getTag(1)])
    .then(([message, tag]) => {
        tagMessage(message, tag)
            .then(_ => indexMessage(message))
            .then(_ => console.log("Tagged message:" + message.id + " with tag:" + tag.id))
    })
    .catch(function () {
        console.log("An error occured while adding tag to the message.");
    });

type Message = {
    id: number,
    subject: string,
    to: string,
    from: string
};

type Tag = {
    id: number,
    name: string
};

function getMessage(id): Promise<Message> {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve({
                id: 1,
                subject: "Test Message",
                to: "to@sedna.s3s.lab",
                from: "from@sedna.s3s.lab"
            });
        }, 100);
    });
}

function getTag(id): Promise<Tag> {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve({
                id: 1,
                name: "Tag"
            });
        }, 100);
    });
}

function tagMessage(message, tag): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true)
        }, 200);
    });
}

function indexMessage(message): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true);
        }, 150);
    });
}