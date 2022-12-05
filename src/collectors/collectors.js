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

    static groupBy(keyMapperFunction, valueMapperFunction) {
        if(typeof keyMapperFunction !== 'function') {
            throw new Error("invalid keyMapperFunction");
        }
        if(typeof valueMapperFunction !== 'function') {
            throw new Error("invalid valueMapperFunction");
        }
        return [
            (map, element) => {
                const key = keyMapperFunction(element);
                if(!map.has(key)) {
                    map.set(key, []);
                }
                map.get(key).push(valueMapperFunction(element));
                return map;
            },
            new Map()
        ];
    }
}

module.exports = Collectors;