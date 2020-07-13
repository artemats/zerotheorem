export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const toURLTransform = (text) => {
    return text.toLowerCase().replace(/\s/g, '-');
};