# https://sharonboris.com
## By: Blake Boris
My mom's website made with [Jekyll](https://jekyllrb.com/)

### How to build
- `bundle install`
- `bundle exec jekyll serve`
Or optionally to host over local network
- `bundle exec jekyll serve --host=0.0.0.0`

### How it works
The layout lives in `_layouts/main.html` (`secondary` just wraps it) and pulls the `<head>`, navbar, and footer from `_includes/`.
Shared styles are in `css/site.scss` and shared behavior (mobile menu, scroll highlighting, fade-ins) is in `script/site.js`.
All `.html` files starting with
```
---
layout: main
title: Title
css: [css, file, names, from, /css/, without, .scss]
js: [js, file, names, from, /script/, without, .js]
---
```
will be wrapped in it.<br>
*Note: variables can be left blank when not used*

> Be careful what file encoding you use. `UTF-8 with BOM` / `UTF 8 with signature` will NOT work. 
> I would suggest using `UTF-8` / `UTF-8 without signature`.
