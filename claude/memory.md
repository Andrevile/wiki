# Claude Code 메모리 시스템

Claude Code가 세션 간 컨텍스트를 유지하는 방법.

## 메모리 저장 위치

```
~/.claude/projects/<project>/memory/
├── MEMORY.md        # 인덱스 — 세션 시작 시 자동 로드 (최대 200줄)
├── user_profile.md  # 유저 정보
├── project_context.md
└── ...              # 주제별 파일 (필요할 때만 로드)
```

`<project>` 경로는 프로젝트 절대 경로의 `/`를 `-`로 치환한 값.

```
/home/jongoh_jang/wiki  →  -home-jongoh-jang-wiki
```

같은 git repo 안이면 서브디렉토리 위치에 상관없이 동일한 메모리 경로를 가리킨다.

## 동작 방식

- `MEMORY.md` 첫 200줄은 **세션 시작 시 자동 로드**
- 나머지 topic 파일들은 필요할 때만 읽음
- Claude Code v2.1.59+ 부터 기본 활성화

## 메모리 종류

| 타입 | 설명 |
|------|------|
| user | 유저 역할, 선호도, 지식 수준 |
| feedback | 행동 규칙 (하지 말 것 / 계속 할 것) |
| project | 진행 중인 작업, 목표, 맥락 |
| reference | 외부 시스템 포인터 (Linear, Grafana 등) |

## 설정

```json
// settings.json
{
  "autoMemoryEnabled": false,              // 끄기
  "autoMemoryDirectory": "~/custom-path"  // 저장 위치 변경
}
```

세션 중 `/memory` 명령어로 메모리 파일 확인 가능.

## CLAUDE.md와의 차이

| | Auto Memory | CLAUDE.md |
|---|---|---|
| 작성 주체 | Claude가 자동으로 | 사람이 직접 |
| 용도 | 세션 간 학습 내용 유지 | 프로젝트 행동 규칙 명시 |
| git 커밋 | X (로컬 전용) | O (팀 공유 가능) |
