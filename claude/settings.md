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
  "skipDangerousModePermissionPrompt": true,
  "env": {
    "MY_VAR": "value"
  },
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

## settings.local.json

`settings.json`과 구조는 동일하지만 **git에 커밋되지 않는다.**

개인 API 키, 로컬 경로, 나만 쓰는 권한 설정 등을 저장하는 데 적합하다.

::: warning
팀원과 공유하면 안 되는 정보(API 키, 개인 경로 등)는 반드시 `settings.local.json`에 저장하자.
:::

## CLAUDE.md

Claude가 이 프로젝트에서 작업할 때 따라야 할 행동 규칙을 정의하는 파일.

```md
## Git 워크플로우
- main 브랜치 직접 커밋/푸시 금지
- 항상 feature 브랜치 → PR → 리뷰 → 머지 순서로 진행
```

### `.claude/rules/` 로 분리하기

규칙이 많아져 CLAUDE.md 하나로 관리하기 복잡해지면 주제별로 분리할 수 있다.

```
.claude/rules/
├── git-workflow.md
├── code-style.md
└── review-process.md
```

## CLAUDE.md vs settings.json

| | CLAUDE.md | settings.json |
|---|---|---|
| 읽는 주체 | Claude (AI) | Claude Code 앱 자체 |
| 역할 | 행동 규칙 | 도구 설정 |
| 비유 | ESLint 규칙 | vite.config.ts |
