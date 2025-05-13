<script lang="ts">
	let { title, description, icon, link = '' } = $props();
</script>

<div class="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
	{#if icon}
		<div class="text-[#0C2547] mb-4">
			{@html icon}
		</div>
	{/if}
	<h3 class="text-xl font-semibold text-[#0C2547] mb-3">{title}</h3>
	<p class="text-gray-600 mb-4">{description}</p>
	{#if link}
		<a href={link} class="inline-flex items-center text-[#0C2547] font-medium hover:underline">
			Learn more
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
			</svg>
		</a>
	{/if}
</div>
