---
layout: default
title: Changelog
permalink: /changelog
nav_order: 10
---


All notable changes to this project will be documented in this file.

### 1.4.4 - 10 may '22
  - better img rendering, make it easier to download flyer #153
  - avoid place and tags duplication (remove white space, match case insensitive)
  - show date and place to unconfirmed events
  - add warning when visiting from different hostname or protocol #149
  - add tags and fix html description in ics export
  - add git dependency in Dockerfile #148
  - add external_style param to gancio-events webcomponent
  - add GANCIO_HOST and GANCIO_PORT environment vars
  - fix place and address when importing from url #147
  - fix user account removal
  - fix timezone issue #151
  - fix scrolling behavior
  - fix adding event on disabled anon posting
  - fix plain description meta
  - fix recurrent events always shown #150
  - remove `less` and `less-loader` dependency

### 1.4.3 - 10 mar '22
  - fix [#140](https://framagit.org/les/gancio/-/issues/140) - Invalid date
  - fix [#141](https://framagit.org/les/gancio/-/issues/141) - Cannot change logo
  - fix same day events
  - add missing icons in admin
  - prepare multisite settings
  - improve initialization
  - start unit testing API (it's never too late)
  - make it clear that the admin password must be saved at the end of setup

### 1.4.1 - 4 mar '22
  - add gl/galego locale, thanks @xosem
  - fix import redirect loop
  - add missing icons (close, repeat, arrows ...)
  - turn rss icon into a real link to improve a11y
  - force seconds to 0 for each events, fix recurring events starting date issue
  - fix next/prev selection on same datetime events
  - improve moderation UI (add author and event link + format creation date)
  - refactoring resource UI from fedi

### 1.4.0 - 9 feb '22
  - improve Cumulative Layout Shift
  - remove filename as default media label to avoid leak metadata
  - add endData to microdata
  - security fix with filtering settings, avoid sharing SMTP pass with front-end
  - fix broken SMTP
  - remove global materialicons / vuetify css, use threeshake and @nuxt/vuetify (really improve lighthouse score)
  - new Dockerfile using node:17.4-slim as base img (from 1.5Gb to ~800Mb)
  - add XSS and path traversal mitigation
  - improve a11y
  - update deps

### 1.3.3 - 1 feb '22
  - security fix, avoid sharing smtp pass with front-end

### 1.3.2 - 1 feb '22
  - fix webcomponent for event without img

### 1.3.1 - 1 feb '22
  - inherits tags in recurring events [#138](https://framagit.org/les/gancio/-/issues/138)
  - you can now skip an occurrence of a recurring event
  - fix `show_recurrent` event in webcomponent and API
  - add new webcomponent `sidebar` attribute and a [`fullwith` layout](https://gancio.org/usage/embed#embed-event-lists)

### 1.3.0 - 26 gen '22
  - add mariadb support
  - add [microdata](https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata) support
  - support db setup via environment variables (used in updated `docker-compose.yml` files)
  - improve rss feed:
    - fix validation
    - add enclusure media for featured image
    - add categories
  - fix typo in export code
  - add theme attribute to gancio-events webcomponent (dark/light)
  - increase thumbs quality
  - improve logo for light theme
  - improve [wordpress plugin](https://wordpress.org/plugins/wpgancio/)
    - add \[gancio-event\] and \[gancio-events\] shortcode
    - allow gancio-events / gancio-event tags in editor
    - automatically enqueue webcomponent script
  - tags/places filters are now inclusive not exclusive
  - fix image undefined alternative text
  - update documentation, dependencies, translations

### 1.2.2 - 7 dic '21
  - shiny new gancio-event\[s\] webcomponents => [docs](https://gancio.org/usage/embed)
  - new backend plugin system => [docs](https://gancio.org/dev/plugins)
  - improve media focal point selection
  - improve non-js experience (load img, use native lazy loading)
  - improve user_confirm / recover code flow
  - permit admins to choose user password (usefull on instance without SMTP configuration)
  - fix task manager exception
  - fix db initialization when a custom setup is used, #131
  - remove vue-clipboard2 dependency due to [this](https://github.com/euvl/v-clipboard/issues/18) bug and using a [native with fallback mixin instead](./assets/clipboard.js)
  - fix a regression to support old CPU, #130
  - makes dialog use fullscreen on mobile
  - fix Delete AP Actor Action from fediverse when remote Actor is gone
  - add `max` param to /events API


### 1.2.1 - 11 nov '21
  - fix `Note` remove from fediverse
  - AP Actor is now `Application`, was `Person`
  - better handling event AP representations
  
  this release is a step forward to improve AP compatibility with other platforms, thanks @tcit


### 1.2.0 - 9 nov '21
  - do not overwrite event slug when title is modified to preserve links
  - add public cache to events images
  - fix baseurl in initial setup configuration
  - fix user removal
  - load settings during startup and not for each request
  - refactoring user custom locale
  - published AP event's type is not `Note` anymore but `Event`

### 1.1.1 - 29 ott '21
  - fix issue adding event with dueHour resulting in `bad request`
  - fix restart during setup
  - do not use @nuxt/vuetify module, manually preload vuetify via plugin
  - remove deprecated nuxt-express-module and use serverMiddleware directly

### 1.1.0 - 26 ott '21

  - a whole new setup via web! fix #126
  - new SMTP configuration dialog, fix #115
  - re-order general settings in admin panel
  - new dark/light theme setting
  - move quite all configuration into db
  - fix some email recipients
  - fix hidden events when not ended
  - update translations
  - improve install documentation
  - add systemd gancio.service
  - allow italic and span tags inside editor
  - remove moment-timezone, consola, config, inquirer dependencies
  - update deps

### 1.0.6 (alpha)
  - fix Dockerfile yarn cache issue on update, #123
  - fix overflow on event title @homepage
  - better import dialog on mobile
  - re-add attachment to AP
  - fix max event export
  - update deps

### 1.0.5 (alpha)
  - fix/improve debian install docs
  - fix ics export, use new ics package
  - use slug url everywhere (rss feed, embedded list)
  - use i18n in event confirmation email
  - remove lot of deps warning and remove some unused dependencies
  - fix show_recurrent in embedded list
  - remove old to-ico dep, use png favicon instead

### 1.0.4 (alpha)
  - shows a generic img for events without it

### 1.0.3 (alpha)
  - 12 hour clock selection, #119
  - improve media management
    - add alt-text to featured image, fix #106
    - add focalPoint support, fix #116
  - improve a11y
  - improve node v16 compatibility
  - fix #122 ? (downgrade prettier)

### 1.0.2 (alpha)
  - improve oauth flow UI
  - [WordPress plugin](https://wordpress.org/plugins/wpgancio/)
  - fix h-event import
  - improve error logging (add stack trace to exception)
  - choose start date for recurreing events (#120)
  - fix user delete from admin

### 1.0.1 (alpha)
  
  - fix AP resource removal
  - improve AP resource UI
  - fix Docker setup
  - update deps

### 1.0 (alpha)
This release is a complete rewrite of frontend UI and many internals, main changes are:

- Switch UI framework from [element](https://element.eleme.io/) to [vuetify](https://vuetifyjs.com/)
- Distribute package directly from site instead of using npm registry
- Improve docker setup (run as user, fix some data export)
- New logging system (based on [winston](https://github.com/winstonjs/winston))
- Slugify event URL (keeping old one valid)
- Import events from ics and external website using h-event (microformat) improving [`h-event`](https://microformats.org/wiki/h-event) export
- Hide unconfirmed tags and places
- Clean unused places and tags
- Fix tons of issues

### 0.24.0
- New Euskara language from Basque Country, thanks @hacklabkelo
- fix feed with filters
- cleaner homepage
- fix next/prev recurrent events
- fix some history navigation issue
- fix blank lines in description
- upgrade deps
- better custom logo management
- fix settings update

### 0.23.0
- send AP Event Object instead of Note
- show only future unconfirmed events in admin panel
- new polish locale
- add friendly instances (an additional menu is shown)
- use user's logo not project's logo in federation
- start WPGancio plugin
- support media upload via url (API only)
- confirm before remove a resource
- confirm before remove a friendly instance
- event description supports some html tag
- fix redirect after login

### 0.22.0
- add admin announcement support (fix #74)
- each instance has a specific timezone you can choose from admin's panel
- refactoring language management (you can choose a default instance's language):
  usually UX language is choosen looking at Accepted-Language header but there
  are messages not generated from an http request (eg. sending events via AP).
  In those cases a default instance's language is choosen (default 'en').
- use lazy loaded images
- better mobile experience for admins
- single day only recurring events
- fix user block in fediverse moderation
- filter and linkify content from fediverse
- add a lot of help strings in admin panel
- use html2text for event description in og: meta
- update deps
- fix a moment.js typo from/to issue
- fix #73 

### 0.21.0
- a new recurring events logic (a la taskwarrior):
  - each occurrence of a recurring event could be personalized.
  - occurrence of recurring events are skippable.
  - occurrence generation could be paused.
- support `h-event` microformats! in homepage and in any single event's page
- add a background task manager (email, recurring events creation)
- sanitize html content coming from fediverse and event description with dompurify
  - also remove `fbclid` params in links
- front end search optimization
- use oauth2 for everything, password flow for webclient, this also fix
  some issue with authentication
- clickable tags / places @ home (to add them as filters)
- use a cleaner menububble for the new editor
- add local smtp and sendmail options on configuration setup
- check permission for resource removal request from fediverse
- add resource from fediverse also when inReplyTo is another resource
- automatic API documentation inclusion in docs
- split moderation in another tab inside admin panel
- use axios instead of fetch everywhere
- lot of ux improvements & error handling
- search links in event description with linkifyjs while add/edit events
- remove text templates for emails and use html2text instead
- fix email unique index for users!



### 0.20.0
- New layout (navbar/footer/visible filters)
- two month calendar on large display
- admin could edit title, description, about, favicon & logo directly form admin panel
- new add event layout => https://demo.gancio.org/add
- new editor to describe events (bold, italic, link) supported also using copy/paste
- the editor also support live markdown (try using ### at line start)
- start oauth2 server implementation (documentation: https://gancio.org/dev/oauth)
- add fediverse moderation
- fix embedding an event via iframe
- images converted in .webp
- new catalan translation, thanks @fadelkon

### 0.17.14
- [locale] add catalan
- [fix] fedi outbox

### 0.17.12
- [ui] add admin section on event page in mobile #63
- [fix] remove username from users

### 0.17.11
- [refactor] s/fed_user/ap_user
- [fedi] admin moderation

### 0.17.10
- [refactor] s/comment/resource/
- [refactor] remove `username` field
- [doc] about and federation

### 0.17.8
- [fix] use thumb in head og:img only

### 0.17.7
- [fix] #58 wrong url for RSS feed

### 0.17.5
- [fedi] comments moderation
- [fedi] user moderation
- [fedi] instance moderation
- [hotfix] cli setup
- [doc] fix debian upgrade
- [fix] comment ap_id key length
- [fix] fediverse signature
- [fedi] better /inbox /followers response

### 0.17.0
- [feat] add rss link @homepage
- [ui] add lot of explanation text
- [ui] show copied messages
- [admin] show n of unconfirmed users/events
- [ui] spinner while event image is loading
- [fedi] add follow me dialog in event
- [fix] do not add reminders in full ics export
- [fix] remove spaces from hashtags sent via AP
- [fix] #56 unconfirmed event sent via ap
- [fix] localPosts/comments in fediverse stats

### 0.16.0
- [feat] embed event as widget in external website
- [fedi] instances moderation in admin
- [fix] toggle event visibility by owner
- [fedi] manage unboost
- [refactoring] auth as middleware

### 0.15.7
- [fix] minor

### 0.15.6
- [fix] tags in event

### 0.15.5
- [model] migrations setup
- [feat] embeddable event widget/iframe

### 0.15.2
- [fix] delete event
- [fix] wrong html hierarchy

### 0.15.0
- [fix] backtop icon on mobile
- [fix] webfinger nodeinfo return real node info
- [fix] register email confirmation
- [feat] add federation settings (enable comments/boost/like)
- [feat] new event page layout
- [feat] could download .ics of event
- [feat] add cors to feed requests
- [refactoring] settings middleware, cleaning codebase

### 0.14.18
- [improve] better quality for images
- [fix] password recovery email
- [feat] new action field for notification 
- [feat] add DEBUG env variable in docker-compose.yml
- [style] fixed width in confirmation events table
- [fix] #38 timezone issue in rss export and using tor...

### 0.14.17
- [fix] image previews from external website
- [fix] docker-compose postgresql docs
- [improve] export white logo to fediverse
