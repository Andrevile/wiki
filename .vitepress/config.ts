import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: 'DevWiki',
  description: '개발 지식을 깊이 있게 정리하는 공간',
  base: '/wiki/',
  ignoreDeadLinks: true,
  srcExclude: ['CLAUDE.md', 'CLAUDE.local.md'],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: (generateSidebar({
      documentRootPath: '/',
      excludeFolders: ['.vitepress', 'node_modules'],
      capitalizeFirst: true,
      useTitleFromFrontmatter: true,
      collapsed: true,
      collapseDepth: 2,
      sortMenusByFrontmatterOrder: true,
    }) as any[]).filter((item: any) => !['CLAUDE', 'CLAUDE.local'].includes(item.text)),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Andrevile/wiki' },
    ],

    search: {
      provider: 'local',
    },
  },
})
