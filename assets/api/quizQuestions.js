var quizQuestions = [
  {
      question: "What franchise would you rather play a game from?",
      answers: [
          {
              type: "Microsoft",
              content: "Halo"
          },
          {
              type: "Nintendo",
              content: "Pokemon"
          },
          {
              type: "Sony",
              content: "Uncharted"
          }
      ],
      renderer: "MultiText"
  },
  {
      question: "What is your email ?",
      answers: [
          {
              type: "input",
              content: "email"
          }
      ],
      renderer: "InputText"
  },
  {
      question: "Which of these racing franchises would you prefer to play a game from?",
      answers: [
          {
              type: "Microsoft",
              content: "Forza"
          },
          {
              type: "Nintendo",
              content: "Mario Kart"
          },
          {
              type: "Sony",
              content: "Gran Turismo"
          }
      ],
      renderer: "MultiText"
  },
  {
      question: "Which of these games do you think is best?",
      answers: [
          {
              type: "Microsoft",
              content: "BioShock"
          },
          {
              type: "Nintendo",
              content: "The Legend of Zelda: Ocarina of Time"
          },
          {
              type: "Sony",
              content: "Final Fantasy VII"
          }
      ],
      renderer: "MultiText"
  },
  {
      question: "What console would you prefer to own?",
      answers: [
          {
              type: "Microsoft",
              content: "X-Box One"
          },
          {
              type: "Nintendo",
              content: "Wii U"
          },
          {
              type: "Sony",
              content: "Playstation 4"
          }
      ],
      renderer: "MultiText"
  }
];

export default quizQuestions;
