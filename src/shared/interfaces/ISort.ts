export default interface ISort<C> {
    field: keyof C;
    reversed: boolean;
}
