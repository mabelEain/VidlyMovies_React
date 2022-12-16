import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // lodash wrapper methoad
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}