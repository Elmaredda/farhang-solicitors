<script lang="ts">
	// Active link tracking
	let { pathname } = $props();

	// Navigation links
	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/immigration', label: 'Immigration' },
		{ href: '/conveyancing', label: 'Conveyancing' },
		{ href: '/leases', label: 'Leases' },
		{ href: '/landlord-tenant', label: 'Landlord & Tenant' },
		{ href: '/agency-services', label: 'Agency Services' },
		{ href: '/about', label: 'About Us' },
		{ href: '/contact', label: 'Contact Us' }
	];

	// Mobile menu state
	let isMenuOpen = $state(false);

	// Toggle mobile menu
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="bg-white shadow-md">
	<div class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center">
				<img src="/logo.svg" alt="Farhang Solicitors" class="h-15 w-auto" style="height: 3.75rem;" />
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex space-x-6">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-gray-700 hover:text-[#0C2547] px-2 py-1 rounded transition-colors {pathname === link.href ? 'font-semibold text-[#0C2547] border-b-2 border-[#0C2547]' : ''}"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<!-- Mobile menu button -->
			<button
				class="md:hidden text-gray-700 hover:text-[#0C2547] focus:outline-none"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<nav class="md:hidden mt-4 pb-4 space-y-2">
				{#each navLinks as link}
					<a
						href={link.href}
						class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0C2547] rounded {pathname === link.href ? 'font-semibold text-[#0C2547] bg-gray-50' : ''}"
						onclick={() => isMenuOpen = false}
					>
						{link.label}
					</a>
				{/each}
			</nav>
		{/if}
	</div>
</header>
