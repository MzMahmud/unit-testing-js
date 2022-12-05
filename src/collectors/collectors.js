class Collectors {
    static toSet() {
        return [
            (set, element) => {
                set.add(element);
                return set;
            },
            new Set()
        ];
    }

    static #defaultCompareFunction = (a, b) => a === b ? 0 : a < b ? -1 : 1;

    static maxBy(compareFunction = Collectors.#defaultCompareFunction) {
        return [
            (max, element) => {
                if (max === null) {
                    return element;
                }
                return compareFunction(element, max) > 0 ? element : max;
            },
            null
        ];
    }

    static minBy(compareFunction = Collectors.#defaultCompareFunction) {
        return [
            (max, element) => {
                if (max === null) {
                    return element;
                }
                return compareFunction(element, max) < 0 ? element : max;
            },
            null
        ];
    }

    static joining(delimiter = ",", prefix = "", suffix = "") {
        return [
            (joined, element, index, array) => {
                const isFirst = index === 0;
                const isLast = index === (array.length - 1);
                return `${joined}${isFirst ? prefix : delimiter}${element.toString()}${isLast ? suffix : ""}`
            },
            ''
        ];
    }
}

module.exports = Collectors;