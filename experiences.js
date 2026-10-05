/* ==========================================================================
   experiences.js  —  the ONLY file you need to edit to add or change content.

   HOW TO ADD A NEW EXPERIENCE
   1. Put the photo/video file (and a small thumbnail picture) in the "assets" folder.
   2. Copy one of the blocks below, paste it at the end of the list (before the "]"),
      add a comma after the previous block, and change the words and file names.
   3. Save. The carousel updates by itself.

   FIELDS
   id           a short unique name, no spaces (e.g. "river-dawn")
   title        shown on the carousel and the info screen
   description  one or two short sentences, shown before the experience starts
   type         "photo"  = a still 360 picture (plays for `duration` seconds)
                "video"  = a 360 video (plays to the end, then moves to the exit screen)
   src          the file, e.g. "assets/river-dawn.mp4"
   thumbnail    small picture for the carousel, e.g. "assets/thumb-river-dawn.jpg"
                (optional - leave it out and a plain colored card is shown)
   duration     photos only: how many seconds to stay in the scene
   audio        photos only (optional): a sound file to play, e.g. "assets/river.mp3"
   safetyNote   optional extra line shown on the safety screen
                (e.g. "This scene includes a view over a cliff edge.")
   ========================================================================== */

window.EXPERIENCES = [
  {
    id: "forest",
    title: "Forest Morning",
    description: "Stand quietly among tall trees as the morning light comes through.",
    type: "photo",
    src: "assets/placeholder-forest.jpg",
    thumbnail: "assets/thumb-forest.jpg",
    duration: 90
  },
  {
    id: "lake",
    title: "Quiet Lake",
    description: "Rest beside still water and listen to the world slow down.",
    type: "photo",
    src: "assets/placeholder-lake.jpg",
    thumbnail: "assets/thumb-lake.jpg",
    duration: 90
  },
  {
    id: "meadow",
    title: "Open Meadow",
    description: "Look out across tall grass moving gently in the wind.",
    type: "photo",
    src: "assets/placeholder-meadow.jpg",
    thumbnail: "assets/thumb-meadow.jpg",
    duration: 90
    // Example of a video experience (remove the // marks and fill in your file names):
    // type: "video",
    // src: "assets/my-video.mp4",
  }
];

/* ==========================================================================
   Wording used on the screens. Edit the text between the quotation marks.
   (Placeholder text - Táhila should review the safety wording before real use.)
   ========================================================================== */
window.APP_CONFIG = {
  appTitle: "Welcome to Nature Immersion",
  welcomeLine: "Take a moment to set things up so you are comfortable.",

  safetyIntro: "This experience may not be suitable for anyone with the following:",
  safetyConditions: [
    "Dizziness, vertigo, or a tendency toward motion sickness",
    "A fear of heights",
    "A history of seizures",
    "Feeling unwell today"
  ],
  safetyQuestion: "Does any of this apply to you?",

  // How long the Pause / Finish buttons stay on screen before hiding
  controlsAutoHideSeconds: 8,

  // When a person taps "Exit the app" this goodbye is shown
  goodbye: "Thank you for visiting. You may now take off the headset."
};
