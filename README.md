# Pilot-Prep-Academy

<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Create `.env.local` (this file is gitignored). You can start from `env.example`:

```bash
cp env.example .env.local
```

3. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key:

```bash
echo "GEMINI_API_KEY=YOUR_KEY_HERE" > .env.local
```

4. (Optional) Set up Supabase:
   - Create a project in Supabase
   - In Supabase dashboard → **Project Settings → API**, copy:
     - **Project URL** → `VITE_SUPABASE_URL`
     - **anon public key** → `VITE_SUPABASE_ANON_KEY`
   - Add both values to `.env.local` (see `env.example`)

5. Run the app:
   `npm run dev`
