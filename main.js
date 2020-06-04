
// global def 

let list = document.getElementById("list");

async function getUserAsync() 
{
  let response = await fetch(`https://api.github.com/users/MOhammedRiaad/repos`);
  let data = await response.json()
  return data;
}

getUserAsync()
  .then(data => {
    list.innerHTML='';
    list.insertAdjacentHTML('beforeend',`<div class="row featured-entries-col featured-entries-logo">`)
    let myrepo = data.filter(x=> x.fork != true)

    Array.from(myrepo).forEach(element => {

      
      list.firstChild.insertAdjacentHTML('beforeend',`
      
      <div class="single-list col-sm-4 col-md-4 column">
      <div class="single-item init-animate zoomIn" style="visibility: visible; animation-name: zoomIn;">
          <div class="icon clearfix">
              <a href="http://www.mohamedriaad.me/web-design/" class="all-link"> <i class="fa fa-paint-brush"></i>
              </a> </div>
          <h3 class="title">
              <a href="http://www.mohamedriaad.me/web-design/" class="all-link">${element.name}</a> </h3>
          <div class="content">
              <div class="details">
                  <p>${(element.description != null ?  element.description   : "No description yet")}</p>
              </div>
          </div>
      </div>
  </div>
      `)
    })
    list.insertAdjacentHTML('afterend',`</div>`)

  }


    );
