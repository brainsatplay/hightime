import * as signals from './signals.js'
import * as filters from './filters.js'
import * as math from './math.js'

export {
    filters,
    math,
    signals, 
}

export class DFT {
    spectrum = []
    constructor (bufferSize, sampleRate) {
        this.bufferSize = bufferSize
        this.sampleRate = sampleRate
    }

    forward = () => {
        
    }
}

export class FFT {
    spectrum = []
    constructor (bufferSize, sampleRate) {
        this.bufferSize = bufferSize
        this.sampleRate = sampleRate
    }

    forward = () => {

    }
}