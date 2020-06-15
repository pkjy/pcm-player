PCMPlayer
-----------
A minimalist javascript audio player for PCM streaming data for the browsers.  
浏览器端简单的PCM流式数据播放器

## How to use?（使用说明）

    var player = new PCMPlayer(option);

Available options are:  
可配置项如下:

*inputCodec* - possible values Int8 / Int16 / Int32 / Float32 default: Int16（可用值 Int8 / Int16 / Int32 / Float32 默认是：Int16）

*channels* - no of channels in PCM data（声道数）

*sampleRate* - sample rate of the PCM data（采样率）

*flushTime* - flushing interval of PCM data to be played in milisecond. Default 1000ms （PCM数据缓冲多久进行播放，默认1000ms）

## Complete example（使用示例）:
**Install（安装）**  
you can install by CDN or npm  
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

**use（使用）**
``` javascript
var player = new PCMPlayer({
    inputCodec: '16bitInt',
    channels: 2,
    sampleRate: 8000,
    flushTime: 2000
});

// Now feed PCM data into player getting from websocket or ajax whatever the transport you are using.Accept ArrayBuffer or TypedArray
// 接收PCM格式的原始数据，ArrayBuffer 类型或者 TypedArray 类型
player.feed(pcm_data);
```

**Available Methods（API）**

| Name        | Parameter           | Remark  |
| ------------- |:-------------:| -----:|
| feed      |  raw PCM data | Usually get from ajax or websocket
| volume      | decimal value 0 to +∞ ()      |  For controlling volume of the player, default is 1 |
| destroy | -      |    Destroy the player instance and release the resources |
| pause |-|pause playing|
| continue|-|resume playing|

| 名称        | 参数           | 备注  |
| ------------- |:-------------:| -----:|
| feed      |  原始PCM数据 |常常通过ajax或者websocket进行获取
| volume      |  0 to +∞ ()      | 理论上是负无穷到正无穷，但是0的时候就完全禁音，太大的时候会爆音 |
| destroy | -      |   摧毁实例，并且释放音频上下文 |
| pause |-|暂停播放|
| continue|-|继续播放|
  
 **Compatibility（兼容性）**
 
   it is supported on:  

 * Chrome for Android 34+
 * Chrome for Desktop 34+
 * Firefox for Android 41+
 * Firefox for Desktop 42+
 * IE11+ for Windows 8.1+
 * Edge for Windows 10+
 * Opera for Desktop
 * Safari for Mac 8+
 * Safari for iOS 8+

**How to run example?（体验示例里的文件）**

An example with simple node server script is available that include some raw pcm data that will be served by websocket and at the client end, it will be played through PCM player. For running the example, first run the node server by following command:
(I am assuming you are on project directory i.e pcm-player)

1. open server directory （进入到server目录）
    ``` bash 
    cd example/server
    ```
2. run a local server （把本地的服务端跑起来，会起一个websocket服务，用来发送数据）
    ``` bash 
    node server.js
    ```

3. then, just open **example/index.html** page.（直接双击example里面的index.html）

**Thanks to**  

[pcm-player](https://github.com/samirkumardas/pcm-player)

