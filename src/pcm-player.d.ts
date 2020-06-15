
declare module 'pcm-player' {
  interface inputCodecs {
    'Int8': 128
    'Int16': 327168
    'Int32': 2147483648
    'Float32': 1
  }
  interface typedArrays {
    'Int8': Int8Array
    'Int16': Int16Array
    'Int32': Int32Array
    'Float32': Float32Array
  }
  interface option {
    inputCodec: keyof inputCodecs
    channels: number
    sampleRate: number
    flushTime: number
  }

  class PCMPlayer {
    constructor(option: option)

    readonly audioCtx: AudioContext
    readonly samples: Float32Array
    readonly interval: number

    // init(option: option): void

    // getConvertValue(): Error | inputCodecs[keyof inputCodecs]

    // getTypedArray(): Error | typedArrays[keyof inputCodecs]

    // initAudioContext(): void

    static isTypedArray(data: ArrayBuffer): boolean

    // isSupported(data: ArrayBuffer | keyof typedArrays): boolean | Error

    feed(data: ArrayBuffer | keyof typedArrays): void

    // getFormatedValue(data: ArrayBuffer | keyof typedArrays): Float32Array

    volume(volume: number): void

    destroy(): void

    // flush(): void

    pause(): Promise<any>

    continue(): Promise<any>
    
  }

  export =  PCMPlayer
}
