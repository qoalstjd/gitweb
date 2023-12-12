window.onload = loadBookmarks;

function addBookmark() {
  const inputs = [
    "urlInput",
    "titleInput",
    "descriptionInput",
    "categoryInput",
    "dateInput",
  ];
  const values = inputs.reduce((acc, inputId) => {
    const input = document.getElementById(inputId);
    acc[inputId.replace("Input", "")] = input.value;
    input.value = "";
    return acc;
  }, {});

  if (values.url && values.title) {
    saveBookmarkToJson({ ...values });
    loadBookmarks();
  }
}

function saveBookmarkToJson(bookmark) {
  fetch("bookmarks.json")
    .then((response) => response.json())
    .then((bookmarks) => {
      bookmarks.push(bookmark);
      const jsonContent = JSON.stringify(bookmarks, null, 2);
      const blob = new Blob([jsonContent], { type: "application/json" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "bookmarks.json";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
}

function loadBookmarks() {
  fetch("bookmarks.json")
    .then((response) => response.json())
    .then((bookmarks) => {
      displayBookmarksByCategory("All", bookmarks);
      displayCategoryTabs(bookmarks);
    })
    .catch((error) => console.error("Error loading bookmarks:", error));
}

function displayBookmarksByCategory(category, bookmarks) {
  const filteredBookmarks =
    category === "All"
      ? bookmarks
      : bookmarks.filter((bookmark) =>
          category ? bookmark.category === category : !bookmark.category
        );

  const bookmarkInfo = document.getElementById("bookmarkInfo");
  bookmarkInfo.innerHTML = "";

  filteredBookmarks.forEach((bookmark) => {
    const bookmarkContainer = document.createElement("a");
    bookmarkContainer.className = "bookmarkContainer";
    bookmarkContainer.href = bookmark.url;
    bookmarkContainer.target = "_blank";

    ["title", "url", "description", "category", "date_added"].forEach(
      (field) => {
        const element = document.createElement("p");
        element.textContent = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        }: ${bookmark[field] || "없음"}`;
        bookmarkContainer.appendChild(element);
      }
    );

    bookmarkInfo.appendChild(bookmarkContainer);
  });
}

function displayCategoryTabs(bookmarks) {
  const categories = [
    "All",
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
