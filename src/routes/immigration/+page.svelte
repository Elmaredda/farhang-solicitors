<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import PriceList from '$lib/components/PriceList.svelte';

	// Immigration services pricing
	const immigrationServices = [
		{
			name: 'Visitor Visa',
			description: 'Application for a standard visitor visa to the UK',
			price: 800
		},
		{
			name: 'Spouse/Partner Visa',
			description: 'Application for a spouse or partner to join a UK resident',
			price: 1500
		},
		{
			name: 'Work Visa',
			description: 'Application for a skilled worker visa',
			price: 1200
		},
		{
			name: 'Student Visa',
			description: 'Application for a student visa to study in the UK',
			price: 900
		},
		{
			name: 'Indefinite Leave to Remain',
			description: 'Application for permanent residence in the UK',
			price: 1800
		},
		{
			name: 'British Citizenship',
			description: 'Application for British citizenship',
			price: 1500
		},
		{
			name: 'Appeal Against Refusal',
			description: 'Appeal against a visa or immigration application refusal',
			priceRange: '£1200 - £2500'
		},
		{
			name: 'Immigration Consultation',
			description: 'One-hour consultation with an immigration specialist',
			price: 150
		}
	];

	// Benefits of our immigration services
	const benefits = [
		{
			title: 'Expert Guidance',
			description: 'Our immigration specialists have extensive experience with UK immigration law and procedures.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
		},
		{
			title: 'Personalized Service',
			description: 'We tailor our approach to your specific circumstances and immigration goals.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>'
		},
		{
			title: 'Comprehensive Support',
			description: 'We handle all aspects of your application, from documentation to representation.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
		},
		{
			title: 'High Success Rate',
			description: 'Our proven track record demonstrates our ability to secure successful outcomes for our clients.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>'
		}
	];
</script>

<svelte:head>
	<title>Immigration Services | Farhang Solicitors</title>
	<meta name="description" content="Expert immigration legal services including visa applications, appeals, and citizenship applications. Farhang Solicitors provides comprehensive immigration support." />
</svelte:head>

<!-- Hero Section -->
<Hero
	title="Immigration Legal Services"
	subtitle="Expert guidance through UK immigration processes, visa applications, and citizenship matters."
	buttonText="Discuss Your Case"
	buttonLink="/contact"
	backgroundImage="/images/immigration-hero.jpg"
/>

<!-- Service Overview -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Immigration Services Overview</h2>
			<p class="text-lg text-gray-600 mb-6">
				At Farhang Solicitors, we understand that navigating the UK immigration system can be complex and stressful.
				Our team of experienced immigration solicitors provides comprehensive legal support for all types of immigration matters.
			</p>
			<p class="text-lg text-gray-600 mb-6">
				Whether you\'re applying for a visa, seeking permanent residence, or facing immigration challenges,
				we offer expert guidance and representation to help you achieve your immigration goals.
			</p>
			<p class="text-lg text-gray-600">
				Our services cover all aspects of UK immigration law, including visitor visas, family visas, work visas,
				student visas, indefinite leave to remain, British citizenship, and appeals against refusals.
			</p>
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Benefits of Our Immigration Services</h2>
			<p class="text-lg text-gray-600">
				When you choose Farhang Solicitors for your immigration matters, you benefit from our expertise,
				personalized approach, and commitment to your success.
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
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Our Immigration Expertise</h2>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Comprehensive Knowledge</h3>
				<p class="text-lg text-gray-600 mb-4">
					Our immigration team stays up-to-date with the latest changes in UK immigration law and policy.
					We have in-depth knowledge of the Immigration Rules, relevant case law, and Home Office guidance.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Personalized Strategy</h3>
				<p class="text-lg text-gray-600 mb-4">
					We develop a tailored strategy for each client based on their specific circumstances and immigration goals.
					Our approach focuses on identifying the most suitable immigration route and preparing a strong application.
				</p>
			</div>

			<div class="mb-8">
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Thorough Preparation</h3>
				<p class="text-lg text-gray-600 mb-4">
					We meticulously prepare all applications, ensuring that all required documentation is properly gathered and presented.
					Our attention to detail helps minimize the risk of refusals due to technical or procedural issues.
				</p>
			</div>

			<div>
				<h3 class="text-2xl font-semibold text-[#0C2547] mb-4">Ongoing Support</h3>
				<p class="text-lg text-gray-600">
					We provide continuous support throughout the immigration process, keeping you informed at every stage.
					Our team is always available to address your questions and concerns, providing peace of mind during what can be a stressful process.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Price List -->
<PriceList services={immigrationServices} title="Immigration Services Pricing" />

<!-- Call to Action -->
<CallToAction
	title="Need Immigration Advice?"
	description="Contact our immigration specialists today to discuss your case and explore your options."
	buttonText="Get in Touch"
	buttonLink="/contact"
/>
