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

| 타입 | 설명 | 예시 |
|------|------|------|
| `user` | 유저 역할, 선호도, 지식 수준 | "프론트엔드 개발자" |
| `feedback` | 행동 규칙 (하지 말 것 / 계속 할 것) | "PR 방식으로만 머지" |
| `project` | 진행 중인 작업, 목표, 맥락 | "wiki 저장소 목적" |
| `reference` | 외부 시스템 포인터 | "버그는 Linear INGEST 프로젝트에서 관리" |

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
