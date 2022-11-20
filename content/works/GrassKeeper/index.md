---
title: "GrassKeeper"
date: 2022-11-20T22:22:18+09:00
image: "grass.png"
description: "今日分のGitHubの草について報告するBot"
github: "https://github.com/nishi-yuki/GrassKeeper"
weblink: ""
draft: true
---

今日分のGitHubの草が生えているかどうかを通知するDiscordBotです。
草情報を取得し、Discordにメッセージを送信するPythonスクリプトをLambda上に置き、AWS EventBridgeで定期実行しています。
草情報はGitHubのGraphQL APIで取得しています。
Serverless Frameworkを使ってInfrastructure as Codeを実現しており、コマンドひとつでデプロイが完了します。

### 使用技術

- Python
- GraphQL
- AWS Lambda
- Serverless Framework 
