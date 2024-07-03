var tabLinks=document.getElementsByClassName("tab-links");
var tabContents=document.getElementsByClassName("tab-contents");
//var sidemenu=documnet.getElementById("sidemenu");

function opentab(tabName){
    for(tabLink of tabLinks){
         tabLink.classList.remove("active-link");
   }
     for(tabContent of tabContents){
         tabContent.classList.remove("active-tab");
   }
event.currentTarget.classList.add("active-link");
document.getElementById(tabName).classList.add("active-tab");
}

function openmenu(){
    document.getElementById("sidemenu").style.right="0";
}
function closemenu(){
    document.getElementById("sidemenu").style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzxqlu1eoFbJEOHbnNFhiyFAYXVnZsA-PzJQKku8k8_fm4VKrUouEgKtfmqOdOl1Yz7/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg=document.getElementById("msg");
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML="Message Sent successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
