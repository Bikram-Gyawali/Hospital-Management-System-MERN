const returnURLFromObjectOfStrings = (image) => {
    let string = "";
    if (image == null) return '';
    for (let char in image[0]) {
        string += image[0][char];
    }
    return string;
};

export default returnURLFromObjectOfStrings;