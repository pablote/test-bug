<script>
  import { flip } from "svelte/animate";
  import { sortItems } from "./lib/sortItems";
  import Item from "./lib/Item.svelte";

  let sortByName = true;
  let items = [
    { id: 1, name: "number 1", value: "value c" },
    { id: 2, name: "number 2", value: "value b" },
    { id: 3, name: "number 3", value: "value a" },
  ];

  $: sortedItems = sortItems(items, sortByName);

  const handleChangeSort = () => {
    sortByName = !sortByName;
  };
</script>

<div>
  <button on:click={handleChangeSort}> change sort </button>

  <div>
    sort by name: {sortByName}
  </div>

  {#each sortedItems as item (item.id)}
    <div animate:flip={{ duration: 250 }}>
      <Item {item} />
    </div>
  {/each}
</div>
