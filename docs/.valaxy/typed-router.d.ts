/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/addons/gallery': RouteRecordInfo<'/addons/gallery', '/addons/gallery', Record<never, never>, Record<never, never>>,
    '/addons/use': RouteRecordInfo<'/addons/use', '/addons/use', Record<never, never>, Record<never, never>>,
    '/addons/why': RouteRecordInfo<'/addons/why', '/addons/why', Record<never, never>, Record<never, never>>,
    '/addons/write': RouteRecordInfo<'/addons/write', '/addons/write', Record<never, never>, Record<never, never>>,
    '/dev/': RouteRecordInfo<'/dev/', '/dev', Record<never, never>, Record<never, never>>,
    '/dev/docs': RouteRecordInfo<'/dev/docs', '/dev/docs', Record<never, never>, Record<never, never>>,
    '/dev/faq': RouteRecordInfo<'/dev/faq', '/dev/faq', Record<never, never>, Record<never, never>>,
    '/dev/logo': RouteRecordInfo<'/dev/logo', '/dev/logo', Record<never, never>, Record<never, never>>,
    '/ecosystem/client': RouteRecordInfo<'/ecosystem/client', '/ecosystem/client', Record<never, never>, Record<never, never>>,
    '/ecosystem/community': RouteRecordInfo<'/ecosystem/community', '/ecosystem/community', Record<never, never>, Record<never, never>>,
    '/ecosystem/news': RouteRecordInfo<'/ecosystem/news', '/ecosystem/news', Record<never, never>, Record<never, never>>,
    '/ecosystem/vscode': RouteRecordInfo<'/ecosystem/vscode', '/ecosystem/vscode', Record<never, never>, Record<never, never>>,
    '/examples/code-height-limit': RouteRecordInfo<'/examples/code-height-limit', '/examples/code-height-limit', Record<never, never>, Record<never, never>>,
    '/examples/katex': RouteRecordInfo<'/examples/katex', '/examples/katex', Record<never, never>, Record<never, never>>,
    '/examples/mermaid': RouteRecordInfo<'/examples/mermaid', '/examples/mermaid', Record<never, never>, Record<never, never>>,
    '/examples/partial-content-encryption': RouteRecordInfo<'/examples/partial-content-encryption', '/examples/partial-content-encryption', Record<never, never>, Record<never, never>>,
    '/examples/site': RouteRecordInfo<'/examples/site', '/examples/site', Record<never, never>, Record<never, never>>,
    '/faq/': RouteRecordInfo<'/faq/', '/faq', Record<never, never>, Record<never, never>>,
    '/guide/best-pratice': RouteRecordInfo<'/guide/best-pratice', '/guide/best-pratice', Record<never, never>, Record<never, never>>,
    '/guide/built-ins/': RouteRecordInfo<'/guide/built-ins/', '/guide/built-ins', Record<never, never>, Record<never, never>>,
    '/guide/commands/': RouteRecordInfo<'/guide/commands/', '/guide/commands', Record<never, never>, Record<never, never>>,
    '/guide/config/': RouteRecordInfo<'/guide/config/', '/guide/config', Record<never, never>, Record<never, never>>,
    '/guide/config/extend': RouteRecordInfo<'/guide/config/extend', '/guide/config/extend', Record<never, never>, Record<never, never>>,
    '/guide/custom/components': RouteRecordInfo<'/guide/custom/components', '/guide/custom/components', Record<never, never>, Record<never, never>>,
    '/guide/custom/extend': RouteRecordInfo<'/guide/custom/extend', '/guide/custom/extend', Record<never, never>, Record<never, never>>,
    '/guide/custom/hooks': RouteRecordInfo<'/guide/custom/hooks', '/guide/custom/hooks', Record<never, never>, Record<never, never>>,
    '/guide/custom/styles': RouteRecordInfo<'/guide/custom/styles', '/guide/custom/styles', Record<never, never>, Record<never, never>>,
    '/guide/custom/templates': RouteRecordInfo<'/guide/custom/templates', '/guide/custom/templates', Record<never, never>, Record<never, never>>,
    '/guide/deploy': RouteRecordInfo<'/guide/deploy', '/guide/deploy', Record<never, never>, Record<never, never>>,
    '/guide/features': RouteRecordInfo<'/guide/features', '/guide/features', Record<never, never>, Record<never, never>>,
    '/guide/getting-started': RouteRecordInfo<'/guide/getting-started', '/guide/getting-started', Record<never, never>, Record<never, never>>,
    '/guide/i18n': RouteRecordInfo<'/guide/i18n', '/guide/i18n', Record<never, never>, Record<never, never>>,
    '/guide/markdown': RouteRecordInfo<'/guide/markdown', '/guide/markdown', Record<never, never>, Record<never, never>>,
    '/guide/page': RouteRecordInfo<'/guide/page', '/guide/page', Record<never, never>, Record<never, never>>,
    '/guide/post': RouteRecordInfo<'/guide/post', '/guide/post', Record<never, never>, Record<never, never>>,
    '/guide/third-party/': RouteRecordInfo<'/guide/third-party/', '/guide/third-party', Record<never, never>, Record<never, never>>,
    '/guide/third-party/comment-system': RouteRecordInfo<'/guide/third-party/comment-system', '/guide/third-party/comment-system', Record<never, never>, Record<never, never>>,
    '/guide/third-party/schema-org': RouteRecordInfo<'/guide/third-party/schema-org', '/guide/third-party/schema-org', Record<never, never>, Record<never, never>>,
    '/guide/third-party/vite-vue': RouteRecordInfo<'/guide/third-party/vite-vue', '/guide/third-party/vite-vue', Record<never, never>, Record<never, never>>,
    '/guide/why': RouteRecordInfo<'/guide/why', '/guide/why', Record<never, never>, Record<never, never>>,
    '/migration/': RouteRecordInfo<'/migration/', '/migration', Record<never, never>, Record<never, never>>,
    '/migration/hexo': RouteRecordInfo<'/migration/hexo', '/migration/hexo', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/posts/i18n': RouteRecordInfo<'/posts/i18n', '/posts/i18n', Record<never, never>, Record<never, never>>,
    '/themes/gallery': RouteRecordInfo<'/themes/gallery', '/themes/gallery', Record<never, never>, Record<never, never>>,
    '/themes/use': RouteRecordInfo<'/themes/use', '/themes/use', Record<never, never>, Record<never, never>>,
    '/themes/write': RouteRecordInfo<'/themes/write', '/themes/write', Record<never, never>, Record<never, never>>,
  }
}
