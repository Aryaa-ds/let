document.addEventListener("DOMContentLoaded", () => {

  const flowers =
    document.querySelectorAll(".flower");

  const closing =
    document.getElementById("closing");


  let opened = 0;


  /* =================================
     TAP UNTUK MEKAR
  ================================= */

  flowers.forEach((flower) => {

    flower.addEventListener("click", () => {

      /* sudah mekar -> abaikan */

      if (flower.classList.contains("open")) {

        return;

      }

      flower.classList.add("open");

      opened = opened + 1;


      /* semua bunga sudah mekar */

      if (opened === flowers.length) {

        setTimeout(() => {

          closing.classList.add("show");

        }, 500);

      }

    });

  });

});
