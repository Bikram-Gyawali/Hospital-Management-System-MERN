const returnURLFromObjectOfStrings = (image) => {
    let string = "";
    for (let char in image[0]) {
        string += image[0][char];
    }
    return string;
};

export default returnURLFromObjectOfStrings;