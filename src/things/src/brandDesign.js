/**
 * BrandDesign custome record for w3c design token
 */

import { _h as h}  from '../../index.js'

import * as dot from '../../dotHelpers/dotHelpers.js'

const randomUUID = globalThis.crypto.randomUUID

import { Thing } from './thing.js'
import { helpers } from '../../index.js'

import { transformHelpers } from '../../transformHelpers/transformHelpers.js'

const DESIGN_TOKEN_PROPERTY_NAME = 'DesignToken'

export class BrandDesign extends Thing {

    constructor(record) {
        super()
        this.record_type = "BrandDesign"
        if (record?.['@type'] == "BrandDesign") {
            this.record = record
        }
        this.basePath = undefined
    }

    toString() {
        return toString(this.record)
    }



    get(propertyID) {
        return transformHelpers.designToken.getValue(this.record, propertyID)
    }

    set(propertyID, value) {
        return transformHelpers.designToken.setValue(this.record, propertyID, value)
    }


    get token() {
        return transformHelpers.designToken.get(this.record)
    }

    set token(value) {
        this.record = transformHelpers.designToken.set(this.record, value)
    }


    get primary() {
        return transformHelpers.designToken.getValue(this.record, 'color.brand.primary')
    }

    set primary(value) {
        this.record = transformHelpers.designToken.setValue(this.record, 'color.brand.primary', value)
    }

    get secondary() {
        return transformHelpers.designToken.getValue(this.record, 'color.brand.secondary')
    }

    set secondary(value) {
        this.record = transformHelpers.designToken.setValue(this.record, 'color.brand.secondary', value)
    }

    get tertiary() {
        return transformHelpers.designToken.getValue(this.record, 'color.brand.tertiary')
    }

    set tertiary(value) {
        this.record = transformHelpers.designToken.setValue(this.record, 'color.brand.tertiary', value)
    }

    get neutral() {
        return transformHelpers.designToken.getValue(this.record, 'color.neutral.surface')
    }

    set neutral(value) {
        this.record = transformHelpers.designToken.setValue(this.record, 'color.neutral.surface', value)
    }

    get danger() {
        return transformHelpers.designToken.getValue(this.record, 'color.feedback.danger')
    }

    set danger(value) {
        this.record = transformHelpers.designToken.setValue(this.record, 'color.feedback.danger', value)
    }


    get textPrimary() {
        return transformHelpers.designToken.getValue(this.record, 'color.neutral.text.primary')
    }

    set textPrimary(value) {
        this.record = transformHelpers.designToken.setValue(this.record, 'color.neutral.text.primary', value)
    }

    get textSecondary() {
        return transformHelpers.designToken.getValue(this.record, 'color.neutral.text.secondary')
    }

    set textSecondary(value) {
        this.record = transformHelpers.designToken.setValue(this.record, 'color.neutral.text.secondary', value)
    }


    get heading() {
        return new Typography(this, 'typography.heading-lg')
    }

    get body() {
        return new Typography(this, 'typography.body-md')
    }


    get spacingSm() {
        return transformHelpers.designToken.getValue(this.record, 'spacing.scale.sm')
    }
    set spacingSm(value) {
        return transformHelpers.designToken.setValue(this.record, 'spacing.scale.sm', value)
    }

    get spacingMd() {
        return transformHelpers.designToken.getValue(this.record, 'spacing.scale.md')
    }
    set spacingMd(value) {
        return transformHelpers.designToken.setValue(this.record, 'spacing.scale.md', value)
    }

    get spacingLg() {
        return transformHelpers.designToken.getValue(this.record, 'spacing.scale.lg')
    }
    set spacingLg(value) {
        return transformHelpers.designToken.setValue(this.record, 'spacing.scale.lg', value)
    }

    get borderSm() {
        return transformHelpers.designToken.getValue(this.record, 'border.radius.sm')
    }
    set borderSm(value) {
        return transformHelpers.designToken.setValue(this.record, 'border.radius.sm', value)
    }

    get borderMd() {
        return transformHelpers.designToken.getValue(this.record, 'border.radius.md')
    }
    set borderMd(value) {
        return transformHelpers.designToken.setValue(this.record, 'border.radius.md', value)
    }

    get shadow() {
        return new Shadow(this, 'shadow.elevation-md')
    }


    // static
    sample() {
        return transformHelpers.designToken.getSampleRecord()
    }

}




class Typography {
    constructor(baseObject, path) {
        this.base = baseObject
        this.basePath = getPath(path)

    }

    get fontFamily() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'fontFamily'))
    }

    set fontFamily(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'fontFamily'), value)
    }

    get fontWeight() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'fontWeight'))
    }

    set fontWeight(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'fontWeight'), value)
    }

    get fontSize() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'fontSize'))
    }

    set fontSize(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'fontSize'), value)
    }

    get lineHeight() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'lineHeight'))
    }

    set lineHeight(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'lineHeight'), value)
    }

    get letterSpacing() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'letterSpacing'))
    }

    set letterSpacing(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'letterSpacing'), value)
    }

    get family() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'fontFamily'))
    }

    set family(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'fontFamily'), value)
    }

    get weight() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'fontWeight'))
    }

    set weight(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'fontWeight'), value)
    }

    get size() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'fontSize'))
    }

    set size(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'fontSize'), value)
    }

    get height() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'lineHeight'))
    }

    set height(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'lineHeight'), value)
    }

    get spacing() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'letterSpacing'))
    }

    set spacing(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'letterSpacing'), value)
    }
}



class Shadow {
    constructor(baseObject, path) {
        this.base = baseObject
        this.basePath = getPath(path)

    }

    get color() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'color'))
    }

    set color(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'color'), value)
    }

    get offsetX() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'offsetX'))
    }

    set offsetX(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'offsetX'), value)
    }

    get offsetY() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'offsetY'))
    }

    set offsetY(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'offsetY'), value)
    }

    get blur() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'blur'))
    }

    set blur(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'blur'), value)
    }

    get spread() {
        return transformHelpers.designToken.getValue(record, getPath(this.basePath, 'spread'))
    }

    set spread(value) {
        this.base.record = transformHelpers.designToken.setValue(record, getPath(this.basePath, 'spread'), value)
    }
}

function getPath(basePath, path, p) {

    let paths = [basePath, path, p]
    paths = paths.filter(x => x != undefined && x != "")
    let r = paths.join('.')
    r = r.replaceAll('..', '.')
    return r
}

function toString(record) {

    return `${helpers.record_type(record)} for ${helpers.getValue(record, url)}
    
    `

}

