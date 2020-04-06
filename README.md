# MenuTube for macOS

Do you enjoy listening to YouTube's podcasts, audiobooks, interviews or anything else that doesn't require to focus on video? If yes, then MenuTube is for you! Put entire full functional YouTube website into your macOs's menu bar.
 
 Features:
 - Browse mobile YouTube version
 - Watch or listen to bazillion hours of content
 - Control media playback using macOS's functional keys on your keyboard!
 - Intuitive and simple UI
 - And more

# Installation
```bash
brew cask install menutube
```
or download from release page https://github.com/edanchenkov/MenuTube/releases

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

# https://edanchenkov.github.io/MenuTube/

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
