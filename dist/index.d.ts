/**
 * Compares two values
 */
export type Comparator = (v1: any, v2: any) => number;

/**
 * Returns a Promise that will contain an array of options (label + value) given a query string
 */
export type AsyncAutocompleteDataProvider = (query: string) => Promise<Array<{ label: string, value: any }>>;


/**
 * Returns a Promise that will contain an object describing the result given a query string
 */
export type AsyncDataTableDataProvider =
	(query: string, orderBy: Array<{ key: string, direction: 'asc' | 'desc' }>, recordsPerPage: number, pageIndex: number) => Promise<AsyncDataTableDataProviderResult>;

export interface AsyncDataTableDataProviderResult {
	/** (optional) the number of available records */
	total: number|undefined,
	/** the number of records, filtered by the given query. This is used to create the pagination buttons of the table */
	filtered: number,
	/** the chunk of records to display */
	records: Array<Record<string, any>>
}


/**
 * Given the column value and its current row object, this function returns a representation of that cell
 */
export type DataTableRenderer = (value: any, row: Record<string, any>) => string | DataTableRenderWithComponent
export interface DataTableRenderWithComponent {
	/** The Svelte component that will render the cell */
	component: SvelteComponent,
	/** Props passed to the Svelte component */
	props: Record<string, any> | undefined,
	/** An "on:click" handler. Note that this handler will stop the propagation of the click event to the entire row */
	onClick: (e) => any,
	/** The text content that will be passed to the default slot of the Svelte component */
	textContent: string | undefined
}


/**
 * Given the current query, the column value and the entire row that column is part of, returns a boolean indicating
 * whether or not the current row should be displayed
 */
export type DataTableSearchCallback = (query: string, columnValue: any, row: Record<string, any>) => boolean;


/**
 * Once called, returns a Promise. While waiting for the Promise to settle (either by resolving or rejecting) the form will show a loading state
 */
export type FormSubmitCallback = () => Promise<any>;

export class SvelteComponent {
	$$prop_def: {};
	$$slot_def: {};

	$on(event: string, handler: (e: CustomEvent) => any): () => void;
}
export class Alert extends SvelteComponent {
	$$prop_def: {
		/**
		 * Whether the alert is dismissible
		 * @default true
		 */
		closable?: boolean;
		/**
		 * Specifies the look of the component
		 * @default undefined
		 */
		variant?: 'primary'|'success'|'danger'|'warning'|undefined;
		/**
		 * Fade out or use the uikit Animation component
		 * @default true
		 */
		animation?: boolean|string;
		/**
		 * Animation duration in milliseconds
		 * @default 150
		 */
		animationDuration?: number;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLDivElement;
	}
	$on(event: 'hide'|'beforehide', handler: (e: CustomEvent<Array<UIkitComponent>|Array<UIkitComponent>>) => any): () => void;
}
export class Article extends SvelteComponent {
	$$prop_def: {
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * A string that can contain HTML content which represents the title of the article. If omitted, the space dedicated to the title won't be displayed
		 * @default ""
		 */
		titleAsHtml?: string|undefined;
		/**
		 * A string that can contain HTML content with meta information about the article. If omitted, the space dedicated to the meta content won't be displayed
		 * @default ""
		 */
		articleMetaAsHtml?: string|undefined;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLElement;
	}
}
export class AsyncDataTable extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default []
		 */
		columns?: Array<{label: string, key: string, className: (string|undefined), textAlign: ('center'|'right'|'left'|undefined), orderable: (boolean|undefined), searchable: (boolean|undefined), render: (DataTableRenderer|undefined)}>;
		/**
		 * @default undefined
		 */
		size?: undefined|'small';
		/**
		 * @default undefined
		 */
		className?: undefined|string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default "divider"
		 */
		appearance?: 'divider'|'striped';
		/**
		 * @default "default"
		 */
		searchButtonVariant?: 'default'|'primary'|'secondary'|'danger'|'text'|'link';
		/**
		 * @default false
		 */
		stickyHeader?: boolean;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default undefined
		 */
		noResultText?: string|undefined;
		/**
		 * @default undefined
		 */
		ref?: HTMLTableElement;
		/**
		 * @default true
		 */
		instantSearch?: boolean;
		/**
		 * @default ""
		 */
		query?: string;
		/**
		 * @default []
		 */
		orderBy?: Array<{key: string, direction: ('desc'|'asc')}>;
		/**
		 * @default true
		 */
		horizontalScroll?: boolean;
		/**
		 */
		dataProvider: AsyncDataTableDataProvider;
		/**
		 * @default (err) => console.error(err)
		 */
		dataProviderErrorHandler?: CallableFunction;
		/**
		 * @default 25
		 */
		recordsPerPage?: number;
		/**
		 * @default 4
		 */
		numbersPerSide?: number;
		/**
		 * @default 0
		 */
		pageIndex?: number;
		/**
		 * @readonly
		 * @default 0
		 */
		total?: number;
		/**
		 * @readonly
		 * @default 0
		 */
		filtered?: number;
		/**
		 * @readonly
		 * @default false
		 */
		loading?: boolean;
		/**
		 * @default 200
		 */
		debounceMs?: number;
		/**
		 * Contains the current visible rows
		 * @default null
		 */
		rows?: Array<Record<string, any>>|null;
	}
}
export class Badge extends SvelteComponent {
	$$prop_def: {
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLSpanElement;
	}
}
export class Breadcrumb extends SvelteComponent {
	$$prop_def: {
		/**
		 * An array containing the various steps composing the path of the current page. Each step should have an href property, 
		 * which is the URL to which the user will be redirected, and a label property, which is displayed. The last element of the array represents the
		 * current page and its href property will be ignored
		 * @default []
		 */
		path?: Array<{href: string, label: string}>;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLUListElement;
	}
}
export class Button extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default undefined
		 */
		id?: string|undefined;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * The type property of the native HTML button
		 * @default "button"
		 */
		type?: 'button'|'submit';
		/**
		 * The disabled property of the native HTML button
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * Whether the button has been used to retrieve some content that is still being loaded. If true, an icon with a spinner will appear next to the text and the button will also be temporarily disabled
		 * @default false
		 */
		loading?: boolean;
		/**
		 * This property is used to style the button with one of the base uikit classes for button appearance
		 * @default type === "submit" ? "primary" : "default"
		 */
		variant?: 'default'|'primary'|'secondary'|'danger'|'text'|'link';
		/**
		 * If present, the uikit icon with the given name will be added next to the text of the button
		 * @default type === "submit" ? "newline" : undefined
		 */
		icon?: string|undefined;
		/**
		 * If the icon is set, this property let you decide its position, left or right
		 * @default 'right'
		 */
		iconPosition?: 'right'|'left';
		/**
		 * Specifies the size of the button. If undefined, the button will be of regular size
		 * @default undefined
		 */
		size?: undefined|'small'|'large';
		/**
		 * Specifies the uk-tooltip attribute. If undefined, no tooltip will be added to the button
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLButtonElement;
	}
}
export class Card extends SvelteComponent {
	$$prop_def: {
		/**
		 * Used to style the card. If set to hover, the card will appear flat unless it's being hovered
		 * @default "default"
		 */
		variant?: 'default'|'primary'|'secondary'|'hover';
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * Add a hover animation to the card
		 * @default false
		 */
		hover?: boolean;
		/**
		 * Defines the padding of the card. In undefined, default values will be applied
		 * @default undefined
		 */
		size?: 'small'|'large'|undefined;
		/**
		 * The title of the card. This will be represented inside the body of the card. If you have defined a custom header slot, you should manually specify the title inside it and not use this property
		 * @default undefined
		 */
		title?: string|undefined;
		/**
		 * The text content of the card badge, which is displayed in the top right angle of the card. If undefined no badge will be added
		 * @default undefined
		 */
		badge?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLDivElement;
	}
}
export class Comment extends SvelteComponent {
	$$prop_def: {
		/**
		 * The path to the avatar that will be added to the comment. For optimal results, use a square image. Only specify this property if you are not using a custom header, otherwise it will be ignored
		 * @default undefined
		 */
		avatarSource?: string|undefined;
		/**
		 * Change the size of the avatar.
		 * @default 80
		 */
		avatarSize?: number;
		/**
		 * The alt property of the avatar image
		 * @default ""
		 */
		avatarAlt?: string;
		/**
		 * The title of the comment that will be added to the header. It can contain HTML tags. Do not use this property if you are specifying a custom header
		 * @default ""
		 */
		commentTitleAsHtml?: string;
		/**
		 * True to add a different style to this comment (e.g. if it's made by the author)
		 * @default false
		 */
		primary?: boolean;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLElement;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
	}
}
export class DataTable extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default []
		 */
		columns?: Array<{label: string, key: string, className: (string|undefined), textAlign: ('center'|'right'|'left'|undefined), orderable: (boolean|Comparator|undefined), searchable: (boolean|DataTableSearchCallback|undefined), render: (DataTableRenderer|undefined)}>;
		/**
		 * @default []
		 */
		rows?: Array<Record<string, any>>;
		/**
		 * @default []
		 */
		visibleRows?: Array<Record<string, any>>;
		/**
		 * @default undefined
		 */
		size?: undefined|'small';
		/**
		 * @default undefined
		 */
		className?: undefined|string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default "divider"
		 */
		appearance?: 'divider'|'striped';
		/**
		 * @default "default"
		 */
		searchButtonVariant?: 'default'|'primary'|'secondary'|'danger'|'text'|'link';
		/**
		 * @default false
		 */
		stickyHeader?: boolean;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default undefined
		 */
		noResultText?: string|undefined;
		/**
		 * @default undefined
		 */
		ref?: HTMLTableElement;
		/**
		 * @default true
		 */
		instantSearch?: boolean;
		/**
		 * @default ""
		 */
		query?: string;
		/**
		 * @default []
		 */
		orderBy?: Array<{key: string, direction: ('desc'|'asc')}>;
		/**
		 * @default true
		 */
		horizontalScroll?: boolean;
		/**
		 * @default 25
		 */
		recordsPerPage?: number;
		/**
		 * @default 4
		 */
		numbersPerSide?: number;
		/**
		 * @default 0
		 */
		pageIndex?: number;
		/**
		 * @readonly
		 * @default 0
		 */
		total?: number;
		/**
		 * @readonly
		 * @default 0
		 */
		filtered?: number;
	}
}
export class DescriptionList extends SvelteComponent {
	$$prop_def: {
		/**
		 * If true a divider will be shown between two items
		 * @default false
		 */
		showDivider?: boolean;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLDListElement;
		/**
		 * Whether the terms of your list should be treated as HTML
		 * @default false
		 */
		termsAreHtml?: boolean;
		/**
		 * Whether the details of your list should be treated as HTML
		 * @default false
		 */
		detailsAreHtml?: boolean;
		/**
		 * An array containing the term-details pairs of the description list. Can be text only or html
		 * @default []
		 */
		list?: Array<{term: string, details: string}>;
	}
}
export class Divider extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default false
		 */
		withIcon?: boolean;
		/**
		 * @default false
		 */
		small?: boolean;
		/**
		 * @default false
		 */
		vertical?: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLHRElement;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
	}
}
export class Dropdown extends SvelteComponent {
	$$prop_def: {
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default "hover"
		 */
		mode?: 'click'|'hover';
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * @default false
		 */
		isLabelHtml?: boolean;
		/**
		 * This property is used to style the button with one of the base uikit classes for button appearance. Setting this to null will hide the button
		 * @default "default"
		 */
		variant?: 'default'|'primary'|'secondary'|'danger'|'text'|'link'|null;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
	}
}
export class Form extends SvelteComponent {
	$$prop_def: {
		/**
		 */
		submitAsync: FormSubmitCallback;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'invalid'|'valid'|'loading'|'error'|'success';
		/**
		 * Indicates the validity of this form. Its value is updated using formRef.checkValdity(), that gets called
		 * each time an element inside this form triggers a bubbling 'change' event
		 * @default true
		 */
		valid?: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLFormElement;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default "stacked"
		 */
		variant?: 'stacked'|'horizontal';
	}
}
export class FormModal extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default undefined
		 */
		id?: string|undefined;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		title?: string|undefined;
		/**
		 * @default false
		 */
		expand?: boolean;
		/**
		 * @default false
		 */
		fullScreen?: boolean;
		/**
		 * @default true
		 */
		closeable?: boolean;
		/**
		 * @default "default"
		 */
		closeButton?: 'default'|'outside';
		/**
		 * @default true
		 */
		verticallyCentered?: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * @default false
		 */
		show?: boolean;
		/**
		 * @readonly
		 * @default false
		 */
		shown?: boolean;
		/**
		 * @default true
		 */
		stack?: boolean;
		/**
		 */
		formSubmitAsync: FormSubmitCallback;
		/**
		 * @default false
		 */
		formDisabled?: boolean;
		/**
		 * @default "initial"
		 */
		formState?: 'initial'|'invalid'|'valid'|'loading'|'error'|'success';
		/**
		 * @default true
		 */
		formValid?: boolean;
		/**
		 * @default undefined
		 */
		formRef?: HTMLFormElement;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		formStyle?: string|undefined;
		/**
		 * @default ''
		 */
		formClassName?: string|undefined;
		/**
		 * @default "stacked"
		 */
		formVariant?: 'stacked'|'horizontal';
	}
}
export class Loader extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default 1
		 */
		ratio?: number;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
	}
}
export class LoaderOverlay extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default 1
		 */
		ratio?: number;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * @default 0.8
		 */
		opacity?: number;
		/**
		 * @default true
		 */
		loading?: boolean;
		/**
		 * @default "default"
		 */
		background?: 'default'|'muted'|'primary'|'secondary';
		/**
		 * @default undefined
		 */
		backgroundClassName?: string|undefined;
		/**
		 * @default undefined
		 */
		backgroundStyle?: string|undefined;
		/**
		 * @default "bottom"
		 */
		slotPosition?: 'bottom'|'right'|'top'|'left';
	}
}
export class LoaderOverlayScoped extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default 1
		 */
		ratio?: number;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * @default 0.8
		 */
		opacity?: number;
		/**
		 * @default true
		 */
		loading?: boolean;
		/**
		 * @default 'default'
		 */
		background?: 'default'|'muted'|'primary'|'secondary';
		/**
		 * @default undefined
		 */
		backgroundClassName?: string|undefined;
		/**
		 * @default undefined
		 */
		backgroundStyle?: string|undefined;
		/**
		 * @default "bottom"
		 */
		slotPosition?: 'bottom'|'right'|'top'|'left';
	}
}
export class LoaderWrapper extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default true
		 */
		loading?: boolean;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default 1
		 */
		ratio?: number;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * @default true
		 */
		center?: boolean;
		/**
		 * @default "bottom"
		 */
		slotPosition?: 'bottom'|'right'|'top'|'left';
	}
}
export class Modal extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default undefined
		 */
		id?: string|undefined;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		title?: string|undefined;
		/**
		 * @default false
		 */
		expand?: boolean;
		/**
		 * @default false
		 */
		fullScreen?: boolean;
		/**
		 * @default true
		 */
		closeable?: boolean;
		/**
		 * @default "default"
		 */
		closeButton?: 'default'|'outside';
		/**
		 * @default true
		 */
		verticallyCentered?: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * @default false
		 */
		show?: boolean;
		/**
		 * @readonly
		 * @default false
		 */
		shown?: boolean;
		/**
		 * @default true
		 */
		stack?: boolean;
	}
}
export class Nav extends SvelteComponent {
	$$prop_def: {
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
	}
}
export class Offcanvas extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default false
		 */
		show?: boolean;
		/**
		 * @readonly
		 * @default false
		 */
		shown?: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * @default "left"
		 */
		side?: 'left'|'right';
	}
}
export class OrderableList extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default []
		 */
		items?: Array<{text: (string|undefined), html: (string|undefined), props: (Record<string, any>|undefined), component: (SvelteComponent|undefined)}>;
		/**
		 * @default undefined
		 */
		component?: SvelteComponent|undefined;
		/**
		 * @readonly
		 * @default undefined
		 */
		ref?: HTMLUListElement;
		/**
		 * @default 200
		 */
		animationDuration?: number;
		/**
		 * Whether to show or hide the move-to-top and move-to-bottom buttons
		 * @default false
		 */
		moveToBoundaries?: boolean;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
	}
}
export class Pagination extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default ""
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default true
		 */
		center?: boolean;
		/**
		 * @default 0
		 */
		pageIndex?: number;
		/**
		 * @default 0
		 */
		numberOfPages?: number;
		/**
		 * @default 4
		 */
		numbersPerSide?: number;
	}
}
export class ScrollableNav extends SvelteComponent {
	$$prop_def: {
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * A string specifying custom style properties for the contained Nav component
		 * @default undefined
		 */
		navStyle?: string|undefined;
		/**
		 * A string containing any additional classes to apply to the contained Nav component
		 * @default undefined
		 */
		navClassName?: string|undefined;
		/**
		 * The HTML reference of the component
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * The current height of this component
		 * @default 0
		 */
		height?: number;
		/**
		 * Whether to add a spacer underneath this component or not
		 * @default true
		 */
		spacer?: boolean;
	}
}
export class Switcher extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default "~.uk-switcher"
		 */
		connect?: string;
		/**
		 * @default "> * > :first-child"
		 */
		toggle?: string;
		/**
		 * @default false
		 */
		animation?: string|false;
		/**
		 * @default 200
		 */
		duration?: number;
		/**
		 * @default true
		 */
		swiping?: boolean;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default []
		 */
		titles?: Array<string>;
		/**
		 * @default false
		 */
		htmlTitle?: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLUListElement;
		/**
		 * @default 0
		 */
		index?: number;
	}
}
export class Tab extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default "~.uk-switcher"
		 */
		connect?: string;
		/**
		 * @default "> *"
		 */
		toggle?: string;
		/**
		 * @default false
		 */
		animation?: string|false;
		/**
		 * @default 200
		 */
		duration?: number;
		/**
		 * @default true
		 */
		swiping?: boolean;
		/**
		 * @default 200
		 */
		media?: number|string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default []
		 */
		titles?: Array<string>;
		/**
		 * @default false
		 */
		htmlTitle?: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * @default 0
		 */
		index?: number;
	}
}
export class Table extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default []
		 */
		heading?: Array<(string|{label: string, className: (string|undefined), textAlign: ('center'|'right'|'left'|undefined)})>;
		/**
		 * @default undefined
		 */
		size?: 'small'|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		appearance?: 'divider'|'striped'|undefined;
		/**
		 * @default false
		 */
		stickyHeader?: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLTableElement;
		/**
		 * @default undefined
		 */
		caption?: string|undefined;
	}
}
export class Accordion extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default true
		 */
		animation?: boolean;
		/**
		 * @default true
		 */
		collapsible?: boolean;
		/**
		 * @default 200
		 */
		duration?: number;
		/**
		 * @default false
		 */
		multi?: boolean;
		/**
		 * @default multi ? [] : false
		 */
		index?: number|false|Array<number>;
		/**
		 * @default "ease"
		 */
		transition?: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLUListElement;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		style?: string|undefined;
	}
}
export class AccordionItem extends SvelteComponent {
}
export class AsyncAutocomplete extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * Whether or not the autocomplete supports multiple values selected at the same time
		 * @default false
		 */
		multi?: boolean;
		/**
		 * If not in multi-mode (default): the current selected value or null if no value is selected
		 * Else: the list of currently selected values
		 * @default !multi ? null : []
		 */
		value?: any|null|Array<any>;
		/**
		 * Label of this component
		 * @default ""
		 */
		label?: string;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * Text to show when the applied filter doesn't return any result
		 * @default ""
		 */
		textIfNoResult?: string;
		/**
		 * Text to show when the field is required but no value has been chosen
		 * @default ""
		 */
		textIfInvalid?: string;
		/**
		 * Control whether the component is disabled or not
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * UIkit tooltip
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * Input placeholder
		 * @default undefined
		 */
		placeholder?: string|undefined;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 * Reference to the div that wraps this component
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * Autocapitalize setting of the input tag
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * Autocomplete setting of the input tag
		 * @default "off"
		 */
		autocomplete?: string|undefined;
		/**
		 * Autocorrect setting of the input tag
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * In/Out fly animation duration (in milliseconds)
		 * @default 100
		 */
		animationDuration?: number;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
		/**
		 * The current search string
		 * @default ""
		 */
		query?: string;
		/**
		 * Currently selected options
		 * @default []
		 */
		selectedOptions?: Array<{label: string, value: any}>;
		/**
		 */
		dataProvider: AsyncAutocompleteDataProvider;
		/**
		 * @default (err) => console.error(err)
		 */
		dataProviderErrorHandler?: CallableFunction;
		/**
		 * @readonly
		 * @default false
		 */
		loading?: boolean;
		/**
		 * @default 200
		 */
		debounceMs?: number;
		/**
		 * @default 5
		 */
		maxSuggestions?: number;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
	}
}
export class Autocomplete extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * Autocomplete options, the value must be unique
		 * @default []
		 */
		options?: Array<{label: string, value: any}>;
		/**
		 * Whether or not the autocomplete supports multiple values selected at the same time
		 * @default false
		 */
		multi?: boolean;
		/**
		 * If not in multi-mode (default): the current selected value or null if no value is selected
		 * Else: the list of currently selected values
		 * @default !multi ? null : []
		 */
		value?: any|null|Array<any>;
		/**
		 * Label of this component
		 * @default ""
		 */
		label?: string;
		/**
		 * A string containing any additional classes to apply to the component
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * Text to show when the applied filter doesn't return any result
		 * @default ""
		 */
		textIfNoResult?: string;
		/**
		 * Text to show when the field is required but no value has been chosen
		 * @default ""
		 */
		textIfInvalid?: string;
		/**
		 * Control whether the component is disabled or not
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * UIkit tooltip
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * Input placeholder
		 * @default undefined
		 */
		placeholder?: string|undefined;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 * Reference to the div that wraps this component
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * Autocapitalize setting of the input tag
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * Autocomplete setting of the input tag
		 * @default "off"
		 */
		autocomplete?: string|undefined;
		/**
		 * Autocorrect setting of the input tag
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * In/Out fly animation duration (in milliseconds)
		 * @default 100
		 */
		animationDuration?: number;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
		/**
		 * The current search string
		 * @default ""
		 */
		query?: string;
		/**
		 * Currently selected options
		 * @default []
		 */
		selectedOptions?: Array<{label: string, value: any}>;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
	}
}
export class Checkbox extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: boolean;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class DatePicker extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		min?: string|undefined;
		/**
		 * @default undefined
		 */
		max?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class EmailInput extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default 'off'
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default 'off'
		 */
		autocorrect?: string|undefined;
		/**
		 * @default 'off'
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class Field extends SvelteComponent {
	$$prop_def: {
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
	}
}
export class FixedPointInput extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default 2
		 */
		decimalPlaces?: number;
		/**
		 * @default false
		 */
		inhibitDecimalSeparatorKey?: boolean;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		min?: string|number;
		/**
		 * @default undefined
		 */
		max?: string|number;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		icon?: string|undefined;
		/**
		 * @default "left"
		 */
		iconPosition?: 'left'|'right';
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class MonthPicker extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class NumberInput extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default undefined
		 */
		min?: number|string;
		/**
		 * @default undefined
		 */
		max?: number|string;
		/**
		 * @default undefined
		 */
		step?: number|string;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		icon?: string|undefined;
		/**
		 * @default "left"
		 */
		iconPosition?: 'left'|'right';
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class PasswordInput extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default "off"
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default "off"
		 */
		autocorrect?: string|undefined;
		/**
		 * @default "off"
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		minlength?: number|undefined;
		/**
		 * @default undefined
		 */
		maxlength?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class PasswordInputAlt extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default "off"
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default "off"
		 */
		autocorrect?: string|undefined;
		/**
		 * @default "off"
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		minlength?: number|undefined;
		/**
		 * @default undefined
		 */
		maxlength?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class PercentageInput extends SvelteComponent {
	$$prop_def: {
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
	}
}
export class Radio extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default undefined
		 */
		label?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		value?: any|undefined;
		/**
		 * @default []
		 */
		options?: Array<{value: any, label: string, disabled: (boolean|undefined)}>;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		ref?: HTMLDivElement;
		/**
		 * @default undefined
		 */
		size?: undefined|'small'|'large';
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * This property is used to style the button corresponding to the selected value with one of the base uikit classes for button appearance
		 * @default "primary"
		 */
		variant?: 'primary'|'secondary'|'danger';
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
	}
}
export class SearchInput extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		icon?: string|undefined;
		/**
		 * @default "left"
		 */
		iconPosition?: 'left'|'right';
		/**
		 * @default undefined
		 */
		inputmode?: string|undefined;
		/**
		 * @default undefined
		 */
		pattern?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		minlength?: number|undefined;
		/**
		 * @default undefined
		 */
		maxlength?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class Select extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 * Current value of the select. Setting it to undefined sets the selected index to 0,
		 * choosing the first option, whether it's disabled, the placeholder, or a valid option
		 */
		value: any;
		/**
		 * @default []
		 */
		options?: Array<{label: string, value: any, disabled: (boolean|undefined)}>;
		/**
		 * @default undefined
		 */
		ref?: HTMLSelectElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class TelInput extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		minlength?: number|undefined;
		/**
		 * @default undefined
		 */
		maxlength?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class TextInput extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		icon?: string|undefined;
		/**
		 * @default "left"
		 */
		iconPosition?: 'left'|'right';
		/**
		 * @default undefined
		 */
		inputmode?: string|undefined;
		/**
		 * @default undefined
		 */
		pattern?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		minlength?: number|undefined;
		/**
		 * @default undefined
		 */
		maxlength?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class Textarea extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLTextAreaElement;
		/**
		 * @default 5
		 */
		rows?: number;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		minlength?: number|undefined;
		/**
		 * @default undefined
		 */
		maxlength?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class TimePicker extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}
export class WeekPicker extends SvelteComponent {
	$$prop_def: {
		/**
		 * @default generateId()
		 */
		id?: string;
		/**
		 * @default ""
		 */
		label?: string;
		/**
		 * A string specifying custom style properties for the component
		 * @default undefined
		 */
		style?: string|undefined;
		/**
		 * @default undefined
		 */
		className?: string|undefined;
		/**
		 * @default undefined
		 */
		name?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfInvalid?: string|undefined;
		/**
		 * @default undefined
		 */
		textIfValid?: string|undefined;
		/**
		 * @default undefined
		 */
		helperText?: string|undefined;
		/**
		 * @default ""
		 */
		placeholder?: string;
		/**
		 * @default false
		 */
		optional?: boolean;
		/**
		 */
		value: string;
		/**
		 * @default undefined
		 */
		ref?: HTMLInputElement;
		/**
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * @default undefined
		 */
		tooltip?: string|undefined;
		/**
		 * @default undefined
		 */
		autocapitalize?: string|undefined;
		/**
		 * @default undefined
		 */
		autocomplete?: string|undefined;
		/**
		 * @default undefined
		 */
		autocorrect?: string|undefined;
		/**
		 * @default undefined
		 */
		spellcheck?: string|undefined;
		/**
		 * @default undefined
		 */
		requiredMarker?: string|undefined;
		/**
		 * @default undefined
		 */
		optionalMarker?: string|undefined;
		/**
		 * @default "initial"
		 */
		state?: 'initial'|'valid'|'invalid';
	}
}