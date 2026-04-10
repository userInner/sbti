# SBTI - 沙雕人格测试 (Sha Bi Type Indicator)

一个基于 Next.js 的趣味人格测试应用，通过 28 道沙雕问题测出你的"沙雕人格类型"，共 27 种结果。

## 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看。

## Docker 部署

```bash
# 创建数据目录（首次部署）
mkdir -p data

# 如果有已有数据库，复制到 data 目录
# cp sbti.db data/sbti.db

# 构建并启动
docker compose up -d --build
```

在线体验：[https://sbti.aibro.vip](https://sbti.aibro.vip)

统计数据持久化在宿主机 `./data/sbti.db` 中。

## 技术栈

- Next.js 16 (standalone 模式)
- SQLite (better-sqlite3)
- Tailwind CSS
