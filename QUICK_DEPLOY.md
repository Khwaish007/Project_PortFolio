# ⚡ VERCEL QUICK DEPLOY - 5 Minutes

## 🎯 SUPER FAST GUIDE

### 1️⃣ PUSH TO GITHUB (1 min)
```bash
cd /home/khwaish-garg/Desktop/Project-1
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2️⃣ DEPLOY BACKEND (2 min)
1. [Vercel.com](https://vercel.com) → **Login with GitHub**
2. **Add New** → **Project** → Import **Khwaish007/Project-1**
3. **Root Directory**: `Backend`
4. **Framework**: Other
5. **Environment Variables** (copy-paste from Backend/.env):
   ```
   MONGO_URI=mongodb+srv://Khwaish:User@user.ge237mp.mongodb.net/?retryWrites=true&w=majority&appName=User
   PORT=5001
   EMAIL_USER=khwaishgarg38@gmail.com
   EMAIL_PASS=dfoz qnsi vswm tfyl
   MY_EMAIL=khwaishgarg38@gmail.com
   CLOUDINARY_CLOUD_NAME=dhcurnw60
   CLOUDINARY_API_KEY=276883696179369
   CLOUDINARY_API_SECRET=2InqbVqzeGP8PRhx7t5c6K4NS9M
   FRONTEND_URL=http://localhost:5173
   ```
6. **Deploy** → **Copy backend URL** 📋

### 3️⃣ DEPLOY FRONTEND (2 min)
1. **Add New** → **Project** → Import **Khwaish007/Project-1** again
2. **Root Directory**: `Frontend`
3. **Framework**: Vite
4. **Build Command**: `npm run build`
5. **Output**: `dist`
6. **Environment Variable**:
   ```
   VITE_API_URL=https://your-backend-url-here.vercel.app
   ```
   *(paste the backend URL you just copied!)*
7. **Deploy** → **Copy frontend URL** 📋

### 4️⃣ CONNECT THEM (30 sec)
1. Go to **Backend** project → **Settings** → **Environment Variables**
2. Edit `FRONTEND_URL` → Replace with your **frontend URL**
3. **Save** → Go to **Deployments** → **Redeploy** latest

### ✅ DONE!
Visit your frontend URL - your app is live! 🎉

---

## 🔗 WHAT YOU NEED

### From Backend/.env:
- All environment variables (MONGO_URI, EMAIL credentials, Cloudinary keys)

### To Remember:
- Backend URL (copy after first deploy)
- Frontend URL (copy after second deploy)
- Update FRONTEND_URL in backend with frontend URL

---

## 🆘 TROUBLESHOOTING ONE-LINERS

| Problem | Fix |
|---------|-----|
| App won't load | Check Vercel Function Logs |
| API calls fail | Update `VITE_API_URL` in frontend env vars |
| CORS errors | Update `FRONTEND_URL` in backend env vars |
| Upload fails | Verify Cloudinary credentials |

---

## 📝 REMEMBER

- **Root Directory** matters! Backend folder for backend, Frontend folder for frontend
- **Environment variables** must be added BEFORE deploying
- **Redeploy backend** after updating FRONTEND_URL
- Changes auto-deploy when you push to GitHub

---

**Full Guide:** See `VERCEL_DEPLOYMENT_GUIDE.md` for detailed instructions
