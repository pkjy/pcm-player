
declare module 'pcm-player' {
  interface inputCodecs {
    'Int8': 128
    'Int16': 32768
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
    fftSize: 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768
    onstatechange?: (node: AudioContext, event: Event, type: AudioContextState) => void
    onended?: (node: AudioBufferSourceNode, event: Event) => void
  }

  class PCMPlayer {
    constructor(option: option)

    readonly audioCtx: AudioContext
    readonly gainNode: GainNode
    readonly analyserNode: AnalyserNode
    readonly samples: Float32Array
    readonly interval: number

    private init(option: option): void

    private getConvertValue(): Error | inputCodecs[keyof inputCodecs]

    private getTypedArray(): Error | typedArrays[keyof inputCodecs]

    private initAudioContext(): void

    static isTypedArray(data: ArrayBuffer): boolean

    private isSupported(data: ArrayBuffer | keyof typedArrays): boolean | Error

    private getFormattedValue(data: ArrayBuffer | keyof typedArrays): Float32Array

    private flush(): void

    feed(data: ArrayBuffer | keyof typedArrays): void

    volume(volume: number): void

    destroy(): void

    pause(): Promise<any>

    continue(): Promise<any>

  }

  export = PCMPlayer
}
