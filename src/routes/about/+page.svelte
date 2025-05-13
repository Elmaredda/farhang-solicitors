<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	
	// Team members data
	const teamMembers = [
		{
			name: 'Sarah Johnson',
			position: 'Managing Partner',
			specialization: 'Immigration Law',
			image: '/images/team/sarah-johnson.jpg',
			bio: 'Sarah has over 15 years of experience in immigration law and leads our immigration practice. She has successfully handled numerous complex immigration cases and is known for her strategic approach and attention to detail.'
		},
		{
			name: 'David Thompson',
			position: 'Senior Partner',
			specialization: 'Conveyancing',
			image: '/images/team/david-thompson.jpg',
			bio: 'David specializes in residential and commercial conveyancing with over 20 years of experience. He has handled thousands of property transactions and is committed to providing a smooth and efficient service.'
		},
		{
			name: 'Michael Chen',
			position: 'Partner',
			specialization: 'Landlord & Tenant Law',
			image: '/images/team/michael-chen.jpg',
			bio: 'Michael is an expert in landlord and tenant law with particular focus on commercial property. He provides practical advice to both landlords and tenants on all aspects of leasehold relationships.'
		},
		{
			name: 'Emma Williams',
			position: 'Associate',
			specialization: 'Commercial Agency',
			image: '/images/team/emma-williams.jpg',
			bio: 'Emma specializes in commercial agency law and has extensive experience in drafting and negotiating agency agreements. She provides strategic advice to both principals and agents on all aspects of agency relationships.'
		}
	];
	
	// Firm values
	const values = [
		{
			title: 'Excellence',
			description: 'We strive for excellence in everything we do, providing the highest quality legal services to our clients.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>'
		},
		{
			title: 'Integrity',
			description: 'We maintain the highest ethical standards and act with integrity in all our dealings with clients and colleagues.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
		},
		{
			title: 'Client Focus',
			description: 'We put our clients at the center of everything we do, focusing on their needs and objectives.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>'
		},
		{
			title: 'Innovation',
			description: 'We embrace innovation and continuously seek better ways to serve our clients and deliver legal solutions.',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
		}
	];
	
	// Accreditations
	const accreditations = [
		{
			name: 'Law Society of England and Wales',
			logo: '/images/accreditations/law-society.png'
		},
		{
			name: 'Solicitors Regulation Authority',
			logo: '/images/accreditations/sra.png'
		},
		{
			name: 'Immigration Law Practitioners Association',
			logo: '/images/accreditations/ilpa.png'
		},
		{
			name: 'Conveyancing Quality Scheme',
			logo: '/images/accreditations/cqs.png'
		}
	];
</script>

<svelte:head>
	<title>About Us | Farhang Solicitors</title>
	<meta name="description" content="Learn about Farhang Solicitors, our team of experienced legal professionals, our values, and our commitment to providing excellent legal services." />
</svelte:head>

<!-- Hero Section -->
<Hero 
	title="About Farhang Solicitors"
	subtitle="A dedicated team of legal professionals committed to providing excellent legal services."
	backgroundImage="/images/about-hero.jpg"
/>

<!-- Firm Overview -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-6">Our Firm</h2>
			<p class="text-lg text-gray-600 mb-6">
				Farhang Solicitors is a dedicated law firm providing high-quality legal services to individuals and businesses. 
				Established in 2005, we have built a reputation for excellence, integrity, and client-focused service.
			</p>
			<p class="text-lg text-gray-600 mb-6">
				Our team of experienced solicitors specializes in various practice areas, including immigration, conveyancing, 
				leases, landlord & tenant matters, and agency services. We combine legal expertise with practical advice 
				to deliver solutions that meet our clients' needs and objectives.
			</p>
			<p class="text-lg text-gray-600">
				At Farhang Solicitors, we believe in building long-term relationships with our clients based on trust, 
				understanding, and effective communication. We take the time to understand your specific circumstances 
				and provide tailored legal advice and representation.
			</p>
		</div>
	</div>
</section>

<!-- Our Values -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Our Values</h2>
			<p class="text-lg text-gray-600">
				Our values guide everything we do at Farhang Solicitors, from how we interact with clients 
				to how we approach legal challenges.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			{#each values as value}
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<div class="text-[#0C2547] mb-4 flex justify-center">
						{@html value.icon}
					</div>
					<h3 class="text-xl font-semibold text-[#0C2547] mb-2">{value.title}</h3>
					<p class="text-gray-600">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Our Team -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Our Team</h2>
			<p class="text-lg text-gray-600">
				Meet our team of experienced legal professionals dedicated to providing excellent service and advice.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each teamMembers as member}
				<div class="bg-white rounded-lg shadow-md overflow-hidden">
					<div class="h-64 bg-gray-200">
						<!-- If image is available, display it, otherwise show a placeholder -->
						{#if member.image}
							<img src={member.image} alt={member.name} class="w-full h-full object-cover" />
						{:else}
							<div class="w-full h-full flex items-center justify-center bg-gray-300">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</div>
						{/if}
					</div>
					<div class="p-6">
						<h3 class="text-xl font-semibold text-[#0C2547]">{member.name}</h3>
						<p class="text-gray-600 mb-1">{member.position}</p>
						<p class="text-[#0C2547] font-medium mb-3">Specialization: {member.specialization}</p>
						<p class="text-gray-600 text-sm">{member.bio}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Accreditations -->
<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-3xl mx-auto text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-[#0C2547] mb-4">Our Accreditations</h2>
			<p class="text-lg text-gray-600">
				We are proud to be accredited by and members of these prestigious legal organizations.
			</p>
		</div>
		
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
			{#each accreditations as accreditation}
				<div class="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
					{#if accreditation.logo}
						<img src={accreditation.logo} alt={accreditation.name} class="max-h-16" />
					{:else}
						<p class="text-center text-[#0C2547] font-medium">{accreditation.name}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Call to Action -->
<CallToAction 
	title="Ready to Work With Us?"
	description="Contact our team today to discuss your legal needs and how we can assist you."
	buttonText="Contact Us"
	buttonLink="/contact"
/>
