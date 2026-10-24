document.addEventListener("DOMContentLoaded", () => {

  const candles =
    document.querySelectorAll(".candle");

  const blowBtn =
    document.getElementById("blowBtn");

  const wishMessage =
    document.getElementById("wishMessage");

  const petalLayer =
    document.getElementById("petals");

  const fireworkLayer =
    document.getElementById("fireworks");


  let blown = false;


  /* klik tombol atau klik lilin */

  blowBtn.addEventListener("click", blow);

  candles.forEach((candle) => {

    candle.addEventListener("click", blow);

  });


  /* =================================
     TIUP LILIN
  ================================= */

  function blow() {

    if (blown) {

      return;

    }

    blown = true;

    blowBtn.classList.add("hide");


    /* api padam satu per satu */

    candles.forEach((candle, index) => {

      setTimeout(() => {

        candle.classList.add("out");

      }, index * 220);

    });


    const finish = candles.length * 220;


    /* ucapan + kelopak */

    setTimeout(() => {

      wishMessage.classList.add("show");

      startPetals();

    }, finish + 400);


    /* kembang api */

    setTimeout(() => {

      startFireworks();

    }, finish + 1200);


    /* pindah otomatis ke halaman ucapan */

    setTimeout(() => {

      window.location.href = "bloom.html";

    }, finish + 5000);

  }


  /* =================================
     KEMBANG API
  ================================= */

  function startFireworks() {

    let bursts = 0;

    const timer = setInterval(() => {

      spawnBurst();

      bursts = bursts + 1;

      if (bursts > 14) {

        clearInterval(timer);

      }

    }, 420);

  }


  function spawnBurst() {

    const colors = [
      "#ffd166",
      "#f3944b",
      "#e6b7c6",
      "#b8c2c7",
      "#dfe6e9",
      "#61798a"
    ];


    const burst =
      document.createElement("div");

    burst.className = "burst";

    burst.style.left =
      10 + Math.random() * 80 + "%";

    burst.style.top =
      8 + Math.random() * 35 + "%";


    const count =
      12 + Math.floor(Math.random() * 8);


    for (let i = 0; i < count; i++) {

      const spark =
        document.createElement("span");

      spark.className = "spark";


      const angle =
        Math.random() * Math.PI * 2;

      const distance =
        40 + Math.random() * 70;


      const color =
        colors[
          Math.floor(
            Math.random() * colors.length
          )
        ];


      spark.style.setProperty(
        "--tx",
        Math.cos(angle) * distance + "px"
      );

      spark.style.setProperty(
        "--ty",
        Math.sin(angle) * distance + "px"
      );

      spark.style.background = color;

      spark.style.boxShadow =
        "0 0 6px " + color;

      spark.style.animationDuration =
        0.8 + Math.random() * 0.5 + "s";


      burst.appendChild(spark);

    }


    fireworkLayer.appendChild(burst);


    setTimeout(() => {

      burst.remove();

    }, 1600);

  }


  /* =================================
     HUJAN KELOPAK
  ================================= */

  function startPetals() {

    const colors = [
      "#dfe6e9",
      "#cfd9de",
      "#e8e2d9",
      "#b8c2c7",
      "#e6dce4"
    ];

    let count = 0;

    const timer = setInterval(() => {

      spawnPetal(colors);

      count = count + 1;

      if (count > 40) {

        clearInterval(timer);

      }

    }, 130);

  }


  function spawnPetal(colors) {

    const petal =
      document.createElement("div");

    petal.className = "petal";


    const size =
      10 + Math.random() * 10;


    petal.style.left =
      Math.random() * 100 + "%";

    petal.style.width =
      size + "px";

    petal.style.height =
      size + "px";

    petal.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    petal.style.animationDuration =
      5 + Math.random() * 4 + "s";

    petal.style.animationDelay =
      Math.random() * 1.5 + "s";


    petalLayer.appendChild(petal);


    setTimeout(() => {

      petal.remove();

    }, 12000);

  }

});
