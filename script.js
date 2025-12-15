function sendMessage() {
  if (
    name.value === "" ||
    email.value === "" ||
    message.value === ""
  ) {
    alert("Please fill all fields");
  } else {
    alert("Message sent successfully!");
  }
}
