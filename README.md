# MenuTube for macOS

Do you enjoy listening to YouTube's podcasts, audiobooks, interviews or anything else that doesn't require to focus on video? If yes, then MenuTube is for you! Put entire full functional YouTube website into your macOs's menu bar.
 
 Features:
 - Browse mobile YouTube version
 - Watch or listen to bazillion hours of content
 - Control media playback using macOS's functional keys on your keyboard!
 - Intuitive and simple UI
 - And more

### Build macOS application (darwin)

```bash
npm i
npm run build
```

#### Run

macOS

```bash
open ./builds/MenuTube-darwin-x64/MenuTube.app
```

#### Run dev

```bash
npm run dev
```

# https://red-nuclear-monkey.github.io/menutube/

### docs/ folder
 
Folder contains jekyll webapp


Go to `docs` folder

```
bundle install --path vendor/bundle
```

#### Run dev

```
bundle exec jekyll serve
```


### Build for distribution (MAS)

1. Open `package.json` and update version.
2. Go to `https://developer.apple.com/account/resources/profiles/list` and download `embeddedprovisionprofile.provisionprofile`. Store it inside `entitlements` folder.
3. Create certificates https://github.com/nwjs/nw.js/wiki/MAS%3A-Requesting-certificates + Developer ID Application certificate which is missing from the link.
4. Run `npm run dist`.
5. See `dist` folder for your builds.

This will build 2 targets according to `build` in `package.json`.  
