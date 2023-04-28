const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const description = document.querySelector("#post-desc").value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
      alert("Posted");
    } else {
      alert("Failed to create project");
    }
  }
};

document.querySelector("#create").addEventListener("click", newFormHandler);

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/food/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      console.log(error);
      alert("Failed to delete project");
    }
  }
};
document
  .querySelector("#delete-btn")
  .addEventListener("click", delButtonHandler);
