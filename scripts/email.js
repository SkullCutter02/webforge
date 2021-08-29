import { Toast } from "./toast.js";

const errMsg = document.querySelector("#contact-us-form-err-msg");
const formBtn = document.querySelector("#contact-us-form-button");

document
  .querySelector(".contact-us-form")
  .addEventListener("submit", async (e) => {
    errMsg.innerHTML = "";
    formBtn.disabled = true;
    e.preventDefault();

    if (
      !e.target.name.value ||
      !e.target.email.value ||
      !e.target.message.value
    ) {
      errMsg.innerHTML = "Please enter all fields";
      formBtn.disabled = false;
      return;
    }

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_i431z9z",
        template_id: "template_my67e6n",
        user_id: "user_T4JvjEK9hRkJhuh75F1iy",
        template_params: {
          email: e.target.email.value,
          name: e.target.name.value,
          message: e.target.message.value.replace(/\r\n|\r|\n/g, "<br>"),
        },
      }),
    });

    if (!res.ok) {
      errMsg.innerHTML = "Something went wrong. Please try again";
    } else {
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.message.value = "";

      new Toast({
        message: "Your message has been sent!",
        type: "success",
      });
    }

    formBtn.disabled = false;
  });
