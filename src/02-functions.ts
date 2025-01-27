// Existing imports and functions remain unchanged
import { Friend, Colleague } from './myTypes';
import { friends, colleagues } from "./01-basics";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

function allOlder(friends: Friend[]): string[] {
  return friends.map((friend) => {
    friend.age += 1; // Increment age by 1
    return `${friend.name} is now ${friend.age}`; // Return the updated string
  });
}

console.log(allOlder(friends));
console.log(older(friends[0]));

// Function to find the colleague with the highest extension number
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort((c1, c2) => c1.contact.extension - c2.contact.extension);
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

// Function to add a colleague with a new extension number
function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): void {
  // Find the highest current extension
  const highestExt = highestExtension(cs).contact.extension;

  // Add the new colleague
  cs.push({
    name,
    department,
    contact: {
      email,
      extension: highestExt + 1, // Increment the extension by 1
    },
  });
}

// Test the implementation
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
