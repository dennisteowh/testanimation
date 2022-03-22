# testanimation
This is a simple browser application that allows you to test simple animation strips.  

How To Use:

1. Upload your animation strip as an image file into the folder.
2. Open the "main.js" file using any text editor.
3. At the top of the script, you should see a section that lets you specify your image details.
   1. *height* refers to the height of your image in pixels.
   2. *width* refers to the width of your image in pixels.
   3. *frame* refers to the number of frames in your animation strip.
   4. *filename* refers to the filename of your image.
   5. *cyclerate* controls the speed of your animation. It represents the amount of delay between frame transitions. Increasing this number leads to slower animations while decreasing this number leads to faster animations (note: cyclerate must be a positive integer).
4. After modifying these specifications, you can save the "main.js" file and open the "index.html" file in your local browser.
5. The "move" button starts the animation while the "stop" button freezes the animation.
