import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '개발 지식 위키',
  description: '프론트엔드 개발자가 백엔드까지 이해하기 위해 공부한 내용을 정리하는 공간',
  base: '/wiki/',
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Network',
        collapsed: false,
        items: [
          { text: '소개', link: '/network/' },
        ],
      },
      {
        text: 'Backend',
        collapsed: false,
        items: [
          { text: '소개', link: '/backend/' },
        ],
      },
      {
        text: 'Database',
        collapsed: false,
        items: [
          { text: '소개', link: '/database/' },
        ],
      },
      {
        text: 'Infra',
        collapsed: false,
        items: [
          { text: '소개', link: '/infra/' },
        ],
      },
      {
        text: 'CS',
        collapsed: false,
        items: [
          { text: '소개', link: '/cs/' },
        ],
      },
      {
        text: 'Security',
        collapsed: false,
        items: [
          { text: '소개', link: '/security/' },
        ],
      },
      {
        text: 'Frontend',
        collapsed: false,
        items: [
          { text: '소개', link: '/frontend/' },
          { text: 'Mobile', link: '/frontend/mobile/' },
          { text: 'React Native', link: '/frontend/mobile/react-native' },
        ],
      },
      {
        text: 'AI',
        collapsed: false,
        items: [
          { text: '소개', link: '/ai/' },
        ],
      },
      {
        text: 'Claude',
        collapsed: false,
        items: [
          { text: '소개', link: '/claude/' },
          { text: 'Memory', link: '/claude/memory' },
          { text: 'Settings', link: '/claude/settings' },
          { text: 'MCP', link: '/claude/mcp' },
        ],
      },
      {
        text: 'Common',
        collapsed: false,
        items: [
          { text: '소개', link: '/common/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Andrevile/wiki' },
    ],

    search: {
      provider: 'local',
    },
  },
})
