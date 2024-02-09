declare global {
	//<BLOCK_TYPES>
	type Snippet = import('svelte').Snippet;
	/** List of all blocks (components) */
	type Blocks = {
		link:{
			icon?:any,
    	    size?:string
		}
		toast:{
			rounded?:boolean,
			full?:boolean,
			position?:"tr"|"tl"|"br"|"bl"
		},
		toggle:{
			rounded?:boolean
			active?:boolean
			size?:`${string}px`
			svgIcon?:{
				onActive:any
				onInactive:any
			}
		},
		textarea:{
			value?:string // bind value bind:v={value}
			placeholder?:string
			rounded?:boolean
			full?:boolean
			error?:boolean
		},
		textDivider:{ children: Snippet; },
		label:{
			children: Snippet;
			for:string
		}
		button: {
			children: Snippet;
			href?:string
			loading?: boolean;
			rounded?: boolean;
			full?: boolean;
			variant?: "error" | "outline" | "primary";
			icon?: any;
		},
		buttonLink: {
			children: Snippet;
			href: string;
			target?: "_self" | "_blank" | "_parent" | "_top";
			loading?: boolean;
			rounded?: boolean;
			full?: boolean;
			variant?: "error" | "outline" | "primary";
			icon?: any;
		},
		avatar: {
			src: string | { path: string, alt: string },
			center?: boolean,
			maxSize?: string,
		},
		header: { children: Snippet, level: "h1" | "h2" | "h3" | "h4" },
		flex: {
			children: Snippet;
			maxWidth?: string,
			width?: string,
			margin?: string,
			direction?: "column" | "row",
			gap?: `${string}px`,
			wrap?: "wrap" | "no-wrap",
			bg?: string,
			padding?: string;
			borderRadius?: string;
			border?: string;
			columnOnMobile?: boolean
		},
		form: { method:"POST"|"GET"|"DELETE"|"UPDATE",action:string } & Blocks['flex']
		chip: {
			children: Snippet;
			href?:string
			loading?: boolean,
			rounded?: boolean,
			full?: boolean
			variant?: "error" | "outline" | "primary";
		},
		chipLink: {
			children: Snippet;
			href: string;
			target?: "_self" | "_blank" | "_parent" | "_top"
			loading?: boolean,
			rounded?: boolean,
			full?: boolean
			variant?: "error" | "outline" | "primary";
		},
		input:{
			value?:string
			rounded?:boolean
			full?:boolean
			error?:boolean
		},
		inputChips:{
			value:string[]
			rounded?:boolean
			variant?: "error" | "outline" | "primary";
		}
	}
	/** Element attributes */
	type Attrs<TagName extends keyof HTMLElementTagNameMap> = Omit<import('svelte/elements').SvelteHTMLElements[TagName], `on${string}` | `bind:${string}`>
	/** Element events */
	type Events<TagName extends keyof HTMLElementTagNameMap> = {
		[K in keyof HTMLElementTagNameMap[TagName]as K extends `on${string}` ? K : never]?: (e: any) => any;
	};
	/** Type for a block with attributes and extra data */
	type BlockA<TagName extends keyof HTMLElementTagNameMap, ExtraData = any> = ExtraData & Attrs<TagName>
	/** Type for a block with events and extra data */
	type BlockE<TagName extends keyof HTMLElementTagNameMap, ExtraData = any> = ExtraData & Events<TagName>
	/** Type for a block with events,attributes and extra data */
	type BlockAll<TagName extends keyof HTMLElementTagNameMap, ExtraData = any> = Events<TagName> & ExtraData & Attrs<TagName>
	//</BLOCK_TYPES>
}

export { };