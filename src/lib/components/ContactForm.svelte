<script lang="ts">
	// Form state
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let service = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);
	let errorMessage = $state('');
	
	// Available services
	const services = [
		'Immigration',
		'Conveyancing',
		'Leases',
		'Landlord & Tenant',
		'Agency Services',
		'Other'
	];
	
	// Handle form submission
	async function handleSubmit() {
		// Reset states
		isSubmitting = true;
		errorMessage = '';
		
		// Validate form
		if (!name || !email || !message) {
			errorMessage = 'Please fill in all required fields.';
			isSubmitting = false;
			return;
		}
		
		// In a real application, you would send the form data to your backend
		// For now, we'll simulate a successful submission
		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			// Reset form
			name = '';
			email = '';
			phone = '';
			service = '';
			message = '';
			
			// Show success message
			isSubmitted = true;
		} catch (error) {
			errorMessage = 'There was an error submitting your form. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="bg-white rounded-lg shadow-md p-6 md:p-8">
	{#if isSubmitted}
		<div class="text-center py-8">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<h3 class="text-2xl font-bold text-[#0C2547] mb-2">Thank You!</h3>
			<p class="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
			<button 
				on:click={() => isSubmitted = false}
				class="inline-block bg-[#0C2547] text-white font-medium px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
			>
				Send Another Message
			</button>
		</div>
	{:else}
		<form on:submit|preventDefault={handleSubmit} class="space-y-6">
			{#if errorMessage}
				<div class="bg-red-50 text-red-700 p-4 rounded-md">
					{errorMessage}
				</div>
			{/if}
			
			<div>
				<label for="name" class="block text-gray-700 font-medium mb-2">Name *</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					required
					class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0C2547] focus:border-[#0C2547]"
				/>
			</div>
			
			<div>
				<label for="email" class="block text-gray-700 font-medium mb-2">Email *</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0C2547] focus:border-[#0C2547]"
				/>
			</div>
			
			<div>
				<label for="phone" class="block text-gray-700 font-medium mb-2">Phone</label>
				<input
					type="tel"
					id="phone"
					bind:value={phone}
					class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0C2547] focus:border-[#0C2547]"
				/>
			</div>
			
			<div>
				<label for="service" class="block text-gray-700 font-medium mb-2">Service</label>
				<select
					id="service"
					bind:value={service}
					class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0C2547] focus:border-[#0C2547]"
				>
					<option value="">Select a service</option>
					{#each services as serviceOption}
						<option value={serviceOption}>{serviceOption}</option>
					{/each}
				</select>
			</div>
			
			<div>
				<label for="message" class="block text-gray-700 font-medium mb-2">Message *</label>
				<textarea
					id="message"
					bind:value={message}
					required
					rows="5"
					class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0C2547] focus:border-[#0C2547]"
				></textarea>
			</div>
			
			<button
				type="submit"
				disabled={isSubmitting}
				class="w-full bg-[#0C2547] text-white font-medium py-3 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-70"
			>
				{isSubmitting ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	{/if}
</div>
