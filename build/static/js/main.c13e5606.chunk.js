(this.webpackJsonpfoodys=this.webpackJsonpfoodys||[]).push([[0],{19:function(e,c,t){},21:function(e,c,t){"use strict";t.r(c);var i=t(1),s=t.n(i),n=t(12),a=t.n(n),r=t(14),l=t(2),j=t(11),d=t.n(j),o=(t(19),t(6)),h=t(7),b=t(3),p=t(9),u=t(8),O=t(0),x=function(e){Object(p.a)(t,e);var c=Object(u.a)(t);function t(e){var i;return Object(o.a)(this,t),(i=c.call(this,e)).state={searchedTerm:""},i.handleChange=i.handleChange.bind(Object(b.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(b.a)(i)),i}return Object(h.a)(t,[{key:"handleChange",value:function(e){this.setState({searchedTerm:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var c=this.state.searchedTerm;console.log(c),this.props.searchRecipes(c)}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{type:"text",value:this.state.searchedTerm,onChange:this.handleChange,placeholder:"Search.."}),Object(O.jsx)("input",{type:"submit",value:"Go!"})]})})}}]),t}(s.a.Component),m=Object(i.createContext)(),v=function(e){var c=e.children,t=Object(i.useState)([]),s=Object(l.a)(t,2),n=s[0],a=s[1],r=Object(i.useState)(),j=Object(l.a)(r,2),d=j[0],o=j[1];return Object(O.jsx)(m.Provider,{value:{question:[n,a],recipeStore:[d,o]},children:c})},g=function(e){var c=Object(i.useContext)(m).recipeStore,t=Object(l.a)(c,2),s=(t[0],t[1]),n=e.item,a=n.imageURL,r=n.name,j=n.user,d=n.userURL,o=n.like;return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("img",{src:a,className:"card-photo",onClick:function(c){e.handleClick(),s(n)}}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:r})}),Object(O.jsxs)("div",{children:["like:",o]}),Object(O.jsxs)("div",{className:"card-profile",children:[Object(O.jsx)("img",{src:d,className:"profile-card"}),Object(O.jsx)("p",{children:j})]})]})]})},f=function(e){var c=e.recipes;e.searchedRecipes;return console.log(c),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Popular recipes"}),Object(O.jsx)("div",{className:"cards",children:c.map((function(c,t){return Object(O.jsx)(g,{item:c,handleClick:e.handleClick},t)}))})]})},C=void 0,k=function(e){var c=Object(i.useContext)(m).recipeStore,t=Object(l.a)(c,2),s=t[0];t[1];return console.log("recipe",s),Object(O.jsxs)("div",{className:"post",children:[Object(O.jsxs)("div",{className:"post-one",children:[Object(O.jsx)("img",{className:"post-image",src:s.imageURL}),Object(O.jsx)("h2",{children:Object(O.jsx)("b",{children:s.name})}),Object(O.jsxs)("p",{children:["like: ",s.like]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"card-profile",children:[Object(O.jsx)("img",{src:s.userURL,className:"profile-card",onClick:function(e){C.props.handleClick()}}),Object(O.jsx)("p",{children:s.user})]}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:Object(O.jsx)("b",{children:"Method"})}),s.methods.map((function(e,c){if(e)return Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:Object(O.jsxs)("b",{children:["Step: ",c]})}),Object(O.jsx)("img",{src:e.imageURL}),Object(O.jsx)("p",{children:e.description}),Object(O.jsx)("br",{})]},c)}))]}),Object(O.jsxs)("div",{className:"post-two",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:Object(O.jsx)("b",{children:"Ingredients"})}),s.ingredients.map((function(e,c){return Object(O.jsx)("p",{children:e},c)}))]})]})},y=function(e){var c=Object(i.useContext)(m).recipeStore,t=Object(l.a)(c,2),s=(t[0],t[1]),n=e.item,a=n.imageURL,r=n.name,j=n.user,d=n.userURL,o=n.like;return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("img",{src:a,className:"card-photo",onClick:function(c){e.handleClick(),s(n)}}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:r})}),Object(O.jsxs)("div",{children:["like:",o]}),Object(O.jsxs)("div",{className:"card-profile",children:[Object(O.jsx)("img",{src:d,className:"profile-card"}),Object(O.jsx)("p",{children:j})]})]})]})},N=function(e){var c=[];return e.recipes.map((function(e){"Jack Ross"===e.user&&c.push(e)})),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsx)("img",{src:"https://www.the-happy-chef.com/assets/img/team/team-3.jpg",className:"profile-photo"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Jack Ross"}),Object(O.jsx)("div",{children:"Milan - Italy"}),Object(O.jsx)("p",{children:"I love making Italian food."}),Object(O.jsx)("p",{children:"Posts: 6"}),Object(O.jsx)("p",{children:"Followers: 120"}),Object(O.jsx)("p",{children:"Following: 68"})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"cards",children:c.map((function(c,t){return Object(O.jsx)(y,{item:c,handleClick:e.handleClick},t)}))})]})},S=t(13),R=function(e){Object(p.a)(t,e);var c=Object(u.a)(t);function t(e){var i;return Object(o.a)(this,t),(i=c.call(this,e)).state={recipe:"",imageURL:"",user:"",userURL:"",ingredients:"",cuisineType:"",mainIngredient:"",specialType:"",description:"",fileArr:[],imgArr:[]},i.handleChange=i.handleChange.bind(Object(b.a)(i)),i.postRecipe=i.postRecipe.bind(Object(b.a)(i)),i}return Object(h.a)(t,[{key:"handleChange",value:function(e){var c=e.target.name,t=e.target.value;this.setState(Object(S.a)({},c,t))}},{key:"postRecipe",value:function(e){e.preventDefault();var c=this.state,t=c.recipe,i=c.imageURL,s=c.ingredients,n=c.description;console.log(t,s,n);var a={name:t,imageURL:i,description:n};this.props.postRecipe(a)}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"create",children:[Object(O.jsxs)("div",{className:"create-editor",children:[Object(O.jsx)("h2",{children:"Add a Recipe"}),Object(O.jsxs)("form",{onSubmit:this.postRecipe,children:[Object(O.jsx)("h4",{children:"Step 1: Add a title"}),Object(O.jsx)("input",{className:"create-input",name:"recipe",type:"text",vaule:this.state.recipe,onChange:this.handleChange,placeholder:"Recipe Name"}),Object(O.jsx)("h4",{children:"Step 2: Upload the final image"}),Object(O.jsx)("input",{type:"file",id:"input",name:"picture",accept:"image/*"}),Object(O.jsx)("h4",{children:"Step 3: Pick the characteristics"}),Object(O.jsxs)("label",{children:["Pick a cuisine type:",Object(O.jsx)("br",{}),Object(O.jsxs)("select",{name:"cuisineType",value:this.state.cuisineType,onChange:this.handleChange,children:[Object(O.jsx)("option",{defaultValue:"pick a cuisine type"}),Object(O.jsx)("option",{value:"Italian",children:"Italian"}),Object(O.jsx)("option",{value:"American",children:"American"}),Object(O.jsx)("option",{value:"Mexican",children:"Mexican"}),Object(O.jsx)("option",{value:"Chinese",children:"Chinese"}),Object(O.jsx)("option",{value:"Japanese",children:"Japanese"}),Object(O.jsx)("option",{value:"German",children:"German"}),Object(O.jsx)("option",{value:"German",children:"Indian"})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:["Pick a main ingredient:",Object(O.jsx)("br",{}),Object(O.jsxs)("select",{name:"mainIngredient",value:this.state.mainIngredient,onChange:this.handleChange,children:[Object(O.jsx)("option",{defaultValue:"pick a main ingredient"}),Object(O.jsx)("option",{value:"Beef",children:"Beef"}),Object(O.jsx)("option",{value:"Chicken",children:"Chicken"}),Object(O.jsx)("option",{value:"Pork",children:"Pork"}),Object(O.jsx)("option",{value:"Fish",children:"Fish"}),Object(O.jsx)("option",{value:"Lamb",children:"Lamb"}),Object(O.jsx)("option",{value:"Egg",children:"Egg"}),Object(O.jsx)("option",{value:"Tofu",children:"Tofu"})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:["Pick a special type:",Object(O.jsx)("br",{}),Object(O.jsxs)("select",{name:"specialType",value:this.state.specialType,onChange:this.handleChange,children:[Object(O.jsx)("option",{defaultValue:"pick a special type"}),Object(O.jsx)("option",{value:"Health",children:"Health"}),Object(O.jsx)("option",{value:"Spicy",children:"Spicy"}),Object(O.jsx)("option",{value:"Sweet",children:"Sweet"}),Object(O.jsx)("option",{value:"Viggie",children:"Viggie"}),Object(O.jsx)("option",{value:"Family",children:"Family"}),Object(O.jsx)("option",{value:"Holiday",children:"Holiday"}),Object(O.jsx)("option",{value:"Creative",children:"Creative"})]})]}),Object(O.jsx)("h4",{children:"Step 4: Add ingredients"}),Object(O.jsx)("input",{className:"create-input",name:"ingredients",type:"text",vaule:this.state.ingredients,onChange:this.handleChange,placeholder:"Ingredients"}),Object(O.jsx)("h4",{children:"Step 5: Descript method step by step"}),Object(O.jsx)("h5",{children:"Upload a image"}),Object(O.jsx)("input",{type:"file",id:"input",name:"picture",accept:"image/*"}),Object(O.jsx)("h5",{children:"Add description"}),Object(O.jsx)("textarea",{className:"create-body-textarea",name:"description",vaule:this.state.description,onChange:this.handleChange,placeholder:"Method description"}),Object(O.jsx)("button",{className:"create-submit-button",type:"submit",children:"Save recipe"})]}),Object(O.jsx)("br",{})]}),Object(O.jsx)("div",{className:"create-preview"})]})}}]),t}(s.a.Component),w=function(){var e=Object(i.useState)(!1),c=Object(l.a)(e,2),t=c[0],s=c[1],n=Object(i.useState)("gallery"),a=Object(l.a)(n,2),j=a[0],o=a[1],h=Object(i.useState)([]),b=Object(l.a)(h,2),p=b[0],u=b[1],m=Object(i.useState)([]),v=Object(l.a)(m,2),g=v[0],C=v[1],y=Object(i.useState)(""),S=Object(l.a)(y,2);S[0],S[1];function w(){d.a.ajax({url:"/recipes",type:"GET"}).then((function(e){var c=e.recipes;u(Object(r.a)(c))})).then((function(){s({show:!0})}))}function L(e){d.a.ajax({url:"/recipes",type:"POST",data:e,success:function(e){return console.log(e)},error:function(e){return console.log(e)}}).done((function(){console.log("Submitted")}))}function T(e){o(e)}return Object(i.useEffect)((function(){w()}),[]),!1===t?Object(O.jsx)("div",{className:"loading",children:"Loading ..."}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)("span",{className:"logo",onClick:function(){w(),T("gallery")},children:"Foodys"}),Object(O.jsx)("div",{className:"search",children:Object(O.jsx)(x,{searchRecipes:function(e){for(var c=this.state.recipes,t=[],i=0;i<c.length;i++)""===e&&C({searchedRecipes:c}),c[i].name.toLowerCase().includes(e.toLowerCase())&&t.push(c[i]),C({searchedRecipes:t})}})}),Object(O.jsx)("span",{className:"gallery"===j?"nav-selected":"nav-unselected",onClick:function(){w(),T("gallery")},children:"See all Recipes"}),Object(O.jsx)("span",{className:"create"===j?"nav-selected":"nav-unselected",onClick:function(){return T("create")},children:"Add a Recipe"}),Object(O.jsx)("span",{className:"account"===j?"nav-selected":"nav-unselected",onClick:function(){return T("account")},children:Object(O.jsx)("div",{className:"card-profile",children:Object(O.jsx)("img",{src:"https://www.the-happy-chef.com/assets/img/team/team-3.jpg",className:"profile-nav"})})})]}),Object(O.jsx)("div",{className:"main",children:"gallery"===j?Object(O.jsx)(f,{handleClick:function(){T("recipeview")},recipes:p,searchedRecipes:g}):"account"===j?Object(O.jsx)(N,{handleClick:function(){T("recipeview")},recipes:p,searchedRecipes:g}):"create"===j?Object(O.jsx)(R,{recipes:p,postRecipe:L}):Object(O.jsx)(k,{handleClick:function(){T("account")},recipes:p,searchedRecipes:g})})]})};a.a.render(Object(O.jsx)(v,{children:Object(O.jsx)(w,{})}),document.getElementById("app"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c13e5606.chunk.js.map