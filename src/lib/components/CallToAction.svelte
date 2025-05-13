<script lang="ts">
	let { title = "Get Expert Legal Advice Today", 
		  description = "Our team of experienced solicitors is ready to help you with your legal needs.", 
		  buttonText = "Contact Us", 
		  buttonLink = "/contact" } = $props();
</script>

<section class="bg-[#0C2547] text-white py-16">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
		<p class="text-lg md:text-xl max-w-3xl mx-auto mb-8">{description}</p>
		<a href={buttonLink} class="inline-block bg-white text-[#0C2547] font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
			{buttonText}
		</a>
	</div>
</section>
