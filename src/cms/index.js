/**
 * The default export of `netlify-cms` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import cms from 'netlify-cms-app'
import { Widget as IdWidget } from '@ncwidgets/id'

/**
 * Register the imported widget:
 */
cms.registerWidget(IdWidget)
cms.init()
