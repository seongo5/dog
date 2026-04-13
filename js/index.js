$(function () {
  //
  // con1_txt
  function txt_ani_on() {
    $(".con01 h2").stop().css({ transform: "translateX(0)", opacity: "1" });
    $(".con01 .p02").stop().css({ transform: "translateX(0)", opacity: "1" });
  }
  function txt_ani_off() {
    $(".con01 h2")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
    $(".con01 .p02")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
  }

  // con2_txt
  function txt2_ani_on() {
    $(".con02 h2").stop().css({ transform: "translateX(0)", opacity: "1" });
    $(".con02 .p02").stop().css({ transform: "translateX(0)", opacity: "1" });
  }
  function txt2_ani_off() {
    $(".con02 h2")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
    $(".con02 .p02")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
  }

  // con3_txt
  function txt3_ani_on() {
    $(".con03 h2").stop().css({ transform: "translateX(0)", opacity: "1" });
    $(".con03 .p02").stop().css({ transform: "translateX(0)", opacity: "1" });
  }
  function txt3_ani_off() {
    $(".con03 h2")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
    $(".con03 .p02")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
  }

  // con4_txt
  function txt4_ani_on() {
    $(".con04 h2").stop().css({ transform: "translateX(0)", opacity: "1" });
    $(".con04 .p02").stop().css({ transform: "translateX(0)", opacity: "1" });
  }
  function txt4_ani_off() {
    $(".con04 h2")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
    $(".con04 .p02")
      .stop()
      .css({ transform: "translateX(-10rem)", opacity: "0" });
  }

  //
  // header
  let visual = $("#visual").offset().top;
  // console.log(visual);
  $(window).on("scroll", function () {
    vis = $(this).scrollTop();

    base = 500;
    if (vis >= visual + base) {
      $("header").addClass("scroll");
      $("header h1 img").css({ display: "none" });
      $("header h1 img:nth-child(1)").css({ display: "block" });
    } else {
      $("header").removeClass("scroll");
      $("header h1 img").css({ display: "none" });
      $("header h1 img:nth-child(2)").css({ display: "block" });
    }
  });

  $("header h1").on("mouseenter", function () {
    $(this).stop().animate({ scale: "0.9" }, 100);
  });
  $("header h1").on("mouseleave", function () {
    $(this).stop().animate({ scale: "1" }, 100);
  });

  // mobile side menu bar
  $("header .mobile .menu").on("click", function () {
    $("header .side").show();
  });
  $("header .side .close").on("click", function () {
    $("header .side").hide();
  });

  //
  //
  // visual
  let total = $("#visual .bg li").length;
  // console.log(total);
  let i = 0;
  let = stop;

  start();
  $("#visual .bg .detail")
    .eq(i)
    .stop()
    .css({ transform: "translateX(0)", opacity: "1" });
  $("#visual h3")
    .eq(i)
    .stop()
    .css({ transform: "translateX(0)", opacity: "1" });
  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }

      fade();
    }, 5000);
  }

  function fade() {
    $("#visual .bg li").stop().fadeOut();
    $("#visual .bg li").eq(i).stop().fadeIn();
    $("#visual .but .dot li").removeClass("on");
    $("#visual .but .dot li").eq(i).addClass("on");
    $("#visual h3").css({ transform: "translateX(-5rem)", opacity: "0" });
    $("#visual h3")
      .eq(i)
      .stop()
      .css({ transform: "translateX(0)", opacity: "1" });
    $("#visual .bg .detail").css({
      transform: "translateX(-5rem)",
      opacity: "0",
    });
    $("#visual .bg .detail")
      .eq(i)
      .stop()
      .css({ transform: "translateX(0)", opacity: "1" });
  }

  $("#visual .prev").on("click", function () {
    clearInterval(stop);

    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    fade();
    start();
  });

  $("#visual .next").on("click", function () {
    clearInterval(stop);

    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    fade();
    start();
  });

  $("#visual .dot li").on("click", function () {
    clearInterval(stop);
    i = $(this).index(); //순번을 알아야 함

    fade();
    start();
  });

  // container -> con1

  $(window).on("scroll", function () {
    con1 = $(this).scrollTop();
    // console.log(con1);

    if (con1 >= 300) {
      txt_ani_on();
      $("#container .con01 .pic")
        .stop()
        .css({ transform: "translateY(0)", opacity: "1" });
    } else {
      txt_ani_off();
      $("#container .con01 .pic")
        .stop()
        .css({ transform: "translateY(10rem)", opacity: "0" });
    }
  });

  $(".pic_s li").on("click", function () {
    let i = 0;
    let s = $(this).index();
    $(".pic_s li").removeClass("on");
    $(this).eq(i).addClass("on");
    $(".pic_l li").hide();
    $(".pic_l li").eq(s).fadeIn();
  });

  $(".pic_l li").on("mouseenter", function () {
    $(this).find(".go").css({ "display:": "block" });
  });

  // container -> con02

  let stop2;

  start2();
  function start2() {
    stop2 = setInterval(function () {
      $(".adopt")
        .stop()
        .animate({ "margin-left": "-316px" }, function () {
          $(".adopt li:first-child").appendTo(".adopt");
          $(".adopt").css({ "margin-left": "0" });
        });
    }, 3000);
  }
  // click
  $(".con02 .next").on("click", function () {
    clearInterval(stop2);
    $(".adopt")
      .stop()
      .animate({ "margin-left": "-316px" }, function () {
        $(".adopt li:first-child").appendTo(".adopt");
        $(".adopt").css({ "margin-left": "0" });
      });
    start2();
  });

  $(".con02 .prev").on("click", function () {
    clearInterval(stop2);
    $(".adopt li:last-child").prependTo(".adopt");
    $(".adopt").css({ "margin-left": "-316px" });
    $(".adopt").stop().animate({ "margin-left": "0" });
    start2();
  });

  let con02 = $(".con02").offset().top - 700;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(con2);
    if (scroll >= con02) {
      txt2_ani_on();
      $("#container .con02").stop().css({ transform: "translateX(0)" });
      $("#container .con02 .wrap")
        .stop()
        .css({ transform: "translateY(0)", opacity: "1" });
    } else {
      txt2_ani_off();
      $("#container .con02").stop().css({ transform: "translateX(-100%)" });
      $("#container .con02 .wrap")
        .stop()
        .css({ transform: "translateY(5rem)", opacity: "0" });
    }
  });

  // container -> con03

  let con03 = $(".con03").offset().top - 700;
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(con3);

    if (scroll >= con03) {
      txt3_ani_on();
      $("#container .con03 .left")
        .stop()
        .css({ transform: "translateX(0)", opacity: "1" });
    } else {
      txt3_ani_off();
      $("#container .con03 .left")
        .stop()
        .css({ transform: "translateX(-10rem)", opacity: "0" });
    }

    if (scroll >= con03 + 300) {
      $("#container .con03 .right ul li:nth-child(odd)")
        .stop()
        .css({ transform: "translateY(0)", opacity: "1" });
      $("#container .con03 .right ul li:nth-child(even)")
        .stop()
        .css({ transform: "translateY(10rem)", opacity: "1" });
    } else {
      $("#container .con03 .right ul li:nth-child(odd)")
        .stop()
        .css({ transform: "translateY(10rem)", opacity: "0" });
      $("#container .con03 .right ul li:nth-child(even)")
        .stop()
        .css({ transform: "translateY(20rem)", opacity: "0" });
    }
  });

  // container -> con04

  let con04 = $(".con04").offset().top - 700;
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(con4);

    if (scroll >= con04) {
      txt4_ani_on();
      $("#container .con04 .report").stop().css({ gap: "0", opacity: "1" });
    } else {
      txt4_ani_off();
      $("#container .con04 .report").stop().css({ gap: "10rem", opacity: "0" });
    }
  });

  // container -> con05
  let con05 = $(".con05").offset().top - 600; // 위치값 (살짝 위에서 시작하게 -600)
  let timer; // 타이머를 담을 변수

  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();

    if (scroll >= con05) {
      // [추가] 타이머가 이미 돌고 있다면 중복 방지를 위해 먼저 정지시킨다!
      clearInterval(timer);

      let num1 = 0;
      let num2 = 0;
      let num3 = 0;

      let end1 = 1234;
      let end2 = 567;
      let end3 = 8910;

      let count = 0; // [오타수정] conunt -> count

      timer = setInterval(function () {
        num1 += 21;
        num2 += 11;
        num3 += 161;

        // [추가] 숫자가 목표치를 넘지 않게 하는 안전장치
        if (num1 > end1) num1 = end1;
        if (num2 > end2) num2 = end2;
        if (num3 > end3) num3 = end3;

        $(".count1").text(num1);
        $(".count2").text(num2);
        $(".count3").text(num3);

        count++; // [오타수정] conunt -> count

        if (count >= 100) {
          $(".count1").text(end1);
          $(".count2").text(end2);
          $(".count3").text(end3);

          clearInterval(timer);
        }
      }, 40);
    } else {
      // [추가] 섹션보다 위로 올라갔을 때 숫자를 0으로 초기화 (되돌리기 기능)
      clearInterval(timer);
      $(".count1").text(0);
      $(".count2").text(0);
      $(".count3").text(0);
    }
  });
});

//
