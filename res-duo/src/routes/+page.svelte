<script lang="ts">
  import Container from "$lib/Components/container/Container.svelte";
  import allAvaiableResistors from "$lib/Scripts/allAvaiableResistors";
  import { ohm } from "$lib/Scripts/formule";

  let bindedV: number = 12;
  let bindedR: number = allAvaiableResistors().indexOf(330);
  let bindedI: number = bindedV / bindedR;

  let V: number;
  let R: number;
  let I: number;

  $: {
    V = bindedV;
    R = allAvaiableResistors()[bindedR];

    I = ohm({ V, R }).I || bindedI;
    bindedI = ohm({ V, R }).I || I;
  }
</script>

<div class="grid p-8 gap-4 h-screen w-screen content-center bg-blue-400 text-3xl">
  <Container>
    <div class="flex gap-2 justify-center">
      <input type="number" class=" w-16 border" bind:value={bindedV} /> VOLT
    </div>
  </Container>

  <Container>
    <div class="w-full grid gap-3">
      <input
        type="range"
        min={0}
        max={allAvaiableResistors().length - 1}
        bind:value={bindedR}
      />
      <span>
        <span class="font-bold">{R}</span> OHM
      </span>
    </div>
  </Container>

  <Container>
    <div class="w-full grid gap-3">
      <input
        step="0.000000000000000001"
        type="range"
        min={0}
        max={0.4}
        bind:value={bindedI}
      />
      <span>
        <span class="font-bold">{I}</span> AMPERE
      </span>
    </div>
  </Container>
</div>
