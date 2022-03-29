import signals from './signals.js'
import filters from './filters.js'
export signals
export filters

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