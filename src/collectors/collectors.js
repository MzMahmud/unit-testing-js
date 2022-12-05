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
}

module.exports = Collectors;