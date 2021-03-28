const CustomError = require("../extensions/custom-error");

const chainMaker = {
    row: [],

    getLength() {
        return this.row.length;
    },
    addLink(value) {
        this.row.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position <= 0 || position > this.row.length || typeof position !== "number") {
            this.row.length = 0;
            throw new Error('Error');
        } else {
            this.row.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.row.reverse();
        return this;
    },
    finishChain() {
        let rowChain = this.row.join('~~');
        this.row.length = 0;
        return rowChain;
    }
};

module.exports = chainMaker;