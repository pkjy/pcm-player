PCMPlayer
-----------
A minimalist javascript audio player for PCM streaming data for the browsers.  
浏览器端简单的PCM数据流播放器

## How to use?（使用说明）

    var player = new PCMPlayer(options);

Available options are:  
可配置项如下:

| Name | Parameter |Default  | Type  |Remark|
| ----- |:-----:| -----:|-----:|-----:|
|inputCodec| Int8 / Int16 / Int32 / Float32 |Int16|string|编码格式|
|channels| |1|number |声道数|
|sampleRate| |8000| number|采样率|
|flushTime| |1000|number| flushing interval of PCM data to be played in milisecond（PCM数据缓冲多久进行播放）|

## Complete example（使用示例）:
### Install（安装）

install by CDN or npm  

**CDN**
``` html
<script src="https://unpkg.com/pcm-player"></script>
```

**ES6**
``` bash  
npm i pcm-player
```
``` javascript
// in your js/ts file
import PCMPlayer from 'pcm-player'
```

### use（使用）
``` javascript
var player = new PCMPlayer({
    inputCodec: 'Int16',
    channels: 2,
    sampleRate: 8000,
    flushTime: 2000
});

// Now feed PCM data into player getting from websocket or ajax whatever the transport you are using.Accept ArrayBuffer or TypedArray
// 接收PCM格式的原始数据，ArrayBuffer 类型或者 TypedArray 类型
player.feed(pcm_data);
```

## Available Methods（方法）

| Name        | Parameter           | Remark  |
| ------------- |:-------------:| -----:|
| feed      |  raw PCM data | Usually get from ajax or websocket
| volume      | decimal value 0 to +∞ ()      |  For controlling volume of the player, default is 1 |
| destroy | -      |    Destroy the player instance and release the resources |
| pause |-|pause playing|
| continue|-|resume playing|  


## Available Attributes（属性）

| Name        |  Remark  |
| ------------- | -----:|
| audioCtx      |  current AudioContext

## Available Event（事件）
|Name|Parameter|Remark|
|----|---------|-|
|onstatechange|(node, event, type)|node: AudioContext, event: Event, type: AudioContextState|
|onended|(node, event)|node: AudioBufferSourceNode, event: Event|

## How to run example?（体验example里的文件）

An example with simple node server script is available that include some raw pcm data that will be served by websocket and at the client end, it will be played through PCM player. 

1. open server directory （进入到server目录）
    ``` bash 
    cd example/server
    ```
2. run a local server （把本地的服务端跑起来，会起一个websocket服务，用来发送数据）
    ``` bash 
    node server.js
    ```

3. then, just open **example/index.html** page.（直接双击example里面的index.html）

## Thoubleshooting（常见问题）
Safari only allow to play large than 22050Hz voice.  
Safari浏览器播放的音频数据，采样率不能低于22050Hz。  
>更多webaudio经验可以在此查看：[websocket pcm webaudio 经验](https://github.com/pkjy/blog/issues/6)

## online demo（在线demo)
[pcm-player demo](https://pkjy.github.io/pcm-player/)

## Thanks to（鸣谢）

Inspired by [pcm-player](https://github.com/samirkumardas/pcm-player)

