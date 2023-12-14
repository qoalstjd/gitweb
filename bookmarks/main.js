window.onload = loadBookmarks;

function loadBookmarks() {
  fetch("bookmarks.json")
    .then((response) => response.json())
    .then((bookmarks) => {
      displayBookmarksByCategory("all", bookmarks);
      displayCategoryTabs(bookmarks);
    })
    .catch((error) => console.error("Error loading bookmarks:", error));
}

function displayBookmarksByCategory(category, bookmarks) {
  const filteredBookmarks =
    category === "all"
      ? bookmarks
      : bookmarks.filter((bookmark) =>
          category ? bookmark.category === category : !bookmark.category
        );

  const bookmarkInfo = document.getElementById("bookmarkInfo");
  bookmarkInfo.innerHTML = "";

  filteredBookmarks.forEach((bookmark) => {
    const bookmarkContainer = document.createElement("a");
    bookmarkContainer.classList.add(bookmark.category);
    bookmarkContainer.href = bookmark.url;
    bookmarkContainer.target = "_blank";

    ["title", "description", "date_added"].forEach((field) => {
      const element = document.createElement("p");
      element.classList.add(field);
      element.textContent = `${bookmark[field] || "없음"}`;
      bookmarkContainer.appendChild(element);
    });

    bookmarkInfo.appendChild(bookmarkContainer);
  });
}

function displayCategoryTabs(bookmarks) {
  const categories = [
    "all",
    ...new Set(bookmarks.map((bookmark) => bookmark.category).filter(Boolean)),
  ];
  const categoryTabs = document.getElementById("categoryTabs");
  categoryTabs.innerHTML = "";

  categories.forEach((category) => {
    const tab = document.createElement("button");
    tab.textContent = category;
    tab.onclick = () => displayBookmarksByCategory(category, bookmarks);
    categoryTabs.appendChild(tab);
  });
}
