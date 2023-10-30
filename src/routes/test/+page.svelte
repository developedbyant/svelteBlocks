<script lang="ts">
    import PageTitle from 'kitBlocks/PageTitle.svelte';
    import Flex from 'kitBlocks/Flex.svelte'
    import Input from 'kitBlocks/Input.svelte'
    import Button from 'kitBlocks/Button.svelte'
    import InputChips from "kitBlocks/InputChips.svelte";
    import Switch from 'kitBlocks/Switch.svelte';
    import Modal from 'kitBlocks/Modal.svelte';
    import Search from 'kitBlocks/Search.svelte';
    //
    let modalOpen = false
</script>

<Flex gap="20px">
    <Search />
    <InputChips value={["hi","hello"]}/>
    <Input type="input"/>
    <Button>Test</Button>
    <Button config={{ outline:true }}>Test</Button>

    <Flex direction="row" wrap="no-wrap">
        <Button>Default</Button>
        <Button config={{ outline:true }}>Outline</Button>
        <Button config={{ outline:true,rounded:true }}>Outline</Button>
        <Button config={{ full:true,rounded:true }}>FullButton</Button>
    </Flex>
    
    <Flex direction="row">
        <Switch />
        <Switch config={{ size:"50px",borderRadius:"0px"}}/>
        <Switch config={{ size:"60px",borderRadius:"100px"}}/>
    </Flex>

    <PageTitle title="Modal" btnText="Open" on:click={()=>modalOpen=true}/>
    <Modal bind:open={modalOpen} config={{ open:"left",maxHeight:"100vh" }}>
        <div class="block" style="height: 110%;">
            <Button>Default</Button>
            <Button config={{ outline:true }}>Outline</Button>
            <Button config={{ outline:true,rounded:true }}>Outline</Button>
            <Button config={{ full:true,rounded:true }}>FullButton</Button>
        </div>
    </Modal>
</Flex>

<style>
    .block{
        display: flex;
        flex-direction: column;
        background-color: var(--app-fb);
        padding: 10px;
        border-radius: 3px;
    }
</style>