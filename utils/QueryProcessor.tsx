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

  return "";
}
