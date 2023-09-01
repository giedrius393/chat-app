<script>
  import { io } from "socket.io-client";
  import { afterUpdate, onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  let message = '';
  /** @type {import('socket.io-client').Socket} */
  let socket;
  let chatEnabled = false;
  /** @type {Array<{ user: string, message: string }>} */
  let messages = [];
  /** @type {HTMLElement} */
  let messageBoxElement;

  const onSubmit = () => {
    socket.emit('message', {
      user: data.user,
      message: message,
    })
    message = '';
  }

  onMount(() => {
    socket = io("ws://localhost:3000");

    socket.on("connect", () => {
       chatEnabled = true;
    });

    socket.on("message-receive", (message) => {
      messages = [...messages, message];
    })
  })

  afterUpdate(() => {
    messageBoxElement.scroll({ top: messageBoxElement.scrollHeight, behavior: 'smooth' });
  })
</script>

<div class="message-box" bind:this={messageBoxElement}>
  {#each messages as message}
    <div>[{message.user}]: {message.message}</div>
  {/each}
</div>

<form on:submit|preventDefault={onSubmit}>
  <label>
    Enter message: <input type="text" id="message" bind:value={message} disabled={!chatEnabled} required/>
    <button>Send</button>
  </label>
</form>

<style>
  .message-box {
    height: calc(100vh - 120px);
    border: 1px solid black;
    margin: 10px 0;
    padding: 5px;
    overflow: auto;
  }

  label {
    display: flex;
    gap: 5px;
  }

  input {
    flex: 1;
  }
</style>
