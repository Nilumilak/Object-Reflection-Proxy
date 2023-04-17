export default function destructure(obj) {
    const { special } = obj;
    const newList = [];
    special.map((element) => {
        const {
            id, name, icon, description = 'Описание недоступно',
        } = element;
        newList.push({
            id,
            name,
            icon,
            description,
        });
        return newList;
    });
    return newList;
}
