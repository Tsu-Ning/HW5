$(document).ready(function () {
  $(".nextlink1").on("click", function (e) {
    var currentActiveImage = $(".image-shown1");
    var nextActiveImage = currentActiveImage.next();

    if (nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner1 img").first();
    }
    currentActiveImage
      .removeClass("image-shown1")
      .addClass("image-hidden1")
      .css("z-index", -10);
    nextActiveImage
      .addClass("image-shown1")
      .removeClass("image-hidden1")
      .css("z-index", 20);
    $(".carousel-inner1 img")
      .not([currentActiveImage, nextActiveImage])
      .css("z-index", 1);
      setCss()
    e.preventDefault();
  });

  $(".nextlink2").on("click", function (e) {
    var currentActiveImage = $(".image-shown2");
    var nextActiveImage = currentActiveImage.next();

    if (nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner2 img").first();
    }
    
    currentActiveImage
      .removeClass("image-shown2")
      .addClass("image-hidden2")
      .css("z-index", -10);
    nextActiveImage
      .addClass("image-shown2")
      .removeClass("image-hidden2")
      .css("z-index", 20);
    $(".carousel-inner2 img")
      .not([currentActiveImage, nextActiveImage])
      .css("z-index", 1);
      setCss()
    e.preventDefault();
  });

  $(".nextlink3").on("click", function (e) {
    var currentActiveImage = $(".image-shown3");
    var nextActiveImage = currentActiveImage.next();

    if (nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner3 img").first();
    }
    
    currentActiveImage
      .removeClass("image-shown3")
      .addClass("image-hidden3")
      .css("z-index", -10);
    nextActiveImage
      .addClass("image-shown3")
      .removeClass("image-hidden3")
      .css("z-index", 20);
    $(".carousel-inner3 img")
      .not([currentActiveImage, nextActiveImage])
      .css("z-index", 1);
      setCss()
    e.preventDefault();
  });

  $(".previouslink1").on("click", function (e) {
    var currentActiveImage = $(".image-shown1");
    var nextActiveImage = currentActiveImage.prev();

    if (nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner1 img").last();
    }

    currentActiveImage
      .removeClass("image-shown1")
      .addClass("image-hidden1")
      .css("z-index", -10);
    nextActiveImage
      .addClass("image-shown1")
      .removeClass("image-hidden1")
      .css("z-index", 20);
    $(".carousel-inner1 img")
      .not([currentActiveImage, nextActiveImage])
      .css("z-index", 1);
      setCss()
    e.preventDefault();
  });
  $(".previouslink2").on("click", function (e) {
    var currentActiveImage = $(".image-shown2");
    var nextActiveImage = currentActiveImage.prev();

    if (nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner2 img").last();
    }

    currentActiveImage
      .removeClass("image-shown2")
      .addClass("image-hidden2")
      .css("z-index", -10);
    nextActiveImage
      .addClass("image-shown2")
      .removeClass("image-hidden2")
      .css("z-index", 20);
    $(".carousel-inner2 img")
      .not([currentActiveImage, nextActiveImage])
      .css("z-index", 1);
      setCss()
    e.preventDefault();
  });
  $(".previouslink3").on("click", function (e) {
    var currentActiveImage = $(".image-shown3");
    var nextActiveImage = currentActiveImage.prev();

    if (nextActiveImage.length == 0) {
      nextActiveImage = $(".carousel-inner3 img").last();
    }

    currentActiveImage
      .removeClass("image-shown3")
      .addClass("image-hidden3")
      .css("z-index", -10);
    nextActiveImage
      .addClass("image-shown3")
      .removeClass("image-hidden3")
      .css("z-index", 20);
    $(".carousel-inner3 img")
      .not([currentActiveImage, nextActiveImage])
      .css("z-index", 1);
      setCss()
    e.preventDefault();
  });
  
});

function setCss() {
  $(".image-shown2").hover(
    () => {
      $(".carousel-text2").css("display", "block");
    },
    () => {
      $(".carousel-text2").css("display", "none");
    }
  );
  $(".image-shown1").hover(
    () => {
      $(".carousel-text1").css("display", "block");
    },
    () => {
      $(".carousel-text1").css("display", "none");
    }
  );
  $(".image-shown3").hover(
    () => {
      $(".carousel-text3").css("display", "block");
    },
    () => {
      $(".carousel-text3").css("display", "none");
    }
  );
}
setCss()

setInterval(()=>{
    $(".nextlink1").click()
    
    $(".nextlink2").click()
    $(".nextlink3").click()
    
},1500)

function setCarousel(){
    $(".carousel-inner1").on('click',()=>{
        $('.modal_img').toggleClass("active")
        $('body').toggleClass("active")
        let img = $(".image-shown1").attr('src')
        $('#modal_img_content').attr('src',img)
    })
    $(".carousel-inner2").on('click',()=>{
        $('.modal_img').toggleClass("active")
        $('body').toggleClass("active")
        let img = $(".image-shown2").attr('src')
        $('#modal_img_content').attr('src',img)
    })
    $(".carousel-inner3").on('click',()=>{
        $('.modal_img').toggleClass("active")
        $('body').toggleClass("active")
        let img = $(".image-shown3").attr('src')
        $('#modal_img_content').attr('src',img)
    })
}

$(".modal-close").on('click',()=>{
    $('.modal_img').toggleClass("active")
    $('body').toggleClass("active")
})
setCarousel()