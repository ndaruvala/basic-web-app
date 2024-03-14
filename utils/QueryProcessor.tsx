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
  if (query.toLowerCase().includes("plus")) {
    let words = query.split(" ");
    let num1 = parseInt(words[2]);
    let num2 = parseInt(words[4].substring(0, words[4].length - 1));
    let sum = num1 + num2;
    return sum.toString();
  };
  if (query.toLowerCase().includes("following numbers is the largest:")) {
    let words = query.split(" ");
    let num1 = words[8];
    let num1Int = parseInt(num1.substring(0, num1.length - 1));
    let num2 = words[9];
    let num2Int = parseInt(num2.substring(0, num2.length - 1));
    let num3 = words[10];
    let num3Int = parseInt(num3.substring(0, num2.length - 1));
    let max = Math.max(num1Int, num2Int, num3Int);
    return max.toString();
  }
  if (query.toLowerCase().includes("multiplied by")) {
    let words = query.split(" ");
    let num1 = parseInt(words[2]);
    let num2 = parseInt(words[5].substring(0, words[5].length - 1));
    let sum = num1 * num2;
    return sum.toString();
  }
  if (query.toLowerCase().includes("minus")) {
    let words = query.split(" ");
    let num1 = parseInt(words[2]);
    let num2 = parseInt(words[4].substring(0, words[4].length - 1));
    let sum = num1 - num2;
    return sum.toString();
  };
  return "";
}
