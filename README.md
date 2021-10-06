# Introduction

This project was made with two key libraries: draftjs and chakraui.

The WYSIWIG has some barebones features such a creating header, bolding, italicizing, and creating superscripts.
But the main focus of this project was to use entities as well as modals to create notes as well as links that
you can click on.

I do not plan on adding any more features to the editor, and would only do so if I were to implement it in another project.

Overall this project was a great learning experience and it took a lot of time to learn how draftjs manages its state as
well as how to interact with it. The biggest hiccup in the project was managing focus between the chakra models and
the editor. I'm happy with how it turned out, and I would use it as reference in the future.

There is a new library out that might be a good alternative to draftjs: Slate React. Draftjs is no longer maintained, so this
is a good alternative that also supports collaborative editing. I will try to use it in future projects.

# Use

Clone the repo and navigate to the frontend
`cd ./frontend/`

Install the dependencies using yarn
`yarn`

Run the development server
`yarn dev`

Open the link that the console prints into your browser (or click), and experiment try using the editor!
