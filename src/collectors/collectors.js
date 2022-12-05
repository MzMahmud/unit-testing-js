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

    static maxBy(compareFunction) {
        return null;
    }
}

module.exports = Collectors;