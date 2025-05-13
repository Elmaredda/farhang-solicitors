<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import PriceList from '$lib/components/PriceList.svelte';

	// Leases services pricing
	const leasesServices = [
		{
			name: 'Commercial Lease Drafting',
			description: 'Preparation of a comprehensive commercial lease agreement',
			priceRange: '£1,200 - £2,500'
		},
		{
			name: 'Commercial Lease Review',
			description: 'Detailed review and advice on commercial lease terms',
			priceRange: '£800 - £1,500'
		},
		{
			name: 'Lease Renewal',
			description: 'Legal services for renewing an existing lease',
			priceRange: '£700 - £1,200'
		},
		{
			name: 'Lease Assignment',
			description: 'Legal services for assigning a lease to another party',
			priceRange: '£900 - £1,800'
		},
		{
			name: 'Lease Extension',
			description: 'Legal services for extending a residential leasehold',
			priceRange: '£800 - £1,500'
		},
		{
			name: 'Lease Negotiation',
			description: 'Representation in lease term negotiations',
			priceRange: '£1,000 - £2,000'
		},
		{
			name: 'Lease Dispute Resolution',
			description: 'Legal assistance with lease-related disputes',
			priceRange: '£1,500 - £3,000'
		},
		{
			name: 'Lease Consultation',
			description: 'One-hour consultation with a lease specialist',
			price: 200
		}
	];

	// Benefits of our leases services
	const benefits = [
		{
			title: 'Comprehensive Protection',
			description: 'Our lease agreements provide comprehensive protection for your interests and address potential issues.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
		},
		{
			title: 'Expert Negotiation',
			description: 'We negotiate favorable lease terms on your behalf, ensuring your rights and interests are protected.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>'
		},
		{
			title: 'Clear Explanations',
			description: 'We explain complex lease terms in clear, understandable language so you know exactly what you\'re agreeing to.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
		},
		{
			title: 'Future-Proofing',
			description: 'Our lease agreements anticipate future scenarios and include provisions to protect you as circumstances change.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>'
		}
	];
</script>

<svelte:head>
	<title>Lease Services | Farhang Solicitors</title>
	<meta name="description" content="Expert lease drafting, review, and negotiation services for commercial and residential properties. Farhang Solicitors ensures your lease agreements protect your interests." />
</svelte:head>

<!-- Hero Section -->
<Hero
	title="Lease Services"
	subtitle="Expert drafting, review, and negotiation of lease agreements for commercial and residential properties."
	buttonText="Discuss Your Lease Requirements"
	buttonLink="/contact"
	backgroundImage="/images/leases-hero.jpg"
/>

<!-- Service Overview -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Lease Services Overview</h2>
			<p class="text-lg text-gray-600 mb-6">
				At Farhang Solicitors, we provide comprehensive legal services for all aspects of commercial and residential leases.
				Our experienced lease specialists ensure that your lease agreements are properly drafted, reviewed, and negotiated
				to protect your interests.
			</p>
			<p class="text-lg text-gray-600 mb-6">
				Whether you\'re a landlord, tenant, property investor, or business owner, our solicitors have the expertise
				to handle your lease requirements with precision and care.
			</p>
			<p class="text-lg text-gray-600">
				We handle all types of lease matters, including commercial lease drafting and review, lease renewals,
				assignments, extensions, negotiations, and dispute resolution.
			</p>
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Benefits of Our Lease Services</h2>
			<p class="text-lg text-gray-600">
				When you choose Farhang Solicitors for your lease matters, you benefit from our expertise,
				attention to detail, and commitment to protecting your interests.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			{#each benefits as benefit}
				<div class="bg-white rounded-lg shadow-md p-6 flex">
					<div class="text-[#0C2547] mr-4 flex-shrink-0">
						{@html benefit.icon}
					</div>
					<div>
						<h3 class="text-xl font-semibold text-[#0C2547] mb-2">{benefit.title}</h3>
						<p class="text-gray-600">{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Our Approach Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Our Lease Expertise</h2>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Thorough Lease Drafting</h3>
				<p class="text-lg text-gray-600 mb-4">
					We draft comprehensive lease agreements that clearly define the rights and obligations of all parties.
					Our lease documents address key issues such as rent reviews, repair obligations, permitted use,
					assignment rights, and termination provisions.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Detailed Lease Review</h3>
				<p class="text-lg text-gray-600 mb-4">
					Our solicitors carefully review lease documents to identify potential issues and unfavorable terms.
					We provide clear explanations of complex provisions and recommend amendments to better protect your interests.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Strategic Negotiation</h3>
				<p class="text-lg text-gray-600 mb-4">
					We negotiate lease terms on your behalf, leveraging our expertise and experience to secure favorable conditions.
					Our approach is both strategic and practical, focusing on achieving outcomes that align with your objectives.
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Dispute Resolution</h3>
				<p class="text-lg text-gray-600">
					When lease disputes arise, we provide effective representation to protect your interests.
					We explore all available options, from negotiation and mediation to litigation when necessary,
					to resolve disputes efficiently and favorably.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Price List -->
<PriceList services={leasesServices} title="Lease Services Pricing" />

<!-- Call to Action -->
<CallToAction
	title="Need Expert Lease Advice?"
	description="Contact our lease specialists today to discuss your requirements and how we can assist you."
	buttonText="Get in Touch"
	buttonLink="/contact"
/>
