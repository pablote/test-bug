<script>
  export let item = {};
</script>

<div class="item">
  <div class="item__top">title</div>
  <div class="item__bottom">
    {#if item.name}
      <div class="item__name">
        {item.name}
      </div>
    {/if}

    <div>something</div>

    <div>something</div>

    <div>something</div>

    <div>
      {item.value}
    </div>
  </div>
</div>

<style>
  .item {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
  }

  .item .item__bottom {
    display: flex;
  }

  .item .item__bottom > * {
    padding: 0 5px;
  }

  .item .item__name {
    background: lightblue;
  }
</style>
