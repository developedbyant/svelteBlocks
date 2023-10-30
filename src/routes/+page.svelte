<script lang="ts">
    import Button from 'svelteBlocks/components/Button.svelte';
    import Input from 'svelteBlocks/components/Input.svelte';
    import InputChips from "svelteBlocks/components/InputChips.svelte";
</script>

<InputChips value={["hi","hello"]}/>
<Input type="input"/>
<Button>Test</Button>
<Button config={{ outline:true }}>Test</Button>