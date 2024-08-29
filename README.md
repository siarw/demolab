# nlphilab

demo playground for our future website

Steps to build:

npm run build:prod

git add .
git commit -m "Save changes before deployment"
git push

git checkout gh-pages

git checkout main -- index.html
git checkout main -- eligibility-checklist.html
git checkout main -- idea-outline.html
git checkout main -- call-for-projects.html
git checkout main -- dist/
git checkout main -- assets/

git add .
git commit -m "Deploy updated files"
git push

git checkout main
