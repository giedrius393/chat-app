import { Client } from '@stomp/stompjs';

import { WebSocket } from 'ws';
Object.assign(global, { WebSocket });

const client = new Client({
  brokerURL: 'ws://localhost:8080/chat-websocket',
  onConnect: () => {
    console.log("connected");
    client.subscribe('/topic/greetings', message =>
      console.log(`Received: ${message.body}`)
    );
    client.publish({ destination: '/app/hello', body: JSON.stringify({ name: 'Tom' }) });
  },
});

client.activate();