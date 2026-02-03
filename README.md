# Deploying this project to GitHub Pages ✅

This folder contains a simple static site of small HTML/JS demo projects. The top-level `index.html` (dashboard) links to all project pages.

## Quick steps to publish

1. Create a GitHub repository and push this folder as the repository root:

```bash
git init
git add .
git commit -m "Initial upload - demo projects"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. Enable GitHub Pages:
- Go to your repository on GitHub → Settings → Pages
- Under "Build and deployment" choose "Deploy from a branch"
- Select branch `main` and folder `/ (root)`
- Save — within a minute your site will be available at `https://<your-username>.github.io/<your-repo>/`

3. Verify
- Open the published URL and confirm `index.html` loads and links to the demos.

Optional: Use `gh-pages` branch or Actions if you want a more advanced automated workflow.

If you want, I can add a GitHub Actions workflow to auto-deploy on push. Let me know.