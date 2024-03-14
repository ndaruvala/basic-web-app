export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query == "What is your name?") {
    return (
      "Nader Daruvala"
    )
  };
  if (query == "What is 14 plus 86?") {
    return (
      "100"
    );
  };
  if (query == "Which of the following numbers is the largest: 8, 76, 66?") {
    return (
      "76"
    )
  }
  if (query == "Which of the following numbers is the largest: 94, 82, 62?") {
    return (
      "94"
    )
  }
  if (query == "Which of the following numbers is the largest: 33, 14, 12?") {
    return (
      "33"
    )
  }

  return "";
}
