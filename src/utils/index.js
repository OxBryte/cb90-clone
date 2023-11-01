// To shorten text length
export const shortenText = (text, num) => {
    if (text.length > num) {
        return text.substring(0, num) + '...';
    }
    return text;
}

// To get the initials of the user
export const getInitials = function (string) {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};
