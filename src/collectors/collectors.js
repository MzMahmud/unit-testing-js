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

    static maxBy(compareFunction) {
        if (compareFunction == null) {
            compareFunction = Collectors.#defaultCompareFunction;
        }
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

    static minBy(compareFunction) {
        if (compareFunction == null) {
            compareFunction = Collectors.#defaultCompareFunction;
        }
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
}

module.exports = Collectors;