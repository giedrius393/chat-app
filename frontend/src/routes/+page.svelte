<script>
  import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/addUser" use:enhance>
  <label>
    Enter your name:
    <input
      name="name"
      autocomplete="off"
    />
  </label>
  <button type="submit">Enter the chat</button>
</form>

<style>
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    flex-direction: column;
    gap: 10px;
  }
</style>