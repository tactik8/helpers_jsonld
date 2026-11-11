import { jsonldBase as h } from '../../jsonldBase/jsonldBase.js';

import { Thing } from './thing.js';

export class CreativeWork extends Thing {
    constructor(name_or_record) {
        super();
        this._defaultRecordType = 'CreativeWork';

        this._loadRecord(name_or_record);
        this._setValueIfString('name', name_or_record);
    }

    get about() {
        return this.getValues('about');
    }
    set about(value) {
        this.setValues('about', value);
    }

    get abstract() {
        return this.getValues('abstract');
    }
    set abstract(value) {
        this.setValues('abstract', value);
    }

    get author() {
        return this.getValues('author');
    }
    set author(value) {
        this.setValues('author', value);
    }

    get comment() {
        return this.getValues('comment');
    }
    set comment(value) {
        this.setValues('comment', value);
    }

    get contributor() {
        return this.getValues('contributor');
    }
    set contributor(value) {
        this.setValues('contributor', value);
    }

    get creator() {
        return this.getValues('creator');
    }
    set creator(value) {
        this.setValues('creator', value);
    }

    get dateCreated() {
        return this.getValues('dateCreated');
    }
    set dateCreated(value) {
        this.setValues('dateCreated', value);
    }

    get dateModified() {
        return this.getValues('dateModified');
    }
    set dateModified(value) {
        this.setValues('dateModified', value);
    }

    get datePublished() {
        return this.getValues('datePublished');
    }
    set datePublished(value) {
        this.setValues('datePublished', value);
    }

    get editor() {
        return this.getValues('editor');
    }
    set editor(value) {
        this.setValues('editor', value);
    }

    get hasPart() {
        return this.getValues('hasPart');
    }
    set hasPart(value) {
        this.setValues('hasPart', value);
    }

    /**
     * Gets or sets the headline of the creative work.
     *
     * @returns {string} The headline of the creative work.
     */
    get headline() {
        return this.getValue('headline');
    }
    set headline(value) {
         this.setValue('headline', value);
    }

    get inLanguage() {
        return this.getValues('inLanguage');
    }
    set inLanguage(value) {
        this.setValues('inLanguage', value);
    }

    get isPartOf() {
        return this.getValues('isPartOf');
    }
    set isPartOf(value) {
        this.setValues('isPartOf', value);
    }

    get keywords() {
        return this.getValues('keywords');
    }
    set keywords(value) {
        this.setValues('keywords', value);
    }

    get offers() {
        return this.getValues('offers');
    }
    set offers(value) {
        this.setValues('offers', value);
    }

    get provider() {
        return this.getValues('provider');
    }
    set provider(value) {
        this.setValues('provider', value);
    }

    get publisher() {
        return this.getValues('publisher');
    }
    set publisher(value) {
        this.setValues('publisher', value);
    }

    get review() {
        return this.getValues('review');
    }
    set review(value) {
        this.setValues('review', value);
    }

    get sourceOrganization() {
        return this.getValues('sourceOrganization');
    }
    set sourceOrganization(value) {
        this.setValues('sourceOrganization', value);
    }

    /**
     * Gets or sets the text of the creative work.
     *
     * @returns {string} The text of the creative work.
     */
    get text() {
        return this.getValue('text');
    }
    set text(value) {
         this.setValue('text', value);
    }

    get thumbnail() {
        return this.getValues('thumbnail');
    }
    set thumbnail(value) {
        this.setValues('thumbnail', value);
    }

    get thumbnailUrl() {
        return this.getValues('thumbnailUrl');
    }
    set thumbnailUrl(value) {
        this.setValues('thumbnailUrl', value);
    }

    get version() {
        return this.getValues('version');
    }
    set version(value) {
        this.setValues('version', value);
    }

    get video() {
        return this.getValues('video');
    }
    set video(value) {
        this.setValues('video', value);
    }

    get wordCount() {
        return this.getValues('wordCount');
    }
    set wordCount(value) {
        this.setValues('wordCount', value);
    }
}
