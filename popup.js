document.getElementById("save").addEventListener("click", () => {
  const config = {
    ctrlKey: document.getElementById("ctrl").checked,
    altKey: document.getElementById("alt").checked,
    shiftKey: document.getElementById("shift").checked,
    key: document.getElementById("key").value
  };
  console.log(config);
});
