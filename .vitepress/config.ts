import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: '개발 지식 위키',
  description: '프론트엔드 개발자가 백엔드까지 이해하기 위해 공부한 내용을 정리하는 공간',
  base: '/wiki/',
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: generateSidebar({
      documentRootPath: '/',
      excludeFiles: ['CLAUDE.md'],
      excludeFolders: ['.vitepress', 'node_modules'],
      capitalizeFirst: true,
      useTitleFromFrontmatter: true,
      collapsed: true,
      collapseDepth: 2,
      sortMenusByFrontmatterOrder: true,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Andrevile/wiki' },
    ],

    search: {
      provider: 'local',
    },
  },
})
