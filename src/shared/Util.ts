import ISort from '@/shared/interfaces/ISort';

export default class Util {
    public static flipSort<M>(sort: ISort<M>) {
        return {field: sort.field, reversed: !sort.reversed} as ISort<M>;
    }

    /**
     * Sort by field function
     * @param {string} field Field to sort for
     * @param {boolean} reverse Reverse sorting direction
     * @param {boolean} ignoreCase case for strings
     * @returns {(a: {[p: string]: {}}, b: {[p: string]: {}}) => (number | number)} Sort function
     */
    public static sortByField<T extends object>(field: string | number, reverse = false, ignoreCase = false) {
        return (a: T, b: T) => {
            const aValue = Util.getNestedProperty(a as { [key: string]: {} }, field as string);
            const bValue = Util.getNestedProperty(b as { [key: string]: {} }, field as string);

            const aField = ignoreCase && !(typeof aValue === 'number') ? aValue.toString().toLowerCase() : aValue;
            const bField = ignoreCase && !(typeof bValue === 'number') ? bValue.toString().toLowerCase() : bValue;

            return reverse ?
                Util.compareValues(aField, bField) :
                Util.compareValues(bField, aField);
        };
    }

    private static getNestedProperty(object: { [key: string]: {} }, property: string): {} {
        if (typeof object === 'undefined') {
            return false;
        }
        const index = property.indexOf('.');
        if (index > -1) {
            return Util.getNestedProperty(object[property.substring(0, index)], property.substr(index + 1));
        }
        return object[property];
    }

    private static compareValues(a: {}, b: {}): number {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }
}
