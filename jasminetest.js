let appender = function(append) {
    let appended = (string) => {
        return string + append;
    }
    return appended;
}

module.exports = appender;