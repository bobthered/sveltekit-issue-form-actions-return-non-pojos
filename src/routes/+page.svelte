<script>
	import { enhance } from '$app/forms';

	// props (internal)
	let password = '';
	let username = '';

	// props (external)
	export let form;
</script>

<form
	class="flex flex-col flex-grow items-center justify-center space-y-[1rem]"
	method="POST"
	use:enhance
>
	<div class="text-[1.5rem]">Sign In</div>
	<div class="min-h-[1.5rem] text-red-500">
		{#if form?.message}
			{form?.message}
		{/if}
	</div>
	<input bind:value={username} name="username" placeholder="username" type="text" />
	<input bind:value={password} name="password" placeholder="password" type="password" />
	<button type="submit">Submit</button>
</form>
