# ベースイメージとして公式のNode.jsイメージを使用
FROM node:16

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションが3000ポートで動作することを指定
EXPOSE 3000

# コンテナ起動時に実行するコマンド
CMD ["npm", "run", "dev"]
