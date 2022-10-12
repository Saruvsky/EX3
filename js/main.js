//Sara Pereira up201906821

//Header variables
let wideText = document.querySelector("#wide");
let buttonDecrease = document.querySelector("#decrease");
let buttonIncrease = document.querySelector("#increase");

//Setting base size of text and weight
let textSize = 100;
let textWeight = 400;

//Increase button
buttonIncrease.addEventListener("click", function onclick(event){
    //Adding +10pt to text size everytime we click
    textSize = textSize + 10;
    wideText.style.fontSize = textSize + "pt";

    //Adding +100 to text weight everytime we click
    textWeight = textWeight + 100;
    wideText.style.fontWeight = textWeight;

    //Smoother transition with 1s duration
    wideText.style.transition = 1000 + "ms";

    //Disable button everytime fontWeight is > 700
    //fontWeight is an "easier" property to manage because it's value is numeric.
    if(wideText.style.fontWeight > 800){
        buttonIncrease.disabled = true;
        alert(("Thank you for widening Putin!"));
    }
});

buttonDecrease.addEventListener("click", function onclick(event){
    textSize = textSize - 10;
    wideText.style.fontSize = textSize + "pt";

    textWeight = textWeight - 100;
    wideText.style.fontWeight = textWeight;
    wideText.style.transition = 1000 + "ms";

    //Disable button everytime fontWeight is > 100
    if(wideText.style.fontWeight == 200){
        alert(("I'm warning you, do not compress Putin any longer!"));
    }
    
    //After warning, redirect to meme
    if(wideText.style.fontWeight == 100){
        alert(("I warned you. Now fear ferocious Wide Putin!"));
        location.href = "https://www.youtube.com/watch?v=VQ7lKPSUc2g";
        buttonDecrease.disabled = true;
    }
});

//Second Paragraph
let namePrompt = document.querySelector("#insertName");

namePrompt.addEventListener("click", function onclick(event){
    let name = prompt("What's your name?");

    //No matter the answer, wide putin will appear
    let nameTroll = document.querySelector("#nameTroll");
    
    //The button will disappear after prompt
    namePrompt.style.display = "none";

    //Putin gif will appear after prompt disappears
    nameTroll.style.display = "block";
    
    let nameTrollScreenDecrease = document.querySelector("#nameTrollScreenDecrease");

    //If the screen size is < 800, a different gif will appear
    if (window.innerWidth < 800){
        nameTroll.style.display = "none";
        nameTrollScreenDecrease.style.display = "block";
    }
    

    //In case the image gif doesn't load "WIDE PUTIN" (I don't think I made it work)
    nameTroll.onerror = function (){
        nameTroll.style.display = "none";
        nameTroll.innerHTML = "WIDE PUTIN";
    }

    //Increasing padding-bottom so the page accompanies the gif image
    let nameArticleHeight = document.querySelector("#nameArticle");
    nameArticle.style.paddingBottom = 40 + "%";

    //Title changes after prompt is answered
    let titleChange = document.querySelector("#titleChange");
    titleChange.style.display = "none";

    let titleChange2 = document.querySelector("#titleChange2");
    //Another way of doing it would be the same as nameTroll.innerHTML (empty h2), but this time I used style.display to show the second title
    //titleChange2.innerHTML = "You really thought you could get away from wide putin?";
    titleChange2.style.display = "contents";

    //When the title changes/wide putin appears, in 4s scrollToTop
    if (titleChange2.style.display = "contents"){
        setTimeout(
        function scrollToTop(){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
        }, 4000);
    };

});

//  !Work in progress for the next exercise!
/*
const image_input = document.querySelector("#imageInput");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#displayImage").style.backgroundImage = `url(${uploaded_image})`;
    setInterval(function(){
        document.querySelector("#displayImage").style.backgroundImage = "url('./img/wideputin_3')";
    }, 5000);
  });
  reader.readAsDataURL(this.files[0]);
});
*/