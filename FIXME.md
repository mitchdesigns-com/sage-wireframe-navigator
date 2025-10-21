## 🚧 Follow-up Tasks

| Task                                                           | Description                                                                                                                                                                                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Next.js 15 Typings**                                         | Upgrade component props to leverage strict types introduced in Next.js 15 (`@types/next` ≥15).                                                                                                                                                   |
| **Console Warnings**                                           |                                                                                                                                                                                                                                                  |
| &nbsp;&nbsp;&nbsp;`rightIcon` prop                             | React warns: _“React does not recognize the `rightIcon` prop on a DOM element.”_<br>• If intentional, rename to lowercase `righticon` so it’s treated as a data-attribute.<br>• Otherwise, strip it before spreading props onto native elements. |
| &nbsp;&nbsp;&nbsp;`document.implementation.createHTMLDocument` | Feature unsupported in current browser bundle.<br>• Add runtime check (`typeof document !== 'undefined' && document.implementation?.createHTMLDocument`) or polyfill.<br>• Consider server-only parsing to avoid client-side fallback.           |
| **Source Location**                                            | `src/components/sections/HeroWithVideo.tsx:36:28`                                                                                                                                                                                                |
| **Snippet**                                                    | `tsx<br>const parsedTitle = parse(title \|\| '', {<br>&nbsp;&nbsp;…<br>});<br>`                                                                                                                                                                  |

------------------------------------------ |

### Environment Reset & Fresh Install

1. **Clean slate**

   ```bash
   rm -rf node_modules package-lock.json
   ```

2. **Use Node.js 22**  
   Ensure the `.nvmrc` file contains `22` (already present), then:

   ```bash
   nvm use --lts          # switches to Node.js 22
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
