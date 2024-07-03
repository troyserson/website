### Overview

[Setup](#setup)
[Preview](#preview)
[Update](#update)

---

#### Setup

```bash
# Create local remote
git clone https://github.com/troyserson/website.git
cd website && code .
npm i

# Copy environment variables
cp .env.example .env
```

---

#### Preview

```bash
# http://localhost:3000
npm run dev

# npm run build
# npm run start
```

---

#### Update

```bash
# git add . && git commit -m "Initial commit" && git push -u origin main
ga && gc "New blog post" && gp
```
