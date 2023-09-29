// Code your solutions in this file
function writeCards(names, eventName) {
    const thankYouMessages = []; // Create an empty array to store the messages
  
    for (let i = 0; i < names.length; i++) {
      // Iterate through the input array
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message); // Add the message to the array
    }
  
    return thankYouMessages; // Return the array of messages
  }
  
  // Example usage:
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const messages = writeCards(names, eventName);
  
  console.log(messages);
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  