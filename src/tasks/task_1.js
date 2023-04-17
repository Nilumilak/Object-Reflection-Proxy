export default function orderByProps(obj, keyList = []) {
    const newList = [];
    Object.keys(obj).forEach((objKey) => {
        newList.push({
            key: objKey,
            value: obj[objKey],
        });
    });
    return newList.sort((a, b) => {
        if (keyList.includes(a.key) && keyList.includes(b.key)) {
            if (keyList.indexOf(a.key) < keyList.indexOf(b.key)) {
                return -1;
            }
            return 1;
        }
        if (keyList.includes(a.key) && !keyList.includes(b.key)) {
            return -1;
        }
        if (!keyList.includes(a.key) && keyList.includes(b.key)) {
            return 1;
        }
        for (let i = 0; i + 1; i < Math.max(a.key.length, b.key.length)) {
            if (a.key[i] < b.key[i]) {
                return -1;
            }
            if (a.key[i] > b.key[i]) {
                return 1;
            }
        }
        return 0;
    });
}
