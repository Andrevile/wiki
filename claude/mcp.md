---
title: MCP (Model Context Protocol)
description: AI 모델과 외부 도구를 연결하는 표준 프로토콜
---

# MCP (Model Context Protocol)

## MCP란?

Anthropic이 만든 오픈 표준 프로토콜. AI 모델이 외부 도구, 데이터 소스, 서비스와 **표준화된 방식**으로 연결되도록 한다.

::: tip 한 줄 요약
**AI를 위한 USB-C 포트** — 어떤 도구든 MCP 규격만 맞추면 Claude에 꽂아서 쓸 수 있다.
:::

## 왜 필요한가?

기존에는 AI에 외부 도구를 붙이려면 각각 커스텀 연동을 만들어야 했다. MCP는 이를 표준화해서 한 번 만든 MCP 서버를 어떤 AI 클라이언트에서도 재사용할 수 있게 한다.

## 구조

```
[MCP Client]  ←→  [MCP Server]  ←→  [외부 도구 / 데이터]
 (Claude)          (중간 서버)        (DB, API, 파일 등)
```

| 구성요소 | 설명 | 예시 |
|----------|------|------|
| MCP Client | AI 모델 측 | Claude Code, Claude Desktop |
| MCP Server | 도구를 MCP 규격으로 감싼 서버 | DB 쿼리 서버, GitHub 서버 |
| Transport | 통신 방식 | stdio (로컬), HTTP/SSE (원격) |

## MCP Server가 제공하는 것

| 종류 | 설명 | 예시 |
|------|------|------|
| **Tools** | AI가 호출할 수 있는 함수 | DB 쿼리, API 호출, 파일 읽기 |
| **Resources** | AI가 읽을 수 있는 데이터 | 파일 내용, URL 결과 |
| **Prompts** | 재사용 가능한 프롬프트 템플릿 | 코드 리뷰 템플릿 |

## Claude Code에서 설정

```json
// settings.json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["-y", "@my-org/mcp-server"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

::: info 참고
공식 스펙 및 사용 가능한 MCP 서버 목록은 [modelcontextprotocol.io](https://modelcontextprotocol.io) 에서 확인할 수 있다.
:::
