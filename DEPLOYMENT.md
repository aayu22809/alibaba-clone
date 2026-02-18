# Deployment Guide - GitHub Pages

This guide explains how to deploy the Alibaba Scam Parody site to GitHub Pages.

## Prerequisites

1. A GitHub account
2. The repository pushed to GitHub
3. GitHub Pages enabled in repository settings

## Automatic Deployment Setup

### 1. Push to GitHub

If you haven't already pushed this repository to GitHub:

```bash
# If this is a fresh repo
git remote add origin https://github.com/YOUR_USERNAME/alibaba-clone.git
git branch -M main
git push -u origin main

# If you're updating an existing repo
git push
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Source**: GitHub Actions
4. Save the changes

### 3. Trigger Deployment

The GitHub Actions workflow will automatically deploy when you:
- Push to the `main` branch
- Manually trigger it from the Actions tab

To manually trigger:
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages**
3. Click **Run workflow**

## Configuration

### Base Path

The site is configured to deploy at `/alibaba-clone`. This is set in `svelte-app/svelte.config.js`:

```javascript
paths: {
  base: process.env.NODE_ENV === 'production' ? '/alibaba-clone' : ''
}
```

**Important**: Change `/alibaba-clone` to match your repository name if different!

### Workflow Configuration

The deployment workflow is located at `.github/workflows/deploy.yml`. It:
1. Checks out the code
2. Sets up Node.js and pnpm
3. Installs dependencies
4. Builds the SvelteKit app
5. Deploys to GitHub Pages

## Build Process

The build process:
1. Runs `pnpm install` in `svelte-app/`
2. Runs `pnpm run build` with `NODE_ENV=production`
3. Outputs static files to `svelte-app/build/`
4. Uploads the build directory to GitHub Pages

## Accessing Your Site

Once deployed, your site will be available at:

```
https://YOUR_USERNAME.github.io/alibaba-clone/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Local Testing

To test the production build locally:

```bash
cd svelte-app
pnpm run build
pnpm run preview
```

This will build and preview the site at `http://localhost:4173`

## Troubleshooting

### Build Fails

1. Check the Actions tab for error logs
2. Ensure all dependencies are in `package.json`
3. Test the build locally: `cd svelte-app && pnpm run build`

### 404 Errors

1. Verify the base path in `svelte.config.js` matches your repo name
2. Ensure `.nojekyll` file exists in `static/` directory
3. Check that GitHub Pages source is set to "GitHub Actions"

### Styles Not Loading

1. Check browser console for 404 errors
2. Verify the base path configuration
3. Ensure all assets are in the `static/` directory

### Links Not Working

Make sure you're using SvelteKit's navigation:
- Use `<a href="/path">` for internal links
- The base path is automatically handled by SvelteKit

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `svelte-app/static/` with your domain:
   ```
   example.com
   ```

2. Configure your domain's DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub Settings → Pages, enter your custom domain

4. Update `svelte.config.js` to remove the base path:
   ```javascript
   paths: {
     base: ''
   }
   ```

## Environment Variables

If you need environment variables:

1. Add them to GitHub Secrets (Settings → Secrets → Actions)
2. Reference them in `.github/workflows/deploy.yml`:
   ```yaml
   - name: Build
     env:
       PUBLIC_API_KEY: ${{ secrets.API_KEY }}
     run: pnpm run build
   ```

## Monitoring Deployments

1. Go to the **Actions** tab in your repository
2. Click on a workflow run to see detailed logs
3. Check the **Deploy to GitHub Pages** job for deployment status

## Updating the Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update site"
git push
```

The workflow will automatically rebuild and redeploy.

## Rollback

To rollback to a previous version:

1. Go to **Actions** tab
2. Find a successful previous deployment
3. Click **Re-run jobs**

Or use git:

```bash
git revert <commit-hash>
git push
```

## Performance Tips

The static adapter pre-renders all pages for optimal performance:
- No server-side rendering needed
- All pages are static HTML
- Fast loading times
- SEO-friendly

## Security Note

This is a parody/educational site. In production:
- Never commit secrets or API keys
- Use environment variables for sensitive data
- Enable branch protection rules
- Review pull requests before merging

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Review SvelteKit documentation: https://kit.svelte.dev
3. Check GitHub Pages status: https://www.githubstatus.com

