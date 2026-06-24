"use server";

export async function submitContact(formData: FormData) {
  const subject = formData.get("subject");
  const message = formData.get("message");

  console.log("Objet :", subject);
  console.log("Message :", message);
}