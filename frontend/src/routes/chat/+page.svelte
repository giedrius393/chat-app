<script>
  let message = '';

  const onSubmit = () => {
    console.log(message);
    message = '';
  }
</script>


<h1>This is a chat page</h1>

<form on:submit|preventDefault={onSubmit}>
  <label>
    Enter message: <input type="text" id="message" bind:value={message}/>
  </label>
</form>
