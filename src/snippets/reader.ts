import fs from 'fs';
import * as path from 'path';

export function reader<T>(property: string = '', file: string = 'default.json'): T {
    let item = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', 'config', 'default.json'), 'utf-8'));
    let overrideItem = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', 'config', file), 'utf-8'));

    if (property) {
        item = item[property];
        overrideItem = overrideItem[property];
    }

    if (file !== 'default.json') {
        try {
            Object.keys(overrideItem).forEach(curr => {
                item[curr] = overrideItem[curr];
            });
        } catch (e) {
            item = overrideItem;
        }
    }

    return item as T;
}

export function writer<T>(json: T, file: string = 'default.json'): boolean {
    let flag = true;

    try {
        let item = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', 'config', file), 'utf-8'));
        item = {...item, ...json};
        fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'config', file), JSON.stringify(item), 'utf-8');
    } catch (err) {
        flag = false;
    }

    return flag;
}
