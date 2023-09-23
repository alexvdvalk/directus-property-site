<script lang="ts">
  import SalePriceRangeDropdown from "./SalePriceRangeDropdown.svelte";

  const propertyTypes = [
    {
      text: "Detached",
      value: "detached",
    },
    {
      text: "Semi-Detached",
      value: "semi-detached",
    },
    {
      text: "Terraced",
      value: "terraced",
    },
    {
      text: "Flat",
      value: "flat",
    },
    {
      text: "Bungelow",
      value: "bungelow",
    },
    {
      text: "Land",
      value: "land",
    },
    {
      text: "Park Home",
      value: "park_home",
    },
  ];
</script>

<form
  method="get"
  class="grid grid-cols-1 md:grid-cols-2 px-5 gap-5 container mx-auto"
>
  <div class="flex flex-col">
    <label for="postcode" class="label">Postcode</label>
    <input type="text" name="postcode" class="input" />
  </div>

  <div class="flex flex-col">
    <label for="type" class="label">Type:</label>

    <select name="type" id="type" class="input">
      {#each propertyTypes as i, index}
        <option value={i.value}>{i.text}</option>
      {/each}
    </select>
  </div>
  <div class="flex flex-col">
    <label for="minrooms" class="label">Min Rooms:</label>

    <select name="minrooms" id="minrooms" class="input">
      {#each Array(5) as i, index}
        <option value={index + 1}>{index + 1}</option>
      {/each}
    </select>
  </div>
  <div class="flex flex-col">
    <label for="maxrooms" class="label">Max Rooms:</label>

    <select name="maxrooms" id="maxrooms" class="input">
      {#each Array(5) as i, index}
        <option value={index + 1}>{index + 1}</option>
      {/each}
    </select>
  </div>

  <div class="flex flex-col">
    <label for="minrooms" class="label">Minimum Price:</label>

    <select name="minPrice" id="minPrice" class="input">
      <option value="">No minimum</option>
      <SalePriceRangeDropdown />
    </select>
  </div>
  <div class="flex flex-col">
    <label for="minrooms" class="label">Maximum Price:</label>

    <select name="maxPrice" id="maxPrice" class="input">
      <option value="">No maximum</option>
      <SalePriceRangeDropdown />
    </select>
  </div>
  <div class="hidden" />
  <div class="flex flex-row w-full justify-end">
    <button type="submit" class="btn variant-filled-secondary w-full"
      >Search</button
    >
  </div>
</form>
