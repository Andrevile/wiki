# MCP (Model Context Protocol)

## MCP란?

Anthropic이 만든 오픈 표준 프로토콜. AI 모델(Claude 등)이 외부 도구, 데이터 소스, 서비스와 표준화된 방식으로 연결되도록 한다.

쉽게 말하면 **AI를 위한 USB-C 포트** — 어떤 도구든 MCP 규격만 맞추면 Claude에 꽂아서 쓸 수 있다.

## 왜 필요한가?

기존에는 AI에 외부 도구를 붙이려면 각각 커스텀 연동을 만들어야 했다. MCP는 이를 표준화해서 한 번 만든 MCP 서버를 어떤 AI 클라이언트에서도 재사용할 수 있게 한다.

## 구조

```
[MCP Client]  ←→  [MCP Server]  ←→  [외부 도구/데이터]
 (Claude)           (중간 서버)       (DB, API, 파일 등)
```

- **MCP Client**: Claude Code, Claude Desktop 등
- **MCP Server**: 특정 도구를 MCP 규격으로 감싼 서버
- **Transport**: stdio (로컬) 또는 HTTP/SSE (원격)

## MCP Server가 제공하는 것

| 종류 | 설명 | 예시 |
|------|------|------|
| Tools | AI가 호출할 수 있는 함수 | DB 쿼리, API 호출 |
| Resources | AI가 읽을 수 있는 데이터 | 파일, URL 내용 |
| Prompts | 재사용 가능한 프롬프트 템플릿 | - |

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

## 참고

- 공식 스펙: https://modelcontextprotocol.io
