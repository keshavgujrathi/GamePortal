# Guidelines

1. No one should change any file, folder that they are not assigned to.

2. Make your own branches in github repo, and commit to them. Make sure there are no merge conflicts. (i.e) Avoid making any changes to a file which are common to everyone.

3. Maintain proper commit message:

   fix: dashboard popup
   feat: Navbar
   chore: Initial files

4. Website will be made in ReactJS, as this is a static website, so mostly useState will be the only hook that you will need. Other than that it is mostly UI development.

5. While developing your design, keep in mind that write code in such a way, that it would be easier to make it responsive as well.

6. If you are importing any images, in the website. Don't use plain png or jpeg. Convert the images to "WEBP" format, for better performance.

7. Website will be made in ReactJS, TailwindCSS. Maintain a proper folder structure.

   #Basic Folder Structure
   -> sections: In this folder keep the entire Section file. Like if you are making the main Hero section, then make a new file called Hero.jsx, and write the code there.

   -> components: In this folder keep the small small components you make, like Button, Cards, etc. If in the design the same things are getting used at someplace again. Make sure to make it as a component so it is reusable.
