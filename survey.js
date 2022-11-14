const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const survey = function () {
  let profile = {};
  rl.question("What's your name? Nicknames are also acceptable", (name) => {
    console.log(`Thank you for your valuable feedback: ${name}`);
    profile.name = name;

    rl.question("What's an activity you like doing?", (activity) => {
      console.log(`Thank you for your valuable feedback: ${activity}`);
      profile.activity = activity;

      rl.question("What do you listen to while doing that?", (music) => {
        console.log(`Thank you for your valuable feedback: ${music}`);
        profile.music = music;

        rl.question(
          "Which meal time is your favourite (eg: dinner, brunch, etc.)",
          (mealTime) => {
            console.log(`Thank you for your valuable feedback: ${mealTime}`);
            profile.mealTime = mealTime;

            rl.question(
              "What's your favourite thing to eat during that meal time?",
              (meal) => {
                console.log(`Thank you for your valuable feedback: ${meal}`);
                profile.meal = meal;

                rl.question(
                  "Which sport is your absolute favourite?",
                  (sport) => {
                    console.log(
                      `Thank you for your valuable feedback: ${sport}`
                    );
                    profile.sport = sport;

                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!",
                      (power) => {
                        console.log(
                          `Thank you for your valuable feedback: ${power}`
                        );
                        profile.power = power;

                        console.log((`${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.meal} for ${profile.mealTime}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.power}`));
                        rl.close();
                        // console.log(profile.name);
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  });
};
survey();

