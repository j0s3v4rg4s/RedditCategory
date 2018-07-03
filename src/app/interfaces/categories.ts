// To parse this data:
//
//   import { Convert, Categories } from "./file";
//
//   const categories = Convert.toCategories(json);

export interface Categories {
	kind: string
	data: CategoriesData
}

export interface CategoriesData {
	modhash: string
	dist: number
	children: Child[]
	after: string
	before: null
}

export interface Child {
	kind: string
	data: ChildData
}

export interface ChildData {
	suggested_comment_sort: null | string
	user_flair_background_color: null
	hide_ads: boolean
	banner_img: null | string
	user_flair_text: null
	submit_text_html: null | string
	user_flair_position: string
	user_flair_enabled_in_sr: boolean
	user_flair_template_id: null
	user_is_banned: null
	community_icon: string
	banner_background_image: string
	original_content_tag_enabled: boolean
	wiki_enabled: boolean
	banner_size: number[] | null
	show_media: boolean
	banner_background_color: string
	display_name_prefixed: string
	user_is_muted: null
	user_flair_type: string
	user_can_flair_in_sr: null
	display_name: string
	header_img: null | string
	description_html: string
	title: string
	collapse_deleted_comments: boolean
	id: string
	user_has_favorited: null
	public_description: string
	over18: boolean
	public_description_html: string
	created: number
	allow_videos: boolean
	spoilers_enabled: boolean
	icon_size: number[] | null
	primary_color: string
	audience_target: string
	all_original_content: boolean
	notification_level: null
	active_user_count: null
	icon_img: string
	header_title: null | string
	description: string
	can_assign_link_flair: boolean
	submit_text: string
	user_flair_text_color: null
	accounts_active: null
	public_traffic: boolean
	header_size: number[] | null
	subscribers: number
	user_flair_css_class: null
	submit_text_label: null | string
	whitelist_status: string
	link_flair_position: string
	user_flair_richtext: any[]
	user_sr_flair_enabled: null
	lang: string
	user_is_moderator: null
	has_menu_widget: boolean
	is_enrolled_in_new_modmail: null
	key_color: string
	name: string
	can_assign_user_flair: boolean
	allow_videogifs: boolean
	url: string
	quarantine: boolean
	wls: number
	created_utc: number
	emojis_enabled: boolean
	user_is_contributor: null
	submit_link_label: null | string
	allow_discovery: boolean
	accounts_active_is_fuzzed: boolean
	advertiser_category: null | string
	user_sr_theme_enabled: boolean
	link_flair_enabled: boolean
	allow_images: boolean
	show_media_preview: boolean
	comment_score_hide_mins: number
	subreddit_type: string
	submission_type: string
	user_is_subscriber: null
	videostream_links_count?: number
	content_category?: string
}

// Converts JSON strings to/from your types
export namespace Convert {
	export function toCategories(json: string): Categories {
		return JSON.parse(json)
	}

	export function categoriesToJson(value: Categories): string {
		return JSON.stringify(value, null, 2)
	}
}
