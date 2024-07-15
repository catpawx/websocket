# 说明

对原生websocket的封装，包含了心跳机制，中断重连

# 使用

```
npm install @catpawx/websocket
```

```
import { WebSocketClient } from '@catpawx/websocket';
const ws  = new WebSocketClient('ws://127.0.0.1')
ws.connect()
```

# api

api同原生api一样使用

1. 生命周期钩子

- onopen 连接打开

```
ws.onopen(()=>{})
```

- onmessage 收到消息

```
ws.onmessage(()=>{})
```

- onclose 连接关闭

```
ws.onclose(()=>{})
```

- onerror 连接失败

```
ws.onerror(()=>{})
```

2. 其他api

- connect 初始化连接

```
ws.connect()
```

- close 关闭连接

```
ws.close()
```

- send 消息发送

```
ws.send('消息')
```
