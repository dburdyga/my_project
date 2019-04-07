export default function(value: Date): string {
    if (!value) { return ''; }
    return new Date(value).toLocaleDateString('ru-RU');

}
