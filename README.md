# https://sharonboris.com
## By: Blake Boris
My mom's website made with [Jekyll](https://jbuyndekyllrb.com/)

### How to build
bundle exec jekyll serve
Or optionally to host over local network
bundle exec jekyll serve --host=0.0.0.0

### How it works
the layout file containing the `<head>`, footer, and navbar is saved in `_layouts/`. All `.html` files starting with
```
---
layout: default
title: Title
css: [css, file, names, from, /css/, without, .scss]
js: [js, file, names, from, /script/, without, .js]
---
```
will be wrapped in it.<br>
*Note: variables can be left blank when not used*

> Be careful what file encoding you use. `UTF-8 with BOM` / `UTF 8 with signature` will NOT work. 
> I would suggest using `UTF-8` / `UTF-8 without signature`.
