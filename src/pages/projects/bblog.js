import Project from '../../components/project';

const BBlog = () => (
    <Project
        name="BBlog"
        url="https://github.com/PlGGS/bblog"
        desc="A fullstack blogging site built using the Leptos web framework in Rust."
        pic0='/bblog/bblog0.jpg'
        pic1='/bblog/bblog1.jpg'
        pic2='/bblog/bblog2.jpg'
        writeup={
            <div>
                <h3>Getting Rusty</h3>
                <p>Midway through my Master's program at DePaul University, one of my professors informed me of a brand new course teaching Rust, and I couldn't have been more excited. I had recently seen and heard tons of good things about the language. I had also learned about the downsides of garbage collection and reference counting while learning Swift, so I was ready for a paradigm shift. </p>
                <p>The course was extremely open ended, only grading you on your performance on the midterm and final exams. This allowed students to dive into the language as much or as little as they wanted to throughout the quarter. I loved this approach, because it allowed me to experiment while working on “homework” without the fear of points being taken off. It also allowed me to go at my own pace throughout the quarter. And by the time we got to the midterm, I was excited to go above and beyond what was required without fear of points being deducted. It was clear to me that our professor understood the learning process when it comes to programming better than so many others.</p>
                <p>As I explored the language throughout the quarter, I found it surprisingly easy and fun to develop in, but the lack of mature libraries made it harder and harder to picture myself creating anything substantial in the language for the time being. Early on in the quarter, I found a web framework for Rust called Rocket. I couldn't get it working for the life of me though, so I moved on and assumed I would create something off the web. That was, until I discovered Leptos, another web framework for Rust being actively developed and maintained by a flourishing open source community.</p>
                <p>In the weeks after the midterm, I started looking through the Leptos example projects in <a href="https://github.com/leptos-rs/leptos">the main Leptos repo on GitHub</a>. I found an example called <a href="https://github.com/leptos-rs/leptos/tree/main/examples/todo_app_sqlite">todo_app_sqlite</a> which contained a basic sqlite database. I designed the relations between the tables I would need for the app and then started thinking about user sessions. Initially, I thought it would be easy enough to implement user authentication myself with another crate called <a href="https://github.com/tokio-rs/axum">Axum</a>, but that wasn't the case with how new to Rust I still was. Luckily, after a bit of fiddling around with implementing it myself, I found another example in the Leptos repo called <a href="https://github.com/leptos-rs/leptos/tree/main/examples/session_auth_axum">session_auth_axum</a>. That allowed me to build upon an existing implementation of the Axum authentication.</p>
                <h3>I'm Just a Crustacean</h3>
                <p>After combining both examples, I had a pretty good foundation for building a blog app! I quickly got to work on a unified navigation bar and some of the initial designs for the different pages within the application. However, I quickly realized that a page refresh would sometimes cause components to render twice. After a bit more tinkering, I opened <a href="https://github.com/leptos-rs/leptos/issues/1097">an issue</a> on the main Leptos repo to get help addressing the problem. Within just 48 hours, the creator of Leptos addressed the problem and pushed a fix! This was extremely reinvigorating. I now knew I had support if I had any other issues throughout the development of BBlog and boy would I.</p>
                <p>Less than a week later, I ran into another problem with nesting components. Once again, the issue was tied to refreshing the page. After days of troubleshooting and trying to work around it, I finally opened <a href="https://github.com/leptos-rs/leptos/issues/1156">another issue</a> on the Leptos repo. Once again, after responding within just 24 hours this time, the creator of Leptos resolved the issue in less than three days. He even thanked me for posting the issue, as he had run into it himself in his own app recently as well! Soon after, I realized we were required to document our projects before submitting them as well. I was making good progress, so I decided to go through everything and fully document my project up until that point. In doing so, I came across <a href="https://github.com/leptos-rs/leptos/issues/1163">another issue</a> with documenting server functions which was easily resolved as well.</p>
                <p>Once I had each and every one of those issues resolved, I began finalizing the user stories such as posting blog posts and saving drafts. I also moved the documentation to a separate branch so as to not slow down developer interactions with the repo. I came up with <a href="https://github.com/PlGGS/bblog/blob/gh-pages/gen-and-push-docs-to-gh-pages.sh">a simple shell script</a> for automatically generating the docs in the gh-pages branch of the repo.</p>
                <p>When all was said and done and the due date had arrived, I was a little sad I didn't have a chance to stylize the app as much as I had originally hoped. But the functionality was there! Users can create accounts, sign in and out, and even save and post blog posts! All without any doubly rendered components or other minor visual bugs. And for those wanting to contribute or build off of my work, the documentation was complete and hosted at <a href="https://bblog.blakeboris.com">bblog.blakeboris.com</a>. There was definitely still more I could do, but after picking up Rust just under two months before, I was very happy with what I had accomplished!</p>
            </div>
        }
    />
);

export default BBlog;