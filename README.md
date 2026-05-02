# Mabel's GCSE Biology Tutor

AQA Separate Biology (8461) — interactive revision platform.

---

## Setting up on GitHub Pages (step by step)

### Step 1 — Create the repository

1. Go to **github.com** and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it: `mabel-gcse`
4. Set visibility to **Public** (required for free GitHub Pages)
5. Leave everything else as default
6. Click **Create repository**

---

### Step 2 — Upload the files

1. On the repository page, click **uploading an existing file** (or drag files in)
2. Upload **all files and folders** from this project, keeping the folder structure exactly as is:
   ```
   index.html
   css/style.css
   js/app.js
   js/lessons.js
   js/questions.js
   js/cards.js
   js/storage.js
   data/syllabus.json
   lessons/biology/*.json
   diagrams/biology/*.svg
   ```
3. Click **Commit changes**

> **Important:** GitHub's web uploader doesn't create folders automatically.
> Upload files inside each folder by navigating into it first, or use the GitHub Desktop app.

---

### Step 3 — Enable GitHub Pages

1. Go to your repository → **Settings** (top menu)
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **main**, folder to **/ (root)**
5. Click **Save**

---

### Step 4 — Get your URL

After 1-2 minutes, GitHub Pages will be live at:

```
https://YOUR-USERNAME.github.io/mabel-gcse/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

### Adding new lessons

1. Create a new JSON file in `lessons/biology/` following the existing format
2. Add the corresponding SVG diagram to `diagrams/biology/`
3. Add the subtopic entry to `data/syllabus.json`
4. Commit the files — the site updates automatically within seconds

---

## What's built

**Biology Paper 1 — fully covered:**
- B1: Cell Biology (9 subtopics)
- B2: Organisation (8 subtopics)
- B3: Infection & Response (8 subtopics)
- B4: Bioenergetics (7 subtopics)

**Features:**
- Pre-built lesson content (instant loading, no API wait)
- AI-generated practice questions (one API call per session)
- Checkpoint quizzes within lessons
- Error log and mastery tracker after every question session
- Spaced repetition card deck
- Learner profile that adapts question style to feedback
- Test prep with day-by-day revision plan
- Dashboard with progress tracking and scores
- Fully responsive — works on mobile
