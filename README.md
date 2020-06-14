PCM Player
-----------
A minimalist javascript audio player for PCM streaming data for the browsers.
简单的PCM流式数据播放器

**How to use?（使用说明）**

    var player = new PCMPlayer(option);

Available options are:  
可配置项如下:


*inputCodec* - possible values Int8 / Int16 / Int32 / Float32 default: Int16（可用值 Int8 / Int16 / Int32 / Float32 默认是：Int16）

*channels* - no of channels in PCM data（声道数）

*sampleRate* - sample rate of the PCM data（采样率）

*flushTime* - flushing interval of PCM data to be played in milisecond. Default 1000ms （PCM数据多久播放一次的间隔，默认1000ms）

**Complete example（使用示例）:**  
``` bash  
npm i pcm-player
```
``` javascript
import PCMPlayer from 'pcm-player'

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

**How to run example?**

An example with simple node server script is available that include some raw pcm data that will be served by websocket and at the client end, it will be played through PCM player. For running the example, first run the node server by following command:
(I am assuming you are on project directory i.e pcm-player)

1. open server directory （进入到server目录）

``` bash 
cd example/server
```
2. run a local server （起一个本地服务）
``` bash 
node server.js
```

3. then, just open **example/index.html** page. or you can visit *example/index.html* page through any webserver as steps below.（直接双击example/index.html文件即可体验，或者给前端页面也起一个服务。）

4. If you don't have any web server, you can do following:

``` bash 
npm install http-server -g
```
``` bash
hs 
```
then you will see a ready local server just like :
``` bash 
Starting up http-server, serving ./
Available on:
  http://169.254.250.75:8081
  http://192.168.1.105:8081
  http://127.0.0.1:8081
Hit CTRL-C to stop the server
```

Finally visit example page using URL  http://192.168.0.105:8081/example/index.html OR URL suggested by http-server（接着就可以按照提示的端口进行静态文件的访问，类似http://192.168.0.105:8081/example/index.html）

**Thanks to**  

[pcm-player](https://github.com/samirkumardas/pcm-player)

