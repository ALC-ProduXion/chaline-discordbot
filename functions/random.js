const { client } = require("../index.js")
module.exports = {
    // log in discord channel & console
    string: function (myLength) {
        const chars =
            "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        const randomArray = Array.from(
            { length: myLength },
            (v, k) => chars[Math.floor(Math.random() * chars.length)]
        );

        const randomString = randomArray.join("");
        return randomString;
    },

    // log only in discord channel
    int: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },
};