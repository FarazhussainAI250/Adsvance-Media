# ADSVANCE MEDIA

## Vercel Deployment Steps

1. **GitHub pe push karo:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Vercel pe deploy karo:**
   - Vercel.com pe jao aur GitHub se login karo
   - "New Project" click karo
   - Apni repository select karo
   - "Environment Variables" section mein jao
   - Add karo: `GROQ_API_KEY` = `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`
   - "Deploy" button click karo

3. **Done!** Aapki site live ho jayegi 🚀

## Important
- `.env` file GitHub pe push NAHI hogi (gitignore mein hai)
- API key Vercel dashboard mein manually add karni hogi
