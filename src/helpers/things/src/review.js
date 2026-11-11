import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js';

import { CreativeWork } from './creativeWork.js';
import { Rating } from './rating.js'

export class Review extends CreativeWork {
    constructor(name_or_record) {
        super();
        this._defaultRecordType = 'CreativeWork';

        this._loadRecord(name_or_record);
        this._setValueIfString('name', name_or_record);
    }


       
    
    get associatedClaimReview() {
        return this.getValues('associatedClaimReview');
    }
    set associatedClaimReview(value) {
        this.setValues('associatedClaimReview', value);
    }


    
    
    get associatedMediaReview() {
        return this.getValues('associatedMediaReview');
    }
    set associatedMediaReview(value) {
        this.setValues('associatedMediaReview', value);
    }


    
    
    get associatedReview() {
        return this.getValues('associatedReview');
    }
    set associatedReview(value) {
        this.setValues('associatedReview', value);
    }

    
    get itemReviewed() {
        return this.getValues('itemReviewed');
    }
    set itemReviewed(value) {
        this.setValues('itemReviewed', value);
    }

    
    
    get negativeNotes() {
        return this.getValues('negativeNotes');
    }
    set negativeNotes(value) {
        this.setValues('negativeNotes', value);
    }


    get positiveNotes() {
        return this.getValues('positiveNotes');
    }
    set positiveNotes(value) {
        this.setValues('positiveNotes', value);
    }
    
    
    get reviewAspect() {
        return this.getValues('reviewAspect');
    }
    set reviewAspect(value) {
        this.setValues('reviewAspect', value);
    }

    
    
    get reviewBody() {
        return this.getValues('reviewBody');
    }
    set reviewBody(value) {
        this.setValues('reviewBody', value);
    }

    /**
     * The rating given in this review. 
     * @type {Rating}
     * 
     */
    get reviewRating() {
        return this.getValues('reviewRating');
    }

    /**
     * The rating given in this review.
     * @param {Rating} value - The rating
     */
    set reviewRating(value) {
        this.setValues('reviewRating', value);
    }




    // Methods

    /**
     * Adds a rating to the review.
     */
    addRating(reviewAspect, ratingValue, ratingExplanation ){

        let rating = new Rating()



    }
    
}



