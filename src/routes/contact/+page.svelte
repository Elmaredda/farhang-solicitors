<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact Us | Farhang Solicitors</title>
	<meta name="description" content="Contact Farhang Solicitors for expert legal advice and representation. Our team of experienced solicitors is ready to assist you with your legal needs." />
</svelte:head>

<!-- Hero Section -->
<Hero 
	title="Contact Us"
	subtitle="Get in touch with our team of experienced solicitors for expert legal advice and representation."
	backgroundImage="/images/contact-hero.jpg"
/>

<!-- Contact Section -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Information -->
			<div>
				<h2 class="text-3xl font-bold text-[#0C2547] mb-6">Get In Touch</h2>
				<p class="text-lg text-gray-600 mb-8">
					We're here to help with your legal needs. Contact us today to schedule a consultation 
					with one of our experienced solicitors.
				</p>
				
				<div class="space-y-6">
					<div class="flex items-start">
						<div class="text-[#0C2547] mr-4 mt-1">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-[#0C2547] mb-2">Address</h3>
							<address class="not-italic text-gray-600">
								123 Legal Street<br />
								London<br />
								SW1A 1AA<br />
								United Kingdom
							</address>
						</div>
					</div>
					
					<div class="flex items-start">
						<div class="text-[#0C2547] mr-4 mt-1">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-[#0C2547] mb-2">Phone</h3>
							<p class="text-gray-600">
								<a href="tel:+442012345678" class="hover:underline">+44 20 1234 5678</a>
							</p>
						</div>
					</div>
					
					<div class="flex items-start">
						<div class="text-[#0C2547] mr-4 mt-1">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-[#0C2547] mb-2">Email</h3>
							<p class="text-gray-600">
								<a href="mailto:info@farhangsolicitors.com" class="hover:underline">info@farhangsolicitors.com</a>
							</p>
						</div>
					</div>
					
					<div class="flex items-start">
						<div class="text-[#0C2547] mr-4 mt-1">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-semibold text-[#0C2547] mb-2">Office Hours</h3>
							<p class="text-gray-600">
								Monday - Friday: 9:00 AM - 5:30 PM<br />
								Saturday: 10:00 AM - 2:00 PM<br />
								Sunday: Closed
							</p>
						</div>
					</div>
				</div>
				
				<!-- Social Media Links -->
				<div class="mt-8">
					<h3 class="text-xl font-semibold text-[#0C2547] mb-4">Follow Us</h3>
					<div class="flex space-x-4">
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-[#0C2547] hover:text-gray-600" aria-label="Twitter">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
							</svg>
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-[#0C2547] hover:text-gray-600" aria-label="LinkedIn">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
							</svg>
						</a>
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-[#0C2547] hover:text-gray-600" aria-label="Facebook">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			
			<!-- Contact Form -->
			<div>
				<h2 class="text-3xl font-bold text-[#0C2547] mb-6">Send Us a Message</h2>
				<ContactForm />
			</div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="py-12 bg-gray-50">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-[#0C2547] mb-8 text-center">Our Location</h2>
		<div class="h-96 w-full rounded-lg overflow-hidden shadow-md">
			<!-- Replace with actual Google Maps embed code -->
			<iframe 
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2889089402105!2d-0.12809492392006172!3d51.50736731729344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1699000000000!5m2!1sen!2suk" 
				width="100%" 
				height="100%" 
				style="border:0;" 
				allowfullscreen="" 
				loading="lazy" 
				referrerpolicy="no-referrer-when-downgrade"
				title="Farhang Solicitors Office Location"
			></iframe>
		</div>
	</div>
</section>
