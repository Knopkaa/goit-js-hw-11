import { getImagesByQuery } from "./js/pixabay-api";
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const query = event.target.elements["search-text"].value.trim() ?? "";

  if (query === "") {
    iziToast.error({
      title: "Error!",
      message: "Please enter a search query",
	  position: "topRight",
	  backgroundColor: "#f39c12", 
	});
	form.reset()
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: "Error!",
          message: "No images found",
		  position: "topRight",
		  backgroundColor: "#e74c3c",
		});
		form.reset()
        return;
      }

      createGallery(data.hits);
      form.reset();
    })
    .catch(() => {
      iziToast.error({
        title: "Error!",
        message: "Failed to load images",
        position: "topRight",
	  });
	  form.reset()
    })
    .finally(hideLoader);
});