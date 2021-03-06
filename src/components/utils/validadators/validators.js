export const required = value => {
    if (value) return undefined;
        return "Field is required"
};

export const maxLengthCreator = maxLength => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};

export const maxLength10 = maxLengthCreator(10);
export const maxLength255 = maxLengthCreator(255);