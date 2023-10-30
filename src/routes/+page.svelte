<script lang="ts">
    import Button from 'kitBlocks/Button.svelte';
    import Input from 'kitBlocks/Input.svelte';
    import InputChips from "kitBlocks/InputChips.svelte";
</script>

<InputChips value={["hi","hello"]}/>
<Input type="input"/>
<Button>Test</Button>
<Button config={{ outline:true }}>Test</Button>