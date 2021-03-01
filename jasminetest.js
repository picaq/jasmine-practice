let appender = function(append) {
    let appended = (string) => {
        return string + append;
    }
    return appended;
}

let apple = () => {
    return "trees";
}

// module.exports = appender;
module.exports = {
    appender: appender,
    apple: apple
};