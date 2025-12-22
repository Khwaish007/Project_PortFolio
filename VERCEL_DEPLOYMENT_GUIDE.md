# 🚀 VERCEL DEPLOYMENT GUIDE - Complete Step-by-Step

## 📋 Prerequisites
- GitHub account
- Vercel account (free)
- MongoDB Atlas database
- Cloudinary account
- Gmail with App Password

---

## 🔧 PART 1: PREPARE YOUR CODE

### ✅ Code Changes (Already Done!)
- ✅ Created `Backend/vercel.json`
- ✅ Created `Frontend/src/config.js` for API URLs
- ✅ Updated all components to use centralized API config
- ✅ Added CORS configuration for production
- ✅ Created `.vercelignore` files
- ✅ Updated `package.json` scripts

---

## 📦 PART 2: PUSH TO GITHUB

### Step 1: Check Git Status
```bash
cd /home/khwaish-garg/Desktop/Project-1
git status
```

### Step 2: Add All Changes
```bash
git add .
```

### Step 3: Commit Changes
```bash
git commit -m "Configure project for Vercel deployment"
```

### Step 4: Push to GitHub
```bash
git push origin main
```

---

## 🌐 PART 3: DEPLOY BACKEND TO VERCEL

### Step 1: Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### Step 2: Import Backend Project
1. Click **"Add New..."** → **"Project"**
2. Find your repository: **`Khwaish007/Project-1`**
3. Click **"Import"**

### Step 3: Configure Backend Project
```
Root Directory: Backend
Framework Preset: Other
Build Command: (leave empty)
Output Directory: (leave empty)
Install Command: npm install
```

### Step 4: Add Backend Environment Variables
Click **"Environment Variables"** and add these **ONE BY ONE**:

| Name | Value |
|------|-------|
| `MONGO_URI` | `mongodb+srv://Khwaish:User@user.ge237mp.mongodb.net/?retryWrites=true&w=majority&appName=User` |
| `PORT` | `5001` |
| `EMAIL_USER` | `khwaishgarg38@gmail.com` |
| `EMAIL_PASS` | `dfoz qnsi vswm tfyl` |
| `MY_EMAIL` | `khwaishgarg38@gmail.com` |
| `CLOUDINARY_CLOUD_NAME` | `dhcurnw60` |
| `CLOUDINARY_API_KEY` | `276883696179369` |
| `CLOUDINARY_API_SECRET` | `2InqbVqzeGP8PRhx7t5c6K4NS9M` |
| `FRONTEND_URL` | `http://localhost:5173` *(we'll update this later)* |

### Step 5: Deploy Backend
1. Click **"Deploy"**
2. Wait 1-2 minutes for deployment
3. **COPY YOUR BACKEND URL** (looks like: `https://project-1-backend-xxx.vercel.app`)
4. ⚠️ **IMPORTANT**: Save this URL somewhere - you'll need it!

### Step 6: Test Backend
Open in browser: `https://your-backend-url.vercel.app/api/projects`
- Should see JSON response (empty array `[]` is OK!)

---

## 🎨 PART 4: DEPLOY FRONTEND TO VERCEL

### Step 1: Import Frontend Project
1. Click **"Add New..."** → **"Project"** again
2. Find **same repository**: **`Khwaish007/Project-1`**
3. Click **"Import"** again

### Step 2: Configure Frontend Project
```
Root Directory: Frontend
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Step 3: Add Frontend Environment Variable
Click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `VITE_API_URL` | `https://your-backend-url.vercel.app` *(paste the backend URL you copied!)* |

### Step 4: Deploy Frontend
1. Click **"Deploy"**
2. Wait 2-3 minutes for deployment
3. **COPY YOUR FRONTEND URL** (looks like: `https://project-1-frontend-xxx.vercel.app`)

---

## 🔄 PART 5: LINK BACKEND TO FRONTEND

### Step 1: Update Backend Environment Variable
1. Go to Vercel Dashboard
2. Click on your **Backend project**
3. Go to **Settings** → **Environment Variables**
4. Find `FRONTEND_URL` variable
5. Click **"Edit"**
6. Replace value with: `https://your-frontend-url.vercel.app` (paste your frontend URL)
7. Click **"Save"**

### Step 2: Redeploy Backend
1. Go to **Deployments** tab
2. Click the **3 dots (...)** on the latest deployment
3. Click **"Redeploy"**
4. Confirm by clicking **"Redeploy"**

---

## ✅ PART 6: VERIFY DEPLOYMENT

### Test Backend
1. Open: `https://your-backend-url.vercel.app/api/projects`
2. Should see: `[]` or list of projects

### Test Frontend
1. Open: `https://your-frontend-url.vercel.app`
2. Should see your website fully functional!

### Test Image Upload
1. Go to project submission form
2. Try uploading an image
3. Should upload to Cloudinary successfully

### Test Contact Form
1. Fill out contact form
2. Submit
3. Check your email (`khwaishgarg38@gmail.com`)

---

## 🎯 QUICK REFERENCE

### Your Deployed URLs
```
Backend:  https://your-backend-url.vercel.app
Frontend: https://your-frontend-url.vercel.app
```

### Environment Variables Summary

**Backend (9 variables):**
- MONGO_URI
- PORT
- EMAIL_USER
- EMAIL_PASS
- MY_EMAIL
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- FRONTEND_URL

**Frontend (1 variable):**
- VITE_API_URL

---

## 🔧 TROUBLESHOOTING

### Issue: "Page not found (404) on reload"
**Fix:** Make sure Frontend has `vercel.json` with rewrites:
1. Check that `Frontend/vercel.json` exists
2. It should contain rewrites configuration for SPA routing
3. Redeploy frontend after adding the file

### Issue: "Images not loading from Cloudinary"
**Fix:** Check browser console for CORS errors and verify:
1. Backend environment variables have correct Cloudinary credentials
2. Backend CORS is configured to allow frontend domain
3. Test Cloudinary credentials by uploading manually on Cloudinary dashboard
4. Check Vercel Function Logs for any upload errors

### Issue: "Image upload fails"
**Fix:** Multiple possible causes:
1. **CORS Error**: Backend CORS must allow your frontend domain
2. **Cloudinary Credentials**: Verify all 3 env vars are correct in Vercel
3. **File Size**: Free tier has limits (10MB default)
4. **Check Logs**: Go to Backend project → Deployments → Function Logs

### Issue: "Application Error"
**Fix:** Check Vercel logs:
1. Go to project → Deployments
2. Click latest deployment
3. Check "Build Logs" and "Function Logs"

### Issue: "Cannot connect to backend"
**Fix:** Verify `VITE_API_URL` environment variable:
1. Frontend Settings → Environment Variables
2. Make sure it points to correct backend URL
3. Redeploy frontend

### Issue: "CORS Error"
**Fix:** Update `FRONTEND_URL` in backend:
1. Backend Settings → Environment Variables
2. Update `FRONTEND_URL` to match frontend URL
3. Redeploy backend

### Issue: "Image upload fails"
**Fix:** Check Cloudinary credentials:
1. Verify all 3 Cloudinary env variables are correct
2. Login to Cloudinary dashboard to confirm account is active

---

## 🔄 HOW TO DEPLOY UPDATES

### When you make code changes:

1. **Save your files**
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. **Vercel auto-deploys!** (usually takes 1-2 minutes)
4. Check deployment status in Vercel dashboard

---

## 📱 CUSTOM DOMAIN (Optional)

### Add Your Own Domain:
1. Go to project Settings → Domains
2. Enter your domain name
3. Follow DNS configuration steps
4. Wait for DNS propagation (5-60 minutes)

---

## 🎉 SUCCESS CHECKLIST

- [ ] Backend deployed successfully
- [ ] Frontend deployed successfully
- [ ] Environment variables configured
- [ ] CORS working (no errors in browser console)
- [ ] Image upload works
- [ ] Contact form sends emails
- [ ] Project submission works
- [ ] Portfolio displays correctly
- [ ] Admin panel accessible

---

## 💡 PRO TIPS

1. **Always test locally first** before deploying
2. **Use environment variables** for sensitive data
3. **Check Vercel logs** if something breaks
4. **Monitor usage** in Vercel dashboard (free tier limits)
5. **Keep `.env` file secret** - never commit to GitHub!

---

## 🆘 NEED HELP?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Check your email** for deployment notifications from Vercel

---

**Last Updated:** December 22, 2025
**Your Project:** Khwaish007/Project-1
