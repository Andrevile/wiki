# Claude Code 설정 파일

## 파일 종류

| 파일 | 위치 | 용도 |
|------|------|------|
| `settings.json` | `~/.claude/` 또는 `.claude/` | 공유 가능한 설정 |
| `settings.local.json` | `~/.claude/` 또는 `.claude/` | 개인용 로컬 설정 (git 제외) |
| `CLAUDE.md` | 프로젝트 루트 또는 `.claude/` | Claude 행동 규칙 |
| `CLAUDE.local.md` | 프로젝트 루트 | 개인용 메모 (gitignore 추가 필요) |
| `.claude/rules/` | 프로젝트 내 | 주제별 규칙 파일 분리 관리 |

## 우선순위

프로젝트 레벨 > 글로벌 레벨. 같은 키가 있으면 프로젝트 설정이 덮어씀.

## settings.json 주요 항목

```json
{
  "model": "sonnet",                        // 사용할 Claude 모델
  "autoMemoryEnabled": true,                // Auto Memory 활성화
  "skipDangerousModePermissionPrompt": true,
  "env": {
    "MY_VAR": "value"                       // 환경변수 설정
  },
  "permissions": {
    "allow": ["Bash(git *)", "Read"],       // 자동 허용할 명령어
    "deny": ["Bash(rm -rf *)"]             // 항상 거부할 명령어
  },
  "hooks": {
    "PostToolUse": [{                       // 도구 실행 후 자동 실행할 명령어
      "matcher": "Write",
      "hooks": [{ "type": "command", "command": "prettier --write ." }]
    }]
  }
}
```

## settings.local.json

`settings.json`과 구조 동일. **git에 커밋되지 않아** 개인 권한 설정, 로컬 경로 등을 저장하는 데 적합.

## CLAUDE.md vs settings.json

| | CLAUDE.md | settings.json |
|---|---|---|
| 읽는 주체 | Claude (AI) | Claude Code 앱 자체 |
| 역할 | 행동 규칙 ("PR로만 머지해라") | 도구 설정 ("git 명령어 자동 허용") |
| 비유 | eslint 규칙 | vite.config.ts |

## .claude/rules/

규칙이 많아져 CLAUDE.md 하나로 관리하기 복잡해질 때 주제별로 분리.

```
.claude/rules/
├── git-workflow.md
├── code-style.md
└── review-process.md
```
