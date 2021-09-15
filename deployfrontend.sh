rsync -r src/ docs/
rsync build/contracs/ChainList.json docs/
git add .
git commit -m "adding frontend files to Github Pages"
git push