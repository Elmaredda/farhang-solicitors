<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import PriceList from '$lib/components/PriceList.svelte';

	// Conveyancing services pricing
	const conveyancingServices = [
		{
			name: 'Residential Property Purchase',
			description: 'Legal services for buying a residential property',
			priceRange: '£800 - £1,500'
		},
		{
			name: 'Residential Property Sale',
			description: 'Legal services for selling a residential property',
			priceRange: '£700 - £1,300'
		},
		{
			name: 'Residential Property Sale and Purchase',
			description: 'Combined legal services for selling and buying residential properties',
			priceRange: '£1,400 - £2,500'
		},
		{
			name: 'Remortgage',
			description: 'Legal services for remortgaging a property',
			priceRange: '£500 - £800'
		},
		{
			name: 'Transfer of Equity',
			description: 'Legal services for transferring ownership shares in a property',
			priceRange: '£600 - £1,000'
		},
		{
			name: 'New Build Purchase',
			description: 'Specialized legal services for purchasing a new build property',
			priceRange: '£900 - £1,600'
		},
		{
			name: 'Lease Extension',
			description: 'Legal services for extending a leasehold',
			priceRange: '£800 - £1,500'
		},
		{
			name: 'Conveyancing Consultation',
			description: 'One-hour consultation with a conveyancing specialist',
			price: 150
		}
	];

	// Benefits of our conveyancing services
	const benefits = [
		{
			title: 'Smooth Transactions',
			description: 'We handle all legal aspects of property transactions to ensure a smooth and efficient process.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
		},
		{
			title: 'Thorough Due Diligence',
			description: 'We conduct comprehensive property searches and legal checks to protect your investment.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>'
		},
		{
			title: 'Clear Communication',
			description: 'We keep you informed throughout the process with regular updates and clear explanations.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>'
		},
		{
			title: 'Fixed Fee Options',
			description: 'We offer transparent fixed fee options so you know exactly what you\'ll pay from the start.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
		}
	];
</script>

<svelte:head>
	<title>Conveyancing Services | Farhang Solicitors</title>
	<meta name="description" content="Professional conveyancing services for property purchases, sales, remortgages, and transfers. Farhang Solicitors ensures smooth property transactions." />
</svelte:head>

<!-- Hero Section -->
<Hero
	title="Conveyancing Services"
	subtitle="Expert legal support for property transactions, ensuring a smooth and efficient process."
	buttonText="Discuss Your Property Transaction"
	buttonLink="/contact"
	backgroundImage="/images/conveyancing-hero.jpg"
/>

<!-- Service Overview -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Conveyancing Services Overview</h2>
			<p class="text-lg text-gray-600 mb-6">
				At Farhang Solicitors, we provide comprehensive conveyancing services to guide you through the legal aspects of buying,
				selling, or remortgaging property. Our experienced conveyancing team ensures that your property transaction proceeds
				smoothly and efficiently.
			</p>
			<p class="text-lg text-gray-600 mb-6">
				Whether you\'re a first-time buyer, an experienced property investor, or looking to remortgage,
				our solicitors have the expertise to handle your transaction with precision and care.
			</p>
			<p class="text-lg text-gray-600">
				We handle all types of residential property transactions, including freehold and leasehold properties,
				new builds, remortgages, transfers of equity, and lease extensions.
			</p>
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Benefits of Our Conveyancing Services</h2>
			<p class="text-lg text-gray-600">
				When you choose Farhang Solicitors for your property transaction, you benefit from our expertise,
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
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Our Conveyancing Expertise</h2>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Comprehensive Legal Checks</h3>
				<p class="text-lg text-gray-600 mb-4">
					We conduct thorough property searches and legal checks to identify any issues that could affect your property transaction.
					Our detailed approach helps protect your investment and provides peace of mind.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Contract Review and Negotiation</h3>
				<p class="text-lg text-gray-600 mb-4">
					Our solicitors carefully review all contracts and legal documents, explaining the terms and implications in clear language.
					We negotiate on your behalf to ensure your interests are protected throughout the transaction.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Efficient Completion Process</h3>
				<p class="text-lg text-gray-600 mb-4">
					We manage the completion process efficiently, handling the transfer of funds, registration with the Land Registry,
					and payment of any applicable taxes. Our goal is to make the final stages of your transaction as smooth as possible.
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Ongoing Support</h3>
				<p class="text-lg text-gray-600">
					We provide continuous support throughout your property transaction, keeping you informed at every stage.
					Our team is always available to address your questions and concerns, providing clarity during what can be a complex process.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Price List -->
<PriceList services={conveyancingServices} title="Conveyancing Services Pricing" />

<!-- Call to Action -->
<CallToAction
	title="Ready to Proceed with Your Property Transaction?"
	description="Contact our conveyancing specialists today to discuss your property transaction and get a personalized quote."
	buttonText="Get in Touch"
	buttonLink="/contact"
/>
