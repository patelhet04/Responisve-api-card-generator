var counter;
function loadData(url) {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", url);
  ourRequest.onload = async () => {
    ourData = await JSON.parse(ourRequest.responseText);

    for (i = 0; i <= ourData.data.length; i++) {
      $(".data-cards").append(newCard(ourData.data[i]));
      counter++;
    }
  };

  ourRequest.send();
}

function newCard(data) {
  return `<div style='background-color: ${data.color}' class='card'>
  <p>${data.label}<span class='counter'style = "float:right;background-color:#ddd;font-size:13px;font-weight:300;color: ${data.color};border:1px solid white;border-radius:20px;width:73px;padding:0px 6%">${counter}/${ourData.data.length}</span></p>
  <h4>${data.value}</h4>
</div>`;
}

function dashboardOne() {
  $(".card").remove();
  counter = 1;
  loadData("https://api.jsonbin.io/b/5f49347d4d8ce4111382d08d");
}

function dashboardTwo() {
  $(".card").remove();
  counter = 1;
  loadData("https://api.jsonbin.io/b/5f4933b7514ec5112d104c93");
}
$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
