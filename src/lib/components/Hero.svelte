<script lang="ts">
	let {
		title = "Expert Legal Services for Your Needs",
		subtitle = "Professional legal advice from experienced solicitors",
		buttonText = "Get in Touch",
		buttonLink = "/contact",
		backgroundImage = "/images/hero-bg.jpg"
	} = $props();
</script>

<section
	class="relative bg-[#0C2547] text-white py-20 md:py-32"
	style={backgroundImage ? `background-image: linear-gradient(rgba(12, 37, 71, 0.85), rgba(12, 37, 71, 0.85)), url(${backgroundImage}); background-size: cover; background-position: center;` : ''}
>
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-3xl">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">{title}</h1>
			<p class="text-xl md:text-2xl mb-8 text-gray-200 font-sans">{subtitle}</p>
			<a
				href={buttonLink}
				class="inline-block bg-white text-[#0C2547] font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
			>
				{buttonText}
			</a>
		</div>
	</div>
</section>
