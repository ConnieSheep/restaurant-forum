(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c50812"],{"73a3":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/restaurants/new"}},[t._v(" New Restaurant ")]),a("AdminRestaurantsTable")],1)},s=[],n=e("e04c"),i=function(){var t=this,a=t._self._c;return t.isLoading?a("Spinner"):a("table",{staticClass:"table"},[a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col",width:"300"}},[t._v("操作")])])]),a("tbody",t._l(t.restaurants,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(t._s(e.Category?e.Category.name:"未分類"))]),a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:e.id}}}},[t._v("Show")]),a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant-edit",params:{id:e.id}}}},[t._v("Edit")]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteRestaurant(e.id)}}},[t._v(" Delete ")])],1)])})),0)])},u=[],o=(e("d9e2"),e("be6c")),c=e("2fa3"),d=e("2375"),l={components:{Spinner:d["a"]},data(){return{restaurants:[],isLoading:!0}},created(){this.fetchRestaurants()},methods:{async fetchRestaurants(){try{this.isLoading=!0;const{data:t}=await o["a"].restaurants.get();if("error"===t.status)throw new Error(t.message);this.restaurants=t.restaurants,this.isLoading=!1}catch(t){this.isLoading=!1,console.log(t),c["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}},async deleteRestaurant(t){try{const{data:a}=await o["a"].restaurants.delete({restaurantId:t});if("error"===a.status)throw new Error(a.message);this.restaurants=this.restaurants.filter(a=>a.id!==t),c["a"].fire({icon:"success",title:"成功刪除餐廳"})}catch(a){console.log(a),c["a"].fire({icon:"error",title:"無法刪除餐廳，請稍後再試"})}}}},m=l,b=e("2877"),p=Object(b["a"])(m,i,u,!1,null,null,null),g=p.exports,h={components:{AdminNav:n["a"],AdminRestaurantsTable:g}},v=h,f=Object(b["a"])(v,r,s,!1,null,null,null);a["default"]=f.exports},be6c:function(t,a,e){"use strict";var r=e("2fa3");a["a"]={categories:{get(){return r["b"].get("/admin/categories")},create({name:t}){return r["b"].post("/admin/categories",{name:t})},update({categoryId:t,name:a}){return r["b"].put("/admin/categories/"+t,{name:a})},delete({categoryId:t}){return r["b"].delete("/admin/categories/"+t)}},restaurants:{create({formData:t}){return r["b"].post("/admin/restaurants",t)},get(){return r["b"].get("/admin/restaurants")},delete({restaurantId:t}){return r["b"].delete("/admin/restaurants/"+t)},getDetail({restaurantId:t}){return r["b"].get("/admin/restaurants/"+t)},update({restaurantId:t,formData:a}){return r["b"].put("/admin/restaurants/"+t,a)}},users:{get(){return r["b"].get("/admin/users")},update({userId:t,isAdmin:a}){return r["b"].put("/admin/users/"+t,{isAdmin:a})}}}},e04c:function(t,a,e){"use strict";var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},s=[],n=e("2877"),i={},u=Object(n["a"])(i,r,s,!1,null,null,null);a["a"]=u.exports}}]);
//# sourceMappingURL=chunk-71c50812.3a6b845d.js.map