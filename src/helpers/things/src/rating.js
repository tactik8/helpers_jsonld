import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js';

import { Thing } from './thing.js';

export class Rating extends Thing {
    constructor(name_or_record) {
        super();
        this._defaultRecordType = 'CreativeWork';

        this._loadRecord(name_or_record);
        this._setValueIfString('name', name_or_record);
    }

    get author() {
        return this.getValues('author');
    }
    set author(value) {
        this.setValues('author', value);
    }

    get bestRating() {
        return this.getValues('bestRating');
    }
    set bestRating(value) {
        this.setValues('bestRating', value);
    }

    get ratingExplanation() {
        return this.getValues('ratingExplanation');
    }
    set ratingExplanation(value) {
        this.setValues('ratingExplanation', value);
    }

    get ratingValue() {
        return this.getValues('ratingValue');
    }
    set ratingValue(value) {
        this.setValues('ratingValue', value);
    }

    get reviewAspect() {
        return this.getValues('reviewAspect');
    }
    set reviewAspect(value) {
        this.setValues('reviewAspect', value);
    }

    get worstRating() {
        return this.getValues('worstRating');
    }
    set worstRating(value) {
        this.setValues('worstRating', value);
    }
}
