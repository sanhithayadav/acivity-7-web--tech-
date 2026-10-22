function getMarks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const marks = [90,80,100];
            resolve(marks);
        }, 2000);
    });
}

module.exports = getMarks;