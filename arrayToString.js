function arrayToString(array) {
    const chunks_array = [];

    if (!Array.isArray(array)) {
        throw new TypeError('Argument must be an array', 'arrayToString.js', 4);
    }

    for (let item of array) {
        const len = chunks_array.length;
        let last_chunk;
        let last_item;

        if (!len) {
            chunks_array.push([item]);
            continue;
        }

        last_chunk = chunks_array[len - 1];
        last_item = last_chunk[last_chunk.length - 1];

        if (last_item + 1 === item) {
            last_chunk.push(item)
        } else {
            chunks_array.push([item])
        }
    }

    return chunks_array.
        map(chunk => {
            return getStringByChunk(chunk);
        })
        .join();

}

function getStringByChunk(chunk) {
    const len = chunk.length;

    return len <= 2 ? chunk.toString() : `${chunk[0]}-${chunk[len - 1]}`;
}

module.exports = function (array, cb) {
    return new Promise((res, rej) => {
        process.nextTick(() => {
            try {
                const result = arrayToString(array);
                res(result);
            } catch(error) {
                rej(error);
            }
        })
    })
};