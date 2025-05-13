<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import PriceList from '$lib/components/PriceList.svelte';

	// Agency services pricing
	const agencyServices = [
		{
			name: 'Commercial Agency Agreement',
			description: 'Drafting or reviewing commercial agency agreements',
			priceRange: '£1,000 - £2,000'
		},
		{
			name: 'Distribution Agreement',
			description: 'Drafting or reviewing distribution agreements',
			priceRange: '£1,200 - £2,200'
		},
		{
			name: 'Agency Termination Advice',
			description: 'Legal advice on agency termination and compensation',
			priceRange: '£800 - £1,500'
		},
		{
			name: 'Agency Dispute Resolution',
			description: 'Representation in agency-related disputes',
			priceRange: '£1,500 - £3,000'
		},
		{
			name: 'Franchise Agreement',
			description: 'Drafting or reviewing franchise agreements',
			priceRange: '£1,500 - £3,000'
		},
		{
			name: 'Regulatory Compliance Review',
			description: 'Review of agency operations for regulatory compliance',
			priceRange: '£800 - £1,800'
		},
		{
			name: 'International Agency Advice',
			description: 'Legal advice on international agency relationships',
			priceRange: '£1,500 - £3,500'
		},
		{
			name: 'Agency Consultation',
			description: 'One-hour consultation with an agency law specialist',
			price: 200
		}
	];

	// Benefits of our agency services
	const benefits = [
		{
			title: 'Comprehensive Protection',
			description: 'Our agency agreements provide robust protection for your business interests and commercial relationships.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
		},
		{
			title: 'Regulatory Compliance',
			description: 'We ensure your agency arrangements comply with all relevant legislation and regulations.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>'
		},
		{
			title: 'Risk Management',
			description: 'We identify and address potential risks in your agency relationships to prevent future disputes.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>'
		},
		{
			title: 'Commercial Insight',
			description: 'Our advice combines legal expertise with commercial understanding to support your business objectives.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>'
		}
	];
</script>

<svelte:head>
	<title>Agency Services | Farhang Solicitors</title>
	<meta name="description" content="Professional agency legal services including commercial agency agreements, distribution agreements, and dispute resolution. Farhang Solicitors ensures your agency relationships are legally sound." />
</svelte:head>

<!-- Hero Section -->
<Hero
	title="Agency Services"
	subtitle="Expert legal support for commercial agency relationships, agreements, and dispute resolution."
	buttonText="Discuss Your Agency Requirements"
	buttonLink="/contact"
	backgroundImage="/images/agency-hero.jpg"
/>

<!-- Service Overview -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Agency Services Overview</h2>
			<p class="text-lg text-gray-600 mb-6">
				At Farhang Solicitors, we provide comprehensive legal services for all aspects of commercial agency relationships.
				Our experienced team offers expert advice and representation on agency agreements, distribution arrangements,
				franchising, and related disputes.
			</p>
			<p class="text-lg text-gray-600 mb-6">
				Whether you\'re a principal appointing agents, an agent seeking to protect your interests, or a business
				establishing distribution networks, our solicitors have the expertise to guide you through the complex
				legal landscape of agency law.
			</p>
			<p class="text-lg text-gray-600">
				We handle all types of agency matters, including drafting and reviewing agency agreements, advising on
				termination and compensation rights, resolving disputes, and ensuring regulatory compliance.
			</p>
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Benefits of Our Agency Services</h2>
			<p class="text-lg text-gray-600">
				When you choose Farhang Solicitors for your agency matters, you benefit from our expertise,
				commercial understanding, and commitment to protecting your business interests.
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
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Our Agency Expertise</h2>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Commercial Agency Agreements</h3>
				<p class="text-lg text-gray-600 mb-4">
					We draft and review commercial agency agreements that clearly define the rights and obligations of principals and agents.
					Our agreements address key issues such as territory, commission structures, performance targets,
					intellectual property rights, and termination provisions.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Distribution and Franchise Arrangements</h3>
				<p class="text-lg text-gray-600 mb-4">
					We provide expert advice on distribution agreements and franchise arrangements, ensuring they are
					structured effectively and comply with relevant regulations. Our services include drafting and reviewing
					agreements, advising on competition law implications, and resolving disputes.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Termination and Compensation</h3>
				<p class="text-lg text-gray-600 mb-4">
					We advise on the complex area of agency termination and compensation rights, particularly under
					the Commercial Agents (Council Directive) Regulations. Whether you\'re a principal seeking to terminate
					an agency or an agent claiming compensation, we provide expert guidance on your legal position.
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Dispute Resolution</h3>
				<p class="text-lg text-gray-600">
					When agency disputes arise, we provide effective representation to protect your interests.
					We explore all available options, from negotiation and mediation to litigation when necessary,
					to resolve disputes efficiently and favorably.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Price List -->
<PriceList services={agencyServices} title="Agency Services Pricing" />

<!-- Call to Action -->
<CallToAction
	title="Need Expert Agency Law Advice?"
	description="Contact our agency law specialists today to discuss your requirements and how we can assist you."
	buttonText="Get in Touch"
	buttonLink="/contact"
/>
