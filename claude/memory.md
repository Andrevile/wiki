---
title: 메모리 시스템
description: Claude Code가 세션 간 컨텍스트를 유지하는 방법
---

# 메모리 시스템

Claude Code는 세션이 종료돼도 학습한 내용을 기억할 수 있는 **Auto Memory** 시스템을 제공한다.

## 저장 위치

메모리는 프로젝트별로 분리되어 로컬에 저장된다.

```
~/.claude/projects/<project>/memory/
├── MEMORY.md          ← 인덱스. 세션 시작 시 자동 로드 (최대 200줄)
├── user_profile.md
├── project_context.md
└── ...                ← 주제별 파일 (필요할 때만 로드)
```

`<project>` 는 프로젝트 절대 경로의 `/` 를 `-` 로 치환한 값이다.

```
/home/jongoh_jang/wiki  →  -home-jongoh-jang-wiki
```

::: info
같은 git repo 안이라면 서브디렉토리 위치에 관계없이 동일한 메모리 경로를 가리킨다.
:::

## 동작 방식

- `MEMORY.md` 첫 200줄은 **세션 시작 시 자동 로드**
- 나머지 topic 파일들은 필요할 때만 읽음
- Claude Code **v2.1.59+** 부터 기본 활성화

## 메모리 종류

| 타입 | 설명 | 저장 시점 |
|------|------|-----------|
| `user` | 유저 역할, 선호도, 지식 수준 | 유저 정보를 처음 알게 됐을 때 |
| `feedback` | 행동 규칙 (하지 말 것 / 계속 할 것) | 교정이나 확인을 받았을 때 |
| `project` | 진행 중인 작업, 목표, 맥락 | 프로젝트 컨텍스트를 파악했을 때 |
| `reference` | 외부 시스템 포인터 | 외부 리소스 위치를 알게 됐을 때 |

## Best Practice

### 메모리 파일 직접 작성하기

Claude가 자동으로 저장하길 기다리지 않고 직접 써두면 더 정확하다.

```md
<!-- ~/.claude/projects/.../memory/user_profile.md -->
---
name: User Profile
type: user
description: 유저는 5년차 프론트엔드 개발자
---

React/TypeScript 메인. 백엔드는 학습 중.
백엔드 개념 설명 시 프론트 관점에서 비유해서 설명할 것.
코드 예시는 TypeScript로.
```

### feedback 메모리 잘 활용하기

교정이 발생했을 때 이유까지 같이 저장해두면 나중에 판단 근거가 된다.

```md
<!-- feedback_git_workflow.md -->
---
name: Git Workflow Rule
type: feedback
---

main 브랜치 직접 커밋/푸시 금지. 항상 PR을 거친다.

**Why:** PR 기반 워크플로우를 학습하고 습관화하기 위함.
**How to apply:** 파일 작성 후 항상 브랜치 생성 → PR 생성.
```

### MEMORY.md 인덱스 간결하게 유지하기

MEMORY.md는 200줄 한도가 있고 매 세션마다 로드된다. 내용을 직접 쓰지 말고 포인터만 남긴다.

```md
<!-- MEMORY.md — 인덱스만 관리 -->
# Memory Index

- [User Profile](user_profile.md) — 프론트엔드 개발자, 백엔드 학습 중
- [Git Workflow](feedback_git_workflow.md) — PR 방식 강제
- [Project Context](project_context.md) — wiki 저장소 목적
```

## 설정

```json
// settings.json
{
  "autoMemoryEnabled": false,             // 비활성화
  "autoMemoryDirectory": "~/my-memory"   // 저장 위치 변경
}
```

세션 중 `/memory` 명령어로 메모리 파일을 열어 직접 확인하고 편집할 수 있다.

## Auto Memory vs CLAUDE.md

| | Auto Memory | CLAUDE.md |
|---|---|---|
| 작성 주체 | Claude가 자동으로 | 사람이 직접 |
| 용도 | 세션 간 학습 내용 유지 | 프로젝트 행동 규칙 명시 |
| git 커밋 | X (로컬 전용) | O (팀 공유 가능) |

::: tip
CLAUDE.md는 "이 프로젝트에서 어떻게 일해라"는 규칙이고,
Auto Memory는 Claude가 스스로 쌓아가는 학습 노트라고 생각하면 된다.
:::
