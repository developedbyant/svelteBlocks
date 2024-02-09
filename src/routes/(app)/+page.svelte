<script lang="ts">
    import Header from "src/blocks/Header.svelte"
    import Avatar from "src/blocks/Avatar.svelte";
    import Button from "src/blocks/Button.svelte";
    import Chip from "src/blocks/Chip.svelte";
    import Input from "src/blocks/Input.svelte";
    import InputChips from "src/blocks/InputChips.svelte";
    import Label from "src/blocks/Label.svelte";
    import Textarea from "src/blocks/TextArea.svelte";
    import TextDivider from "src/blocks/TextDivider.svelte";
    import Toggle from "src/blocks/Toggle.svelte";
    import { Toasts,createToast } from "src/blocks/toasts";
    // icons
    import HomeIcon from "./icons/Home.svelte"
    import MoonIcon from "./icons/MoonSun.svelte"
    import FormContainer from "./components/FormContainer.svelte";
    import Flex from "./components/Flex.svelte";
    function onclick(e:MouseEvent){
        loading = true
        setTimeout(()=>loading=false,1000)
    }
    let loading = $state(false)

    let toastType = $state<"error"|"neutral"|"successful">("error")
    const addToast = ()=>{
        createToast({ type:toastType,msg:"Just a test and only a test lol" })
        toastType = toastType==="error" ? "neutral" : toastType==="neutral" ? "successful" : "error"
    }
    const button:BlockAll   <"button",{ tests:boolean }> = { disabled:true,tests:true }

    const values = {
        input:""
    }
    let inputChipsValue = $state(["hi"])
</script>

<Toasts position="br" />
<Flex direction="column">
    <Header level="h2">Toasts</Header>
    <Button data-test="hi" onclick={addToast} icon={HomeIcon}>
        Add toast
    </Button>
</Flex>

<Flex direction="column">
    <Header level="h2">Toggle</Header>
    <Toggle active={false} svgIcon={{ onActive:MoonIcon,onInactive:HomeIcon }}/>
</Flex>

<Flex direction="column">
    <Header level="h1">Button</Header>
    <Flex columnOnMobile={false} wrap="no-wrap">

        <Button variant="primary" icon={HomeIcon}>Button</Button>
        <Button href="/docs/components/chip">Link</Button>
        <Button loading>Loading</Button>
        <Button loading rounded>Rounded</Button>
        <Button variant="error">Error</Button>
        <Button variant="outline">Outline</Button>
    </Flex>
    <Button full>FullWidth</Button>
</Flex>

<Flex direction="column" padding="10px 0px">
    <Header level="h1">Avatar</Header>
    <Avatar src="DA"/>
</Flex>

<Flex direction="column" padding="10px 0px">
    <Header level="h1">Chip</Header>
    <Flex>
        <Chip>Chip</Chip>
        <Chip variant="error">ErrorChip</Chip>
        <Chip rounded>RoundedChip</Chip>
    </Flex>
</Flex>

<Flex direction="column" padding="10px 0px">
    <Header level="h1">Headers</Header>
    <Header level="h1">Header h1</Header>
    <Header level="h2">Header h2</Header>
    <Header level="h3">Header h3</Header>
    <Header level="h4">Header h4</Header> 
</Flex>

<Flex direction="column" padding="10px 0px">
    <Header level="h1">Input {values.input}</Header>
    <Input type="text" placeholder="Input..."/>
    <Input type="text" error placeholder="Input with error..."/>
    <Input type="text" full placeholder="Full width..."/>
    <Input type="text" rounded placeholder="Rounded..."/>
</Flex>

<Flex direction="column" padding="10px 0px">
    <Header level="h1">InputChips</Header>
    {inputChipsValue.join(",")}
    <InputChips rounded={true} bind:value={inputChipsValue} onchange={()=>console.log("InputChips changed")}/>
</Flex>

<Flex direction="column" padding="10px 0px">
    <Header level="h1">Label</Header>
    <Label for="email">Email</Label>
    <Input type="email" id="email" />
</Flex>

<Flex direction="column" padding="10px 0px">
    <Header level="h2">Textarea</Header>
    <Textarea full placeholder="Text..."/>
    <Textarea full error placeholder="Error..."/>
</Flex>

<Flex direction="column" padding="10px 0px">
    <Header level="h2">TextDivider</Header>
    <TextDivider>Or</TextDivider>
</Flex>

<Flex direction="column" gap="15px" maxWidth="500px">
    <Header level="h2">Form example</Header>
    <FormContainer method="POST" action="/api/test" direction="column" gap="5px">
        <Input required full placeholder="Email..." type="email" id="email"/>
        <Input required full placeholder="Password..." type="password" id="password"/>
        <Button full type="submit">Login</Button>
    </FormContainer>
</Flex>



<style>
    form{
        max-width: 250px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>