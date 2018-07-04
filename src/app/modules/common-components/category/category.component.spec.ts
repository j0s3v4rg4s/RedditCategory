import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Child } from '../../../interfaces/categories'
import { CategoryComponent } from './category.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MarcoComponent } from '../marco/marco.component'
import { RequestService } from '../../../services/request/request.service'
import { Comments } from '../../../interfaces/comments'

describe('CategoryComponent', () => {
	let component: CategoryComponent
	let fixture: ComponentFixture<CategoryComponent>

	beforeEach(async(() => {
		const mockConfig = {
			kind: 't5',
			data: {
				url: '/r/AskReddit/',
				banner_size: [1280, 384],
				banner_background_color: '#f0f7fd',
				submit_text_html:
					// tslint:disable-next-line:max-line-length
					'&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;&lt;strong&gt;AskReddit is all about DISCUSSION. Your post needs to inspire discussion, ask an open-ended question that prompts redditors to share ideas or opinions.&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Questions need to be neutral and the question alone.&lt;/strong&gt; Any opinion or answer must go as a reply to your question, this includes examples or any kind of story about you. This is so that all responses will be to your question, and there&amp;#39;s nothing else to respond to. Opinionated posts are forbidden.&lt;/p&gt;\n\n&lt;ul&gt;\n&lt;li&gt;If your question has a factual answer, try &lt;a href="/r/answers"&gt;/r/answers&lt;/a&gt;.&lt;/li&gt;\n&lt;li&gt;If you are trying to find out about something or get an explanation, try &lt;a href="/r/explainlikeimfive"&gt;/r/explainlikeimfive&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;If your question has a limited number of responses, then it&amp;#39;s not suitable.&lt;/li&gt;\n&lt;li&gt;If you&amp;#39;re asking for any kind of advice, then it&amp;#39;s not suitable.&lt;/li&gt;\n&lt;li&gt;If you feel the need to add an example in order for your question to make sense then you need to re-word your question.&lt;/li&gt;\n&lt;li&gt;If you&amp;#39;re explaining why you&amp;#39;re asking the question, you need to stop.&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;p&gt;You can always ask where best to post in &lt;a href="/r/findareddit"&gt;/r/findareddit&lt;/a&gt;.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
				description_html:
					// tslint:disable-next-line:max-line-length
					'&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;h6&gt;&lt;a href="http://www.reddit.com/r/askreddit/submit?selftext=true&amp;amp;title=%5BSerious%5D"&gt; [ SERIOUS ] &lt;/a&gt;&lt;/h6&gt;\n\n&lt;h5&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/index#wiki_rules"&gt;Rules&lt;/a&gt;:&lt;/h5&gt;\n\n&lt;ol&gt;\n&lt;li&gt;&lt;p&gt;You must post a clear and direct question in the title. The title may contain two, short, necessary context sentences.\nNo text is allowed in the textbox. Your thoughts/responses to the question can go in the comments section. &lt;a href="http://goo.gl/tMUR4k"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Any post asking for advice should be generic and not specific to your situation alone. &lt;a href="http://goo.gl/2L771B"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Askreddit is for open-ended discussion questions. &lt;a href="http://goo.gl/DcPPLf"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Posting, or seeking, any identifying personal information, real or fake, will result in a ban without a prior warning. &lt;a href="http://goo.gl/imCCMb"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Askreddit is not your soapbox, personal army, or advertising platform. &lt;a href="http://goo.gl/DG4Q2M"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Questions seeking professional advice are inappropriate for this subreddit and will be removed. &lt;a href="http://goo.gl/G6Zbap"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Soliciting money, goods, services, or favours is not allowed. &lt;a href="http://goo.gl/Ce2LTY"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Mods reserve the right to remove content or restrict users&amp;#39; posting privileges as necessary if it is deemed detrimental to the subreddit or to the experience of others. &lt;a href="http://goo.gl/a5GQTm"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;li&gt;&lt;p&gt;Comment replies consisting solely of images will be removed. &lt;a href="http://goo.gl/YVNgU0"&gt;more &amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;\n&lt;/ol&gt;\n\n&lt;h5&gt;If you think your post has disappeared, see spam or an inappropriate post, please do not hesitate to &lt;a href="http://goo.gl/xnppZr"&gt;contact the mods&lt;/a&gt;, we&amp;#39;re happy to help.&lt;/h5&gt;\n\n&lt;hr/&gt;\n\n&lt;h4&gt;Tags to use:&lt;/h4&gt;\n\n&lt;blockquote&gt;\n&lt;h2&gt;&lt;a href="http://goo.gl/gMFZjB"&gt;[Serious]&lt;/a&gt;&lt;/h2&gt;\n&lt;/blockquote&gt;\n\n&lt;h3&gt;Use a &lt;strong&gt;[Serious]&lt;/strong&gt; post tag to designate your post as a serious, on-topic-only thread.&lt;/h3&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h4&gt;Filter posts by subject:&lt;/h4&gt;\n\n&lt;p&gt;&lt;a href="http://ud.reddit.com/r/AskReddit/#ud"&gt;Mod posts&lt;/a&gt;\n&lt;a href="http://dg.reddit.com/r/AskReddit/#dg"&gt;Serious posts&lt;/a&gt;\n&lt;a href="http://bu.reddit.com/r/AskReddit/#bu"&gt;Megathread&lt;/a&gt;\n&lt;a href="http://nr.reddit.com/r/AskReddit/#nr"&gt;Breaking news&lt;/a&gt;\n&lt;a href="http://goo.gl/qJBQRm"&gt;Unfilter&lt;/a&gt;&lt;/p&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h3&gt;Do you have ideas or feedback for Askreddit? Submit to &lt;a href="http://www.reddit.com/r/Ideasforaskreddit"&gt;/r/Ideasforaskreddit&lt;/a&gt;.&lt;/h3&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h3&gt;Please use spoiler tags to hide spoilers. &lt;code&gt;&amp;gt;!insert spoiler here!&amp;lt;&lt;/code&gt;&lt;/h3&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h4&gt;Other subreddits you might like:&lt;/h4&gt;\n\n&lt;table&gt;&lt;thead&gt;\n&lt;tr&gt;\n&lt;th align="left"&gt;some&lt;/th&gt;\n&lt;th align="left"&gt;header&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/thead&gt;&lt;tbody&gt;\n&lt;tr&gt;\n&lt;td align="left"&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_ask_others"&gt;Ask Others&lt;/a&gt;&lt;/td&gt;\n&lt;td align="left"&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_self_.26amp.3B_others"&gt;Self &amp;amp; Others&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align="left"&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_find_a_subreddit"&gt;Find a subreddit&lt;/a&gt;&lt;/td&gt;\n&lt;td align="left"&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_learn_something"&gt;Learn something&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align="left"&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_meta"&gt;Meta Subs&lt;/a&gt;&lt;/td&gt;\n&lt;td align="left"&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_what_is_this______"&gt;What is this ___&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td align="left"&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_askreddit_offshoots"&gt;AskReddit Offshoots&lt;/a&gt;&lt;/td&gt;\n&lt;td align="left"&gt;&lt;a href="https://www.reddit.com/r/AskReddit/wiki/sidebarsubs#wiki_offers_.26amp.3B_assistance"&gt;Offers &amp;amp; Assistance&lt;/a&gt;&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/tbody&gt;&lt;/table&gt;\n\n&lt;h2&gt;&lt;/h2&gt;\n\n&lt;h3&gt;Ever read the reddiquette? &lt;a href="http://goo.gl/pxsd8T"&gt;Take a peek!&lt;/a&gt;&lt;/h3&gt;\n\n&lt;p&gt;&lt;a href="#/RES_SR_Config/NightModeCompatible"&gt;&lt;/a&gt;\n&lt;a href="http://goo.gl/TQnRmU"&gt;&lt;/a&gt;\n&lt;a href="#may4th"&gt;&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;'
			}
		}

		const comments: Comments = {
			kind: 'kind',
			data: {
				after: null,
				before: null,
				dist: 0,
				modhash: null,
				children: []
			}
		}
		const requestServiceMock = jasmine.createSpyObj('RequestService', ['getBestComments'])
		const getBestCommentsSpy = requestServiceMock.getBestComments.and.returnValue(Promise.resolve(comments))

		TestBed.configureTestingModule({
			declarations: [CategoryComponent, MarcoComponent],
			imports: [MatToolbarModule, MatDialogModule, MatButtonModule, MatIconModule, MatCardModule],
			providers: [
				{
					provide: MAT_DIALOG_DATA,
					useValue: mockConfig
				},
				{
					provide: RequestService,
					useValue: requestServiceMock
				}
			]
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(CategoryComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('convertHtml Should be return null with null parameter', () => {
		expect(component.convertHtml(null)).toBeNull()
	})
})
