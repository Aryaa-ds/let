document.addEventListener("DOMContentLoaded", () => {

  const calendar =
    document.getElementById("calendar");

  const letter =
    document.getElementById("letter");

  const typedText =
    document.getElementById("typedText");

  const nextButton =
    document.getElementById("nextButton");

  const viewLetterButton =
    document.getElementById("viewLetterButton");

  const fullLetterDialog =
    document.getElementById("fullLetterDialog");

  const fullLetterText =
    document.getElementById("fullLetterText");

  const closeLetterButton =
    document.getElementById("closeLetterButton");


  /* =================================
     ISI SURAT
  ================================= */

  const lines = [

    {
      text: "untuk Alida, seseorang yang kehadirannya punya tempat tersendiri dalam hidupku.",
      type: "first"
    },

    {
      text: "aku nggak tahu kapan tepatnya kamu mulai menjadi seseorang yang begitu berarti buat aku. yang aku tahu, semakin lama aku mengenal kamu, semakin banyak hal tentang dirimu yang aku pelajari. bukan cuma tentang hal-hal yang aku suka dari kamu, tapi juga tentang kebiasaanmu, cara kamu berpikir, hal-hal yang bikin kamu senang, bahkan hal-hal kecil yang terkadang bikin kita berbeda pendapat.",
      type: "normal"
    },

    {
      text: "dan ternyata, mengenal seseorang lebih dalam itu bukan cuma tentang mengetahui banyak hal tentangnya. tapi juga tentang belajar memahami bahwa dia punya isi kepala, perasaan, dan cara melihat dunia yang mungkin nggak selalu sama dengan kita.",
      type: "normal"
    },
    {
      text: "selama kita berjalan sejauh ini, aku sadar kalau aku masih punya banyak hal yang perlu aku pelajari. aku belum selalu bisa menyampaikan perasaanku dengan baik. terkadang aku memilih diam ketika ada sesuatu yang mengganjal, terkadang aku terlalu banyak berpikir, dan terkadang aku baru menyadari apa yang sebenarnya aku rasakan setelah semuanya menumpuk di pikiranku.",
      type: "normal"
    },
    {
      text: "aku tahu kita sama-sama punya kekurangan. ada sifatku yang mungkin terkadang sulit kamu pahami, dan ada hal-hal darimu yang masih perlu aku pelajari cara menyikapinya. aku nggak berharap kita selalu sepemikiran, karena menurutku kedekatan bukan berarti dua orang harus menjadi sama dalam segala hal.",
      type: "normal"
    },
    {
      text: "terima kasih karena sudah menjadi bagian dari cerita hidupku. terima kasih untuk hal-hal kecil yang mungkin buatmu biasa saja, tetapi ternyata meninggalkan kesan buatku. terima kasih untuk percakapan kita, tawa kita, perbedaan pendapat kita, dan kesempatan-kesempatan yang membuatku belajar mengenalmu lebih jauh.",
      type: "normal"
    },
    {
      text: "kamu adalah kamu, dengan segala hal yang membentuk dirimu. dan aku adalah aku, yang masih terus belajar memahami diriku sendiri. aku nggak ingin kita kehilangan siapa diri kita demi menjadi pasangan yang terlihat sempurna. aku ingin kita tumbuh menjadi dua orang yang lebih dewasa, yang bisa saling menyayangi tanpa melupakan pentingnya menghargai diri sendiri.",
      type: "normal"
    },
    {
      text: "jaga dirimu baik-baik, yaa, sayang. semoga di mana pun kehidupan membawamu nanti, kamu tetap punya keberanian untuk menjadi dirimu sendiri, tetap percaya pada hal-hal baik yang sedang kamu usahakan, dan nggak pernah merasa bahwa kamu harus menjadi sempurna untuk layak dihargai. dan semoga, selama kita masih berjalan berdampingan, kita bisa terus menemukan alasan untuk memahami, menghargai, dan memilih satu sama lain dengan hati yang lebih dewasa.",
      type: "normal"
    }

  ];


  let lineIndex = 0;

  let charIndex = 0;


  /* =================================
     TYPEWRITER
  ================================= */

  function typeWriter() {

    if (lineIndex >= lines.length) {

      typedText.classList.remove(
        "typing-cursor"
      );

      lines.forEach((line) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = line.text;

        if (line.type === "first") {
          paragraph.className = "first-line";
        }

        fullLetterText.appendChild(paragraph);
      });

      setTimeout(() => {

        nextButton.classList.add("show");

      }, 800);

      return;
    }


    const currentLine =
      lines[lineIndex];


    /* buat paragraph */

    if (charIndex === 0) {

      const paragraph =
        document.createElement("p");

      if (currentLine.type === "first") {

        paragraph.className =
          "first-line";

      }

      typedText.appendChild(
        paragraph
      );
    }


    const paragraphs =
      typedText.querySelectorAll("p");


    const currentParagraph =
      paragraphs[
        paragraphs.length - 1
      ];


    currentParagraph.textContent +=
      currentLine.text.charAt(
        charIndex
      );


    charIndex++;


    /* lanjut huruf */

    if (
      charIndex <
      currentLine.text.length
    ) {

      setTimeout(
        typeWriter,
        38
      );

    }

    /* selesai satu kalimat */

    else {

      lineIndex = lineIndex + 1;

      charIndex = 0;

      setTimeout(
        typeWriter,
        650
      );

    }

  }

  viewLetterButton.addEventListener("click", () => {
    fullLetterDialog.showModal();
  });

  closeLetterButton.addEventListener("click", () => {
    fullLetterDialog.close();
  });


  /* =================================
     ANIMATION SEQUENCE
  ================================= */


  /*
      0.0
      halaman tampil

      1.8
      kalender hilang

      2.6
      amplop muncul

      3.6
      flap terbuka

      4.8
      kertas keluar

      6.2
      mulai mengetik
  */


  setTimeout(() => {


    /* =========================
       KALENDER HILANG
    ========================= */

    calendar.classList.add(
      "hide"
    );


    setTimeout(() => {


      /* =========================
         AMPLOP MUNCUL
      ========================= */

      letter.classList.add(
        "show"
      );


      setTimeout(() => {


        /* =========================
           AMPLOP TERBUKA
        ========================= */

        letter.classList.add(
          "open"
        );


        setTimeout(() => {


          /* =========================
             KERTAS KELUAR
          ========================= */

          letter.classList.add(
            "paper-out"
          );


          setTimeout(() => {


            /* =========================
               MULAI MENGETIK
            ========================= */

            typedText.classList.add(
              "typing-cursor"
            );

            typeWriter();


          }, 1200);


        }, 1100);


      }, 900);


    }, 800);


  }, 1800);

});