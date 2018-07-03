export interface Comments {
	kind: string
	data: CommentsData
}

export interface CommentsData {
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
	approved_at_utc: null
	subreddit: string
	selftext: string
	user_reports: any[]
	saved: boolean
	mod_reason_title: null
	gilded: number
	clicked: boolean
	title: string
	link_flair_richtext: LinkFlairRichtext[]
	subreddit_name_prefixed: string
	hidden: boolean
	pwls: number
	link_flair_css_class: null | string
	downs: number
	parent_whitelist_status: string
	hide_score: boolean
	name: string
	quarantine: boolean
	link_flair_text_color: string
	author_flair_background_color: null
	subreddit_type: string
	ups: number
	domain: string
	media_embed: any
	author_flair_template_id: null
	is_original_content: boolean
	secure_media: null
	is_reddit_media_domain: boolean
	category: null
	secure_media_embed: any
	link_flair_text: null | string
	can_mod_post: boolean
	score: number
	approved_by: null
	thumbnail: string
	edited: boolean
	author_flair_css_class: null
	previous_visits?: any[]
	author_flair_richtext: any[]
	content_categories: null
	is_self: boolean
	mod_note: null
	created: number
	link_flair_type: string
	wls: number
	post_categories: null
	banned_by: null
	author_flair_type: string
	contest_mode: boolean
	selftext_html: null
	likes: null
	suggested_sort: null
	banned_at_utc: null
	view_count: null
	archived: boolean
	no_follow: boolean
	is_crosspostable: boolean
	pinned: boolean
	over_18: boolean
	media: null
	media_only: boolean
	can_gild: boolean
	spoiler: boolean
	locked: boolean
	author_flair_text: null
	rte_mode: string
	visited: boolean
	num_reports: null
	distinguished: null
	subreddit_id: string
	mod_reason_by: null
	removal_reason: null
	id: string
	report_reasons: null
	author: string
	num_crossposts: number
	num_comments: number
	send_replies: boolean
	author_flair_text_color: null
	permalink: string
	whitelist_status: string
	stickied: boolean
	url: string
	subreddit_subscribers: number
	created_utc: number
	mod_reports: any[]
	is_video: boolean
	link_flair_background_color?: string
}

export interface LinkFlairRichtext {
	e: string
	t: string
}

// Converts JSON strings to/from your types
export namespace Convert {
	export function toComments(json: string): Comments {
		return JSON.parse(json)
	}

	export function commentsToJson(value: Comments): string {
		return JSON.stringify(value, null, 2)
	}
}
