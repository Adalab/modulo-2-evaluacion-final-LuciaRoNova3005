function renderShows() {
  let listHtml = "";
  for (const titleshow of arrayShows) {
    const isFav = true;
    console.log(isFav);
    if (isFav) {
      listHtml += `<li  data-id="${titleshow.show.id}" class="js-shows favorite">`;
    } else {
      listHtml += `<li data-id="${titleshow.show.id}" class="js-shows">`;
    }
    if (titleshow.show.image !== null) {
      listHtml += `<img src="${titleshow.show.image.medium}" alt="">`;
    } else {
      listHtml += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="">`;
    }
    listHtml += `<h2>${titleshow.show.name}</h2>`;
    listHtml += `</li>`;
  }
  showcontainer.innerHTML = listHtml;
  addListenShow();
}
