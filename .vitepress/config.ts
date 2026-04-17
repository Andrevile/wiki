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
        collapsed: true,
        items: [
          { text: '소개', link: '/network/' },
          { text: 'HTTP', link: '/network/http/' },
          { text: 'REST', link: '/network/rest/' },
          { text: 'WebSocket', link: '/network/websocket/' },
        ],
      },
      {
        text: 'Backend',
        collapsed: true,
        items: [
          { text: '소개', link: '/backend/' },
          {
            text: 'Concepts',
            collapsed: true,
            items: [
              { text: '소개', link: '/backend/concepts/' },
            ],
          },
          {
            text: 'Frameworks',
            collapsed: true,
            items: [
              { text: '소개', link: '/backend/frameworks/' },
              { text: 'Express', link: '/backend/frameworks/express/' },
              { text: 'NestJS', link: '/backend/frameworks/nestjs/' },
              { text: 'Spring', link: '/backend/frameworks/spring/' },
            ],
          },
        ],
      },
      {
        text: 'Database',
        collapsed: true,
        items: [
          { text: '소개', link: '/database/' },
          {
            text: 'Concepts',
            collapsed: true,
            items: [
              { text: '소개', link: '/database/concepts/' },
            ],
          },
          {
            text: 'SQL',
            collapsed: true,
            items: [
              { text: '소개', link: '/database/sql/' },
              { text: 'PostgreSQL', link: '/database/sql/postgresql/' },
              { text: 'MySQL', link: '/database/sql/mysql/' },
            ],
          },
          {
            text: 'NoSQL',
            collapsed: true,
            items: [
              { text: '소개', link: '/database/nosql/' },
              { text: 'MongoDB', link: '/database/nosql/mongodb/' },
              { text: 'Redis', link: '/database/nosql/redis/' },
            ],
          },
        ],
      },
      {
        text: 'Infra',
        collapsed: true,
        items: [
          { text: '소개', link: '/infra/' },
          {
            text: 'Container',
            collapsed: true,
            items: [
              { text: '소개', link: '/infra/container/' },
              { text: 'Docker', link: '/infra/container/docker/' },
            ],
          },
          {
            text: 'CI/CD',
            collapsed: true,
            items: [
              { text: '소개', link: '/infra/cicd/' },
              { text: 'GitHub Actions', link: '/infra/cicd/github-actions/' },
            ],
          },
          {
            text: 'Cloud',
            collapsed: true,
            items: [
              { text: '소개', link: '/infra/cloud/' },
              { text: 'AWS', link: '/infra/cloud/aws/' },
              { text: 'GCP', link: '/infra/cloud/gcp/' },
            ],
          },
        ],
      },
      {
        text: 'CS',
        collapsed: true,
        items: [
          { text: '소개', link: '/cs/' },
          { text: '자료구조', link: '/cs/data-structures/' },
          { text: '알고리즘', link: '/cs/algorithms/' },
          { text: 'OS', link: '/cs/os/' },
        ],
      },
      {
        text: 'Security',
        collapsed: true,
        items: [
          { text: '소개', link: '/security/' },
          { text: 'Web', link: '/security/web/' },
          { text: 'Auth', link: '/security/auth/' },
        ],
      },
      {
        text: 'Frontend',
        collapsed: true,
        items: [
          { text: '소개', link: '/frontend/' },
          {
            text: 'Web',
            collapsed: true,
            items: [
              { text: '소개', link: '/frontend/web/' },
              { text: 'React', link: '/frontend/web/react/' },
              { text: 'Vue', link: '/frontend/web/vue/' },
            ],
          },
          {
            text: 'Mobile',
            collapsed: true,
            items: [
              { text: '소개', link: '/frontend/mobile/' },
              { text: 'React Native', link: '/frontend/mobile/react-native/' },
            ],
          },
        ],
      },
      {
        text: 'AI',
        collapsed: true,
        items: [
          { text: '소개', link: '/ai/' },
          {
            text: 'LLM',
            collapsed: true,
            items: [
              { text: '소개', link: '/ai/llm/' },
            ],
          },
          {
            text: 'Claude',
            collapsed: true,
            items: [
              { text: '소개', link: '/ai/claude/' },
              {
                text: 'Claude Code',
                collapsed: true,
                items: [
                  { text: '소개', link: '/ai/claude/code/' },
                  { text: '메모리 시스템', link: '/ai/claude/code/memory' },
                  { text: '설정 파일', link: '/ai/claude/code/settings' },
                  { text: 'MCP', link: '/ai/claude/code/mcp' },
                ],
              },
              {
                text: 'Claude API',
                collapsed: true,
                items: [
                  { text: '소개', link: '/ai/claude/api/' },
                ],
              },
            ],
          },
        ],
      },
      {
        text: 'Common',
        collapsed: true,
        items: [
          { text: '소개', link: '/common/' },
          { text: 'Git', link: '/common/git/' },
          { text: 'Methodology', link: '/common/methodology/' },
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
