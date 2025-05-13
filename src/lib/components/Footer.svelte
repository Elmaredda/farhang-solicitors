<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[#0C2547] text-white">
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Contact Information -->
			<div>
				<h3 class="text-xl font-semibold mb-4">Contact Us</h3>
				<address class="not-italic">
					<p class="mb-2">123 Legal Street</p>
					<p class="mb-2">London, UK</p>
					<p class="mb-2">SW1A 1AA</p>
					<p class="mb-2">
						<span class="font-medium">Phone:</span> 
						<a href="tel:+442012345678" class="hover:underline">+44 20 1234 5678</a>
					</p>
					<p class="mb-2">
						<span class="font-medium">Email:</span> 
						<a href="mailto:info@farhangsolicitors.com" class="hover:underline">info@farhangsolicitors.com</a>
					</p>
				</address>
			</div>
			
			<!-- Quick Links -->
			<div>
				<h3 class="text-xl font-semibold mb-4">Our Services</h3>
				<ul class="space-y-2">
					<li><a href="/immigration" class="hover:underline">Immigration</a></li>
					<li><a href="/conveyancing" class="hover:underline">Conveyancing</a></li>
					<li><a href="/leases" class="hover:underline">Leases</a></li>
					<li><a href="/landlord-tenant" class="hover:underline">Landlord & Tenant</a></li>
					<li><a href="/agency-services" class="hover:underline">Agency Services</a></li>
				</ul>
			</div>
			
			<!-- Company Info -->
			<div>
				<h3 class="text-xl font-semibold mb-4">About Farhang Solicitors</h3>
				<p class="mb-4">
					Farhang Solicitors is a professional law firm specializing in various legal services.
					We are committed to providing high-quality legal advice and representation to our clients.
				</p>
				<div class="flex space-x-4 mt-4">
					<a href="https://twitter.com" aria-label="Twitter" class="hover:text-gray-300">
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
						</svg>
					</a>
					<a href="https://linkedin.com" aria-label="LinkedIn" class="hover:text-gray-300">
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
						</svg>
					</a>
					<a href="https://facebook.com" aria-label="Facebook" class="hover:text-gray-300">
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
		
		<div class="border-t border-gray-700 mt-8 pt-8 text-center">
			<p>&copy; {currentYear} Farhang Solicitors. All rights reserved.</p>
			<div class="mt-2 space-x-4">
				<a href="/privacy-policy" class="hover:underline">Privacy Policy</a>
				<a href="/terms-of-service" class="hover:underline">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>
