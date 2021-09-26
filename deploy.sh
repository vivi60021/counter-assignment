//deploy.sh
#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
# 部署到 https://github.com/vivi60021/counter-assignment.git 分支為 gh-pages
git push -f https://github.com/vivi60021/counter-assignment.git master:gh-pages
cd -