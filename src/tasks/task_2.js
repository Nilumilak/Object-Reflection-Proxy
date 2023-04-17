export default function destructure(obj) {
    const { special } = obj;
    for (const i in special) {
        if (!special[i].hasOwnProperty('description')) {
            special[i].description = 'Описание недоступно';
        }
    }
    return special;
}
