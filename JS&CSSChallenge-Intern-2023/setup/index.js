
  //Loading button

let cardLayout = document.querySelector('.card-container');
let loadMoreButton = document.getElementById('load-more-button');
let initialItems = 0;
let loadItems = 4;
let nextItems;

  fetch('../data.json')
    .then(response => response.json())
    .then(data => {
      nextItems = data.slice(initialItems, initialItems + loadItems);
      
      
      if(nextItems==0){
        loadMoreButton.style.display='none';
      }
        nextItems = data.slice(initialItems, initialItems + loadItems);
        console.log('nextItems value:', nextItems.length)
      initialItems += loadItems;

      nextItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        let socialMedia = '';
        if (item.source_type === 'facebook') {
          socialMedia = '<img src="../icons/facebook.svg" alt="Facebook">';
        } else if (item.source_type === 'instagram') {
          socialMedia = '<img src="../icons/instagram-logo.svg" alt="Twitter">';
        }
       
        card.innerHTML = `
          <section class="card-heading">
            <div class="card-avatar">
              <img src="${item.profile_image}"  alt="Avatar">
            </div>
            <div class="card-details"">
              <div class="title" >${item.name}</div>
              <div class="date">${item.date}</div>
            </div>
            <div class="social-media-icon">
              <a href="${item.source_link}">${socialMedia}</a>
            </div>
          </section>
          <div class="card-image">
            <img src="${item.image}" alt="Card Image">
          </div>
          <div class="card-description">${item.caption}</div>
          <hr/>
          <div class="card-footer">
              <img class="heart" src="../icons/heart.svg"/>
              <div class="likes">
                  ${item.likes}
              </div>
          </div>
        `;

        cardLayout.appendChild(card);

        const heartIcon = card.querySelector('.heart');
        const likesCount = card.querySelector('.likes');

        heartIcon.addEventListener('click', () => {
          heartIcon.classList.toggle('clickedHeart');

          //incrementing likes
          if (heartIcon.classList.contains('clickedHeart')) {
            likesCount.innerText = parseInt(likesCount.innerText) + 1;
          } else {
            likesCount.innerText = parseInt(likesCount.innerText) - 1;
          }

          console.log("heart clicked");
        });
      });
    })
    .catch(error => console.log(error))
   

    loadMoreButton.addEventListener('click', () => {
      fetch('../data.json')
        .then(response => response.json())
        .then(data => {
          var nextItems = data.slice(initialItems, initialItems + loadItems);
          
    
          if(nextItems==0){
            loadMoreButton.style.display='none';
          }
            nextItems = data.slice(initialItems, initialItems + loadItems);
            
          initialItems += loadItems;
          console.log('nextItems value:', nextItems.length)
          nextItems.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
    
            let socialMedia = '';
            if (item.source_type === 'facebook') {
              socialMedia = '<img src="../icons/facebook.svg" alt="Facebook">';
            } else if (item.source_type === 'instagram') {
              socialMedia = '<img src="../icons/instagram-logo.svg" alt="Twitter">';
            }
    
            card.innerHTML = `
              <section class="card-heading">
                <div class="card-avatar">
                  <img src="${item.profile_image}"  alt="Avatar">
                </div>
                <div class="card-details"">
                  <div class="title" >${item.name}</div>
                  <div class="date">${item.date}</div>
                </div>
                <div class="social-media-icon">
                  ${socialMedia}
                </div>
              </section>
              <div class="card-image">
                <img src="${item.image}" alt="Card Image">
              </div>
              <div class="card-description">${item.caption}</div>
              <hr/>
              <div class="card-footer">
                  <img class="heart" src="../icons/heart.svg"/>
                  <div class="likes">
                      ${item.likes}
                  </div>
              </div>
            `;
            cardLayout.appendChild(card);
    
            const heartIcon = card.querySelector('.heart');
            const likesCount = card.querySelector('.likes');
    
            heartIcon.addEventListener('click', () => {
              heartIcon.classList.toggle('clickedHeart');
    
              if (heartIcon.classList.contains('clickedHeart')) {
                likesCount.innerText = parseInt(likesCount.innerText) + 1;
              } else {
                likesCount.innerText = parseInt(likesCount.innerText) - 1;
              }
    
              console.log("heart clicked");
            });
          });
        })
        .catch(error => console.log(error));
    });
    

    




  //Dark mode Function

  function themeMode() {
    var lightTheme = document.getElementById("lightTheme");
    var darkTheme = document.getElementById("darkTheme");
    var cards = document.querySelectorAll(".card");
  
    if (lightTheme.checked) {
      console.log('Light mode');
      cards.forEach(card => {card.classList.remove('dark-mode')
          card.style.backgroundColor='';
      card.style.color='black';
    });

    }
  
    if (darkTheme.checked) {
      console.log('Dark mode');
      cards.forEach(card => {card.classList.add('dark-mode')
    card.style.backgroundColor='';
      card.style.color='white';
    
    }  
      );
      
    }
  }

  //Changing Background Function
  function changeBackgroundColor() {

    let colorInput=document.getElementById("cardBackgroundColor").value;
    let cards=document.querySelectorAll(".card");

    if (colorInput.charAt(0) !== '#') {
        alert('Error: Color should start with #');
        return;
      }

    cards.forEach(card=>card.style.backgroundColor = colorInput)
    console.log("Color", colorInput);
  }

  //Changing Margin Function
  function changeMargin(){

    let marginInput=document.getElementById("cardSpaceBetween").value;
    let cards=document.querySelectorAll(".card");
    let isValid=marginInput.slice(-2);

    if(isValid!='px'){
      alert("Must be px");
    }
    else{
      cards.forEach(card=>card.style.margin = marginInput)
    }

  }

  //Filtering by Social Media Function

  filterBySocialMedia=()=>{
    let all=document.getElementById("all");
    let facebook=document.getElementById("facebook");
    let instagram=document.getElementById("instagram");
    let twitter=document.getElementById("twitter");


  }