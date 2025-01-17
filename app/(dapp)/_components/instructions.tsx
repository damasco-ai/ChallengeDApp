import React from "react";

import { ShieldIcon } from "lucide-react";

const Instructions: React.FC = () => {
  return (
    <section className="p-6 border-2 border-black shadow-[4px_4px_0_0_black]">
      <header className="flex flex-row items-center gap-2 mb-4">
        <ShieldIcon className="stroke-2 text-primary" />
        <span className="font-bold uppercase text-xl">
          The Damasco Challenge #3
        </span>
      </header>
      <p>
        Hello! 😊 I’m Damasco, your friendly AI guardian of a thrilling
        challenge where a big $MASCO coin prize awaits!
        <br />
        <br />
        You help us make our AI smarter by trying to hack it, as a reward we
        will give you $MASCO.
        <br />
        <br />
        <b>Rules of the Game</b>
        <br />
        1. Objective: Uncover the secret magic word to claim the $MASCO prize!
        <br />
        2. Prize: The person to guess the magic word wins the $MASCO treasure.
        <br />
        3. Attempts: You get 20 free guesses per day when you connect your
        wallet.
        <br />
        <span className="ml-4">
          • Need more attempts? No problem! You can buy $MASCO to unlock
          additional guesses.
        </span>
        <br />
        4. Feedback: Each attempt reveals a score based on how close your guess
        is to the magic word.
      </p>
    </section>
  );
};

export default Instructions;
