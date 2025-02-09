<script lang="ts">
  import { onMount } from "svelte";
  import { del, get, set } from 'idb-keyval';
  import { Button } from "carbon-components-svelte";
  import Checkmark from "carbon-icons-svelte/lib/Checkmark.svelte";
  import Information from "carbon-icons-svelte/lib/Information.svelte";
  import { type Config, configsEqual, getDefaultConfig, normalizeConfig, isDefaultConfig } from "./sheet/Sheet";
  import { config } from "./stores";

  import RequestPersistentStorage from "./RequestPersistentStorage.svelte";

  let userDefaultConfig: Config = getDefaultConfig();

  onMount(async () => {
    try {
      userDefaultConfig = normalizeConfig(await get('defaultConfig'));
    } catch(e) {
      console.warn('Error attempting to load user default config');
      userDefaultConfig = getDefaultConfig();
    }
  });

  async function setDefaultConfig() {
    if (currentConfigIsDefaultConfig) {
      try {
        await del('defaultConfig')
      } catch(e) {
        console.warn('Error attempting to delete user config');
      }
      userDefaultConfig = getDefaultConfig();

      return;
    }
    
    let saveError = false;
    try {
      await set('defaultConfig', $config);
    } catch (e) {
      console.warn('Error attempting to save user default config');
      saveError = true;
    }

    if (saveError) {
      userDefaultConfig = getDefaultConfig();
    } else {
      userDefaultConfig = JSON.parse(JSON.stringify($config));
    }
  }

  function useDefaultConfig() {
    $config = JSON.parse(JSON.stringify(userDefaultConfig));
  }

  $: configsMatch = configsEqual($config, userDefaultConfig);
  $: currentConfigIsDefaultConfig = isDefaultConfig($config);

</script>

<style>
  div.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>


<div class="container">
<p>
  {#if configsMatch}
    <Checkmark color="green"/> The current sheet config matches the user default config.
  {:else if !currentConfigIsDefaultConfig}
    <Information color="blue"/> The current sheet config differs from the user default config, the buttons 
    below can be used to either save this sheet's config as the user default config or apply the user default 
    config to this sheet.
  {:else}
    <Information color="blue"/> The current sheet is using the EngineeringPaper.xyz default config which 
    is different than the user default config. The user default config can be applied to this sheet using 
    the second button below.
  {/if}
</p>

<div class="button-container">
  <Button 
    kind="tertiary"
    on:click={setDefaultConfig}
    disabled={configsMatch}
  >
    Use This Sheet's Config as the User Default Config
  </Button>

  <Button
    kind="tertiary"
    on:click={useDefaultConfig}
    disabled={configsMatch}
  >
    Apply the User Default Config to This Sheet
  </Button>
</div>

<div>
  <RequestPersistentStorage />
</div>

</div>
