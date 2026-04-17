---
title: 설정 파일
description: Claude Code의 settings.json, CLAUDE.md 등 설정 파일 완전 가이드
---

# 설정 파일

Claude Code는 여러 종류의 설정 파일을 통해 동작을 제어한다.

## 파일 종류 한눈에 보기

| 파일 | 위치 | git 커밋 | 용도 |
|------|------|----------|------|
| `settings.json` | `~/.claude/` 또는 `.claude/` | O | 공유 가능한 도구 설정 |
| `settings.local.json` | `~/.claude/` 또는 `.claude/` | X | 개인용 로컬 설정 |
| `CLAUDE.md` | 프로젝트 루트 또는 `.claude/` | O | Claude 행동 규칙 |
| `CLAUDE.local.md` | 프로젝트 루트 | X | 개인용 메모 |
| `.claude/rules/` | 프로젝트 내 | O | 주제별 규칙 파일 분리 |

::: info 우선순위
프로젝트 레벨 설정이 글로벌 설정보다 우선한다. 같은 키가 있으면 프로젝트 설정이 덮어쓴다.
:::

## settings.json

Claude Code 앱 자체의 동작을 제어하는 설정 파일.

```json
{
  "model": "sonnet",
  "autoMemoryEnabled": true,
  "permissions": {
    "allow": ["Bash(git *)", "Read"],
    "deny": ["Bash(rm -rf *)"]
  },
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write",
      "hooks": [{ "type": "command", "command": "prettier --write ." }]
    }]
  }
}
```

### Best Practice — permissions 설정

매번 허용 여부를 묻는 반복적인 명령어는 `allow`에 등록해두면 편하다.
단, 범위를 너무 넓게 잡으면 위험하다. 와일드카드는 신중하게 사용한다.

```json
// ✅ 좋은 예 — 명령어를 구체적으로 제한
{
  "permissions": {
    "allow": [
      "Bash(git add *)",
      "Bash(git commit *)",
      "Bash(git push *)",
      "Bash(npm run *)"
    ]
  }
}

// ❌ 나쁜 예 — 모든 Bash 명령어를 허용
{
  "permissions": {
    "allow": ["Bash(*)"]
  }
}
```

### Best Practice — hooks 활용

파일 저장 후 자동으로 포맷팅, 린팅을 실행하면 코드 품질을 유지할 수 있다.

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [{ "type": "command", "command": "eslint --fix ${file}" }]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash(git push *)",
        "hooks": [{ "type": "command", "command": "npm run test" }]
      }
    ]
  }
}
```

## settings.local.json

`settings.json`과 구조는 동일하지만 **git에 커밋되지 않는다.**

::: warning
팀원과 공유하면 안 되는 정보(API 키, 개인 경로 등)는 반드시 `settings.local.json`에 저장하자.
:::

```json
// settings.local.json — 개인용, git 제외
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-ant-...",
    "DB_URL": "postgresql://localhost/mydb"
  },
  "permissions": {
    "allow": [
      "Bash(ssh *)",
      "Bash(psql *)"
    ]
  }
}
```

## CLAUDE.md

Claude가 이 프로젝트에서 작업할 때 따라야 할 행동 규칙을 정의하는 파일.

### Best Practice — CLAUDE.md 작성법

모호한 지시보다 구체적인 규칙이 훨씬 효과적이다.

```md
<!-- ❌ 모호한 예 -->
## 규칙
- 코드를 잘 작성해라
- PR을 사용해라

<!-- ✅ 구체적인 예 -->
## Git 워크플로우
- **main 브랜치 직접 커밋/푸시 금지**
- 브랜치 네이밍: `feat/기능명`, `fix/버그명`, `docs/주제`
- PR 제목 형식: `feat: 로그인 기능 추가`
- 머지 전 반드시 빌드 확인: `npm run build`

## 코드 스타일
- TypeScript strict 모드 사용
- 함수형 컴포넌트만 사용 (클래스 컴포넌트 금지)
- 주석은 영어로 작성
```

## .claude/rules/ 로 분리하기

규칙이 많아지면 주제별로 파일을 나눠 관리한다.

```
.claude/rules/
├── git-workflow.md     ← Git 관련 규칙
├── code-style.md       ← 코드 스타일 규칙
└── review-process.md   ← 리뷰 프로세스
```

## CLAUDE.md vs settings.json

| | CLAUDE.md | settings.json |
|---|---|---|
| 읽는 주체 | Claude (AI) | Claude Code 앱 자체 |
| 역할 | 행동 규칙 | 도구 설정 |
| 비유 | ESLint 규칙 | vite.config.ts |
