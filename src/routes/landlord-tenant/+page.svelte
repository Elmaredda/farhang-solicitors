<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import PriceList from '$lib/components/PriceList.svelte';

	// Landlord & Tenant services pricing
	const landlordTenantServices = [
		{
			name: 'Tenancy Agreement Drafting',
			description: 'Preparation of a comprehensive tenancy agreement',
			priceRange: '£400 - £800'
		},
		{
			name: 'Tenancy Agreement Review',
			description: 'Detailed review and advice on tenancy agreement terms',
			priceRange: '£300 - £600'
		},
		{
			name: 'Section 21 Notice',
			description: 'Preparation and service of a Section 21 notice',
			priceRange: '£350 - £500'
		},
		{
			name: 'Section 8 Notice',
			description: 'Preparation and service of a Section 8 notice',
			priceRange: '£350 - £500'
		},
		{
			name: 'Possession Proceedings',
			description: 'Legal representation in possession proceedings',
			priceRange: '£1,200 - £2,500'
		},
		{
			name: 'Rent Arrears Recovery',
			description: 'Legal assistance with recovering rent arrears',
			priceRange: '£800 - £1,500'
		},
		{
			name: 'Deposit Dispute Resolution',
			description: 'Representation in tenancy deposit disputes',
			priceRange: '£500 - £1,000'
		},
		{
			name: 'Landlord/Tenant Consultation',
			description: 'One-hour consultation with a landlord/tenant specialist',
			price: 180
		}
	];

	// Benefits of our landlord & tenant services
	const benefits = [
		{
			title: 'Legal Compliance',
			description: 'We ensure your tenancy agreements and procedures comply with all relevant legislation and regulations.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
		},
		{
			title: 'Risk Mitigation',
			description: 'Our services help identify and address potential issues before they escalate into costly disputes.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>'
		},
		{
			title: 'Efficient Dispute Resolution',
			description: 'We provide effective representation to resolve disputes quickly and favorably.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>'
		},
		{
			title: 'Tailored Advice',
			description: 'We provide personalized advice based on your specific circumstances and objectives.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>'
		}
	];
</script>

<svelte:head>
	<title>Landlord & Tenant Services | Farhang Solicitors</title>
	<meta name="description" content="Expert legal services for landlords and tenants, including tenancy agreements, dispute resolution, and possession proceedings. Farhang Solicitors ensures your rights are protected." />
</svelte:head>

<!-- Hero Section -->
<Hero
	title="Landlord & Tenant Services"
	subtitle="Expert legal support for landlords and tenants in disputes, agreements, and regulatory compliance."
	buttonText="Discuss Your Case"
	buttonLink="/contact"
	backgroundImage="/images/landlord-tenant-hero.jpg"
/>

<!-- Service Overview -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Landlord & Tenant Services Overview</h2>
			<p class="text-lg text-gray-600 mb-6">
				At Farhang Solicitors, we provide comprehensive legal services for both landlords and tenants.
				Our experienced team offers expert advice and representation on all aspects of residential and commercial
				landlord-tenant relationships.
			</p>
			<p class="text-lg text-gray-600 mb-6">
				Whether you\'re a landlord seeking to protect your investment or a tenant wanting to ensure your rights are upheld,
				our solicitors have the expertise to guide you through the complex landscape of property law.
			</p>
			<p class="text-lg text-gray-600">
				We handle all types of landlord and tenant matters, including tenancy agreements, possession proceedings,
				rent arrears recovery, deposit disputes, disrepair claims, and regulatory compliance.
			</p>
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Benefits of Our Landlord & Tenant Services</h2>
			<p class="text-lg text-gray-600">
				When you choose Farhang Solicitors for your landlord or tenant matters, you benefit from our expertise,
				practical approach, and commitment to protecting your interests.
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
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Our Landlord & Tenant Expertise</h2>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">For Landlords</h3>
				<p class="text-lg text-gray-600 mb-4">
					We help landlords protect their investments and navigate the increasingly complex regulatory landscape.
					Our services include drafting robust tenancy agreements, advising on compliance with housing regulations,
					handling possession proceedings, and resolving disputes efficiently.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">For Tenants</h3>
				<p class="text-lg text-gray-600 mb-4">
					We assist tenants in understanding and enforcing their rights. Our services include reviewing tenancy agreements,
					advising on deposit protection, addressing disrepair issues, challenging unfair evictions,
					and representing tenants in disputes with landlords.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Dispute Resolution</h3>
				<p class="text-lg text-gray-600 mb-4">
					We provide effective representation in landlord-tenant disputes, exploring all available options from
					negotiation and mediation to court proceedings when necessary. Our goal is to resolve disputes efficiently
					while protecting our clients' interests.
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Regulatory Compliance</h3>
				<p class="text-lg text-gray-600">
					We help landlords navigate the complex web of regulations governing residential and commercial properties.
					Our advice covers areas such as tenant referencing, deposit protection, safety requirements,
					licensing schemes, and the ever-changing landscape of housing legislation.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Price List -->
<PriceList services={landlordTenantServices} title="Landlord & Tenant Services Pricing" />

<!-- Call to Action -->
<CallToAction
	title="Need Landlord or Tenant Legal Advice?"
	description="Contact our specialists today to discuss your case and explore your options."
	buttonText="Get in Touch"
	buttonLink="/contact"
/>
