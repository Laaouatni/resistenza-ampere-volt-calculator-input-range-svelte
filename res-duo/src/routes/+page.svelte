<script lang="ts">
  import Container from "$lib/Container.svelte";

  function allResPossibleValues(): number[] {
    const base: number[] = [12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];

    return base
      .map((thisBase) => {
        return [thisBase, thisBase * 10, thisBase * 100, thisBase * 1000];
      })
      .flat()
      .sort((a, b) => a - b);
  }

  
  const formule = {
    ohmR: (V: number, I: number): number => {
      return V / I;
    },
    ohmI: (V: number, R: number): number => {
      return V / R;
    },
  };
  
  const DEFAULT_V = 12;
  let resInputValue = 0;
  
  let allValues = {
    R: allResPossibleValues()[0],
    I: formule.ohmI(12, allResPossibleValues()[0]),
    V: DEFAULT_V,
  };

  $: allValues.R = allResPossibleValues()[resInputValue];
</script>

<div class="grid p-8 gap-4 h-screen w-screen content-center bg-slate-300">
  <Container>
    <div class="flex gap-2 justify-center">
      <input type="number" class="w-11 border" bind:value={allValues.V} on:input={() => {
        allValues.I = formule.ohmI(allValues.V, allValues.R);
        allValues.R = formule.ohmR(allValues.V, allValues.I);
      }}/> VOLT
    </div>
  </Container>

  <Container>
    <div class="w-full grid">
      <input
        type="range"
        min={0}
        max={allResPossibleValues().length - 1}
        bind:value={resInputValue}
        on:input={() => {
          allValues.I = formule.ohmI(allValues.V, allValues.R);
        }}
      />
      <span>{allValues.R} OHM</span>
    </div>
  </Container>

  <Container>
    <div class="w-full grid">
      <input
        step="0.01"
        type="range"
        min={0}
        max={2}
        bind:value={allValues.I}
        on:input={() => {
          allValues.R = formule.ohmR(allValues.V, allValues.I);
        }}
      />
      <span>{allValues.I} AMPERE</span>
    </div>
  </Container>
</div>
