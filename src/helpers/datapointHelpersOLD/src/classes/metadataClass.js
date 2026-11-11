

import * as dp from '../methods/dataPointMethods.js'
import { recordIdHelpers } from '../../../recordIdHelpers/recordIdHelpers.js'

import { Base } from './baseClass.js'

export class Metadata extends Base {
    constructor(record_or_confidence, observationDate, execution, dataFeed, dataFeedItem, agent, instrument) {
        super({}, 'Metadata')

        if (isNaN(Number(record_or_confidence))) {
            this.record = record_or_confidence
        } else {
            this.confidence = record_or_confidence ?? this.record_or_confidence
            this.observationDate = observationDate ?? this.observationDate
            this.execution = execution
            this.dataFeed = dataFeed ?? this.dataFeed
            this.dataFeedItem = dataFeedItem ?? this.dataFeedItem
            this.agent = agent ?? this.agent
            this.instrument = instrument ?? this.instrument
        }
    }


    toString() {
        return dp.toString(this.record)
    }



    /**
     * Sets the values of metadata
     * @param {*} c 
     * @param {*} d 
     * @param {*} dataFeed 
     * @param {*} dataFeedItem 
     * @param {*} agent 
     * @param {*} instrument 
     */
    set(c, d, execution, dataFeed, dataFeedItem, agent, instrument) {
        this.c = c
        this.d = d
        this.execution = execution
        this.dataFeed = dataFeed
        this.dataFeedItem = dataFeedItem
        this.agent = agent
        this.instrument = instrument
    }

    get dataFeed() {
        return new Base(this.getValue('dataFeed'), 'DataFeed')
    }

    set dataFeed(value) {
        value = value?.record ? value : new Base(value, 'DataFeed')
        this.setValue('dataFeed', value)
    }

    get dataFeedItem() {
        return new Base(this.getValue('dataFeedItem'), 'DataFeedItem')
    }

    set dataFeedItem(value) {
        value = value?.record ? value : new Base(value, 'DataFeedItem')
        this.setValue('dataFeedItem', value)
    }

    get agent() {
        return new Base(this.getValue('agent'), 'Person')
    }
    set agent(value) {
        value = value?.record ? value : new Base(value, 'Person')
        this.setValue('agent', value)
    }


    get instrument() {
        return new Base(this.getValue('instrument'), 'WebAPI')
    }
    set instrument(value) {
        value = value?.record ? value : new Base(value, 'WebAPI')
        this.setValue('instrument', value)
    }

    get execution() {
        return new Base(this.getValue('execution'), 'Action')
    }
    set execution(value) {
        value = value?.record ? value : new Base(value, 'Action')
        this.setValue('execution', value)
    }


    get credibility() {
        return this.confidence
    }

    set credibility(value) {
        this.confidence = value
    }

    get confidence() {
        return this._record?.confidence ?? 0
    }

    set confidence(value) {
        this._record.confidence = value
    }

    get c() {
        return this.confidence
    }

    set c(value) {
        this.confidence = value
    }

    get observationDate() {
        return this._record?.observationDate ?? undefined
    }

    set observationDate(value) {
        this._record.observationDate = new Date(value)
    }

    get d() {
        return this._record?.observationDate ?? undefined
    }

    set d(value) {
        this._record.observationDate = value
    }

    get metadata() {
        let metadata = JSON.parse(JSON.stringify(this.record))
        delete metadata['object']
        delete metadata['propertyID']
        delete metadata['value']
        return metadata

    }

    set metadata(value) {
        value = value?.record || value || {}
        let nonMetadataKeys = ['object', 'propertyID', 'value']
        for (let k of Object.keys(value)) {
            if (nonMetadataKeys.includes(k)) {
                continue
            }
            this.setValue(k, value[k])
        }
    }

    get m() {
        return this.metadata
    }

    set m(value) {
        return this.metadata = value
    }


    getDatapoint(record_or_object, propertyID, value) {
        return new DataPoint(record_or_object, propertyID, value, this.record)
    }

    new(record_or_object, propertyID, value) {
        return this.getDatapoint(record_or_object, propertyID, value)
    }

}