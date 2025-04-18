const BaseGetIdsOut = require('../baseGetterIdsOut');

class GetExampleIdsOut extends BaseGetIdsOut {
    static get url () {
        return '/proxy/get-example-ids-out.json';
    }

    get subtype () {
        return 'example';
    }

    get fields () {
        return ['id', 'name', 'description', 'year', 'availableCount', 'digitalVersion', 'updatedAt'];
    }

    get oneItemFields () {
        return [];
    }

    getIncludes () {
        return [
            {
                model: this.model.Book,
                attributes: ['id', 'name'],
                as: 'book'
            },
            {
                model: this.model.Publisher,
                attributes: ['id', 'name'],
                as: 'publisher'
            }
        ];
    }

    get ObjModel () {
        return this.model.Example;
    }
}

module.exports = GetExampleIdsOut;
