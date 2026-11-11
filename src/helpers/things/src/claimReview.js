import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js';

import { Review } from './review.js';

export class ClaimReview extends Review {
    constructor(name_or_record) {
        super();
        this._defaultRecordType = 'CreativeWork';

        this._loadRecord(name_or_record);
        this._setValueIfString('name', name_or_record);
    }       
    
    get claimReviewed() {
        return this.getValues('claimReviewed');
    }
    set claimReviewed(value) {
        this.setValues('claimReviewed', value);
    }

    
}
