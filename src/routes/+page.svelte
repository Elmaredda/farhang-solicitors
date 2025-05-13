<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';

	// Service cards data
	const services = [
		{
			title: 'Immigration',
			description: 'Expert guidance through UK immigration processes, visa applications, and citizenship matters.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
			link: '/immigration'
		},
		{
			title: 'Conveyancing',
			description: 'Smooth property transactions with our comprehensive conveyancing services for buyers and sellers.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
			link: '/conveyancing'
		},
		{
			title: 'Leases',
			description: 'Comprehensive lease drafting, review, and negotiation services for commercial and residential properties.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
			link: '/leases'
		},
		{
			title: 'Landlord & Tenant',
			description: 'Legal support for landlords and tenants in disputes, agreements, and regulatory compliance.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>',
			link: '/landlord-tenant'
		},
		{
			title: 'Agency Services',
			description: 'Professional representation and agency services for various legal and business matters.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
			link: '/agency-services'
		}
	];

	// Testimonials data
	const testimonials = [
		{
			quote: "Farhang Solicitors provided exceptional service for my immigration case. Their expertise and attention to detail made the process smooth and successful.",
			author: "Sarah Johnson",
			position: "Client"
		},
		{
			quote: "The conveyancing team at Farhang Solicitors handled our property purchase with professionalism and efficiency. Highly recommended!",
			author: "David Thompson",
			position: "Property Owner"
		},
		{
			quote: "As a landlord, I've relied on Farhang Solicitors for years. Their knowledge of landlord-tenant law is unmatched.",
			author: "Michael Chen",
			position: "Property Investor"
		}
	];
</script>

<svelte:head>
	<title>Farhang Solicitors | Professional Legal Services</title>
	<meta name="description" content="Farhang Solicitors provides expert legal services in immigration, conveyancing, leases, landlord & tenant matters, and agency services." />
</svelte:head>

<!-- Hero Section -->
<Hero
	title="Expert Legal Services Tailored to Your Needs"
	subtitle="Farhang Solicitors provides professional legal advice and representation across multiple practice areas."
	buttonText="Discuss Your Case"
	buttonLink="/contact"
	backgroundImage="/images/mainhero.jpg"
/>

<!-- About Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">About Farhang Solicitors</h2>
			<p class="text-lg text-gray-600">
				Farhang Solicitors is a dedicated law firm committed to providing high-quality legal services to individuals and businesses.
				With our team of experienced solicitors, we offer expert advice and representation across a range of practice areas.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			<div class="bg-white p-6 rounded-lg shadow-md text-center">
				<div class="text-[#0C2547] mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2">Tailored Solutions</h3>
				<p class="text-gray-600">We provide personalized legal solutions tailored to your specific needs and circumstances.</p>
			</div>

			<div class="bg-white p-6 rounded-lg shadow-md text-center">
				<div class="text-[#0C2547] mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2">Experienced Team</h3>
				<p class="text-gray-600">Our team of experienced solicitors brings expertise and knowledge to every case we handle.</p>
			</div>

			<div class="bg-white p-6 rounded-lg shadow-md text-center">
				<div class="text-[#0C2547] mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2">Client-Focused</h3>
				<p class="text-gray-600">We prioritize clear communication and building strong relationships with our clients.</p>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Our Practice Areas</h2>
			<p class="text-lg text-gray-600">
				We offer comprehensive legal services across multiple practice areas to meet your diverse legal needs.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service}
				<ServiceCard {...service} />
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">What Our Clients Say</h2>
			<p class="text-lg text-gray-600">
				Don't just take our word for it. Here's what our clients have to say about our services.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			{#each testimonials as testimonial}
				<div class="bg-white p-6 rounded-lg shadow-md">
					<div class="text-[#0C2547] mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
						</svg>
					</div>
					<p class="text-gray-600 mb-4 italic">{testimonial.quote}</p>
					<div>
						<p class="font-semibold">{testimonial.author}</p>
						<p class="text-gray-500 text-sm">{testimonial.position}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Call to Action -->
<CallToAction
	title="Ready to Discuss Your Legal Needs?"
	description="Our team of experienced solicitors is ready to help you with your legal matters. Contact us today for a consultation."
	buttonText="Contact Us Now"
	buttonLink="/contact"
/>
