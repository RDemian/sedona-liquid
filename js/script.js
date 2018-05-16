function initMap() {
  var uluru = {
    lat: 34.87,
    lng: -111.763
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

/*var searchBtn = document.querySelector(".btn-search");*/
var searchBtn = document.getElementById("btn-search");
var searchForm = document.querySelector(".search-form");
var findBtn = document.querySelector(".btn-find");
var fieldDateIn = document.getElementById("in-date");
var fieldDateOut = document.getElementById("out-date");
var fieldCountAdult = document.getElementById("adult-count");
var fieldCountChildren = document.getElementById("children-count");


searchForm.classList.add("search-form-hide");

searchBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("search-form-hide");
  if (searchForm.classList.contains("search-form-bounce")) {
    searchForm.classList.remove("search-form-bounce");
  }
  fieldDate.focus();
});

searchForm.addEventListener("submit", function (evt) {
  if (!fieldDateIn.value || !fieldDateOut.value || !fieldCountAdult.value || !fieldCountChildren.value) {
    evt.preventDefault();
    searchForm.classList.remove("search-form-bounce");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-form-bounce");
  }
});