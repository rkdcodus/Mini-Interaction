const icons = [
  "fa-html5",
  "fa-css3-alt",
  "fa-js-square",
  "fa-react",
  "fa-node",
  "fa-python",
  "fa-git-alt",
  "fa-npm",
];

const row = document.querySelector(".row");

// 무한 스크롤 위해 배열 두 번 반복
[...icons, ...icons].forEach((name) => {
  const icon = document.createElement("i");
  icon.className = `fab ${name}`;
  row.appendChild(icon);
});
