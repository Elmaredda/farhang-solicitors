<script lang="ts">
	let { services = [], title = "Our Pricing" } = $props();
</script>

<section class="py-12 bg-gray-50">
	<div class="container mx-auto px-4">
		<h2 class="text-2xl md:text-3xl font-bold text-center text-[#0C2547] mb-8">{title}</h2>
		
		<div class="overflow-x-auto">
			<table class="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
				<thead class="bg-[#0C2547] text-white">
					<tr>
						<th class="py-3 px-4 text-left">Service</th>
						<th class="py-3 px-4 text-left">Description</th>
						<th class="py-3 px-4 text-right">Price</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
					{#each services as service}
						<tr class="hover:bg-gray-50">
							<td class="py-4 px-4 font-medium">{service.name}</td>
							<td class="py-4 px-4 text-gray-600">{service.description}</td>
							<td class="py-4 px-4 text-right">
								{#if service.priceRange}
									<span class="font-medium">{service.priceRange}</span>
								{:else if service.price}
									<span class="font-medium">£{service.price}</span>
								{:else}
									<span class="text-gray-500">Contact for pricing</span>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		
		<p class="mt-6 text-gray-600 text-center text-sm">
			* All prices are subject to VAT where applicable. Prices may vary depending on the complexity of your case.
			Please contact us for a personalized quote.
		</p>
	</div>
</section>
