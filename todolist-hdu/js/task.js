function save() {
  var siteurl = document.getElementById("siteurl").value;
  var sitename = document.getElementById("sitename").value;
  localStorage.setItem(sitename, siteurl);
  alert("添加成功");
  loadAll();
}
function find() {
  var search_site = document.getElementById("search_site").value;
  var siteurl = localStorage.getItem(search_site);
  var find_result = document.getElementById("find_result");
  find_result.innerHTML = search_site + siteurl;
}
function loadAll() {
  var list = document.getElementById("list");
  if (localStorage.length > 0) {
    var result = "<table border='1'>";
    result += "<tr><td>tasks</td><td>状态(重新输入可以更改状态)</td></tr>";
    for (var i = 0; i < localStorage.length; i++) {
      var sitename = localStorage.key(i);
      var siteurl = localStorage.getItem(sitename);
      result += "<tr><td>" + sitename + "</td><td>" + siteurl + "</td></tr>";
    }
    result += "</table>";
    list.innerHTML = result;
  } else {
    list.innerHTML = "";
  }
}
function del_click() {
  localStorage.clear();
  alert("所有数据已清除");
}

function mOutNotcom() {
  var myStorage = window.localStorage;
  var list = document.getElementById("weizuowan");
  var len = myStorage.length;
  list.innerHTML = "";
  for (var i = 0; i < len; i++) {
    if (myStorage.getItem(myStorage.key(i)) == "未做完") {
      list.innerHTML += `<div>` + myStorage.key(i) + `</div>`;
    }
  }
}

function mOutCom() {
  var myStorage = window.localStorage;
  var list = document.getElementById("yizuowan");
  var len = myStorage.length;
  list.innerHTML = "";
  for (var i = 0; i < len; i++) {
    if (myStorage.getItem(myStorage.key(i)) == "已做完") {
      console.log(myStorage.key(i));
      list.innerHTML += `<div>` + myStorage.key(i) + `</div>`;
    }
  }
}
