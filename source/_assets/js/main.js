const Swal = require("sweetalert2");

// Validate checkbox terms
if (document.getElementById("field_terms")) {
  document
    .getElementById("field_terms")
    .setCustomValidity(
      "Debes aceptar tratamiento de mis datos personales, políticas de privacidad y los términos y condiciones"
    );
}

const formRegister = document.getElementById("form-register");
const buttonSubmit = document.getElementById("button-submit");

if (formRegister) {
  formRegister.onsubmit = function(event) {
    event.preventDefault();

    var formData = new FormData(formRegister);

    buttonSubmit.innerHTML = "Enviado ...";
    buttonSubmit.setAttribute("disabled", "true");

    let name = formData.get("name");
    let email = formData.get("email");
    fetch(
      "https://script.google.com/macros/s/AKfycbwO8wJTKRVrxB3cBD9wOAH4oU7GWtJvNa8iw7uTZA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(data) {
        if (data.result === "success") {
          formRegister.reset();
          buttonSubmit.innerHTML = "Enviar";
          buttonSubmit.removeAttribute("disabled");

          !(function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
              n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
          );
          fbq("init", "340440140691384");
          fbq("track", "PageView");
          fbq("track", "CompleteRegistration");

          fetch(
            `https://us-central1-pomar-a7a82.cloudfunctions.net/date?email=${email}&name=${name}`
          )
            .then(function(response) {
              return response.json();
            })
            .then(function() {
              console.log("Mensaje enviado");
            })
            .catch(function(error) {
              console.log("Error", error);
            });

          Swal.fire({
            title: "Registro exitoso !",
            text: "",
            icon: "success",
            confirmButtonText: "Aceptar",
          });

          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "AW-615323089");

          gtag("event", "conversion", {
            send_to: "AW-615323089/fRWCCLiP5toBENGrtKUC",
          });
        }
      })
      .catch(function(err) {
        console.warn("Error.", err);
        buttonSubmit.innerHTML = "Enviar";
        buttonSubmit.removeAttribute("disabled");
        alert("Error", err);
      });
  };
}

// ------ Register Aliso

const formRegisterAliso = document.getElementById("form-register-aliso");
const buttonSubmitAliso = document.getElementById("button-submit-aliso");

if (formRegisterAliso) {
  formRegisterAliso.onsubmit = function(event) {
    event.preventDefault();

    var formData = new FormData(formRegisterAliso);

    buttonSubmitAliso.innerHTML = "Enviado ...";
    buttonSubmitAliso.setAttribute("disabled", "true");

    fetch(
      "https://script.google.com/macros/s/AKfycbxYg05IY9VaKS9dpca6Da-Oa8BdTWzQKEc59H1p/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data.result === "success") {
          formRegisterAliso.reset();
          buttonSubmitAliso.innerHTML = "Enviar";
          buttonSubmitAliso.removeAttribute("disabled");

          !(function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
              n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
          );
          fbq("init", "340440140691384");
          fbq("track", "PageView");
          fbq("track", "CompleteRegistration");

          Swal.fire({
            title: "Registro exitoso !",
            text: "",
            icon: "success",
            confirmButtonText: "Aceptar",
          });

          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "AW-615323089");

          gtag("event", "conversion", {
            send_to: "AW-615323089/fRWCCLiP5toBENGrtKUC",
          });
        }
      })
      .catch(function(err) {
        console.warn("Error.", err);
        buttonSubmitAliso.innerHTML = "Enviar";
        buttonSubmitAliso.removeAttribute("disabled");
        alert("Error", err);
      });
  };
}

import Swiper from "swiper/bundle";

var swiper = new Swiper(".swiper-container", {
  parallax: true,
  loop: true,

  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});

var swiper2 = new Swiper(".swiper-container-plant", {
  parallax: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-plant",
    prevEl: ".swiper-button-prev-plant",
  },
  pagination: {
    el: ".swiper-pagination-plant",
    clickable: true,
    renderBullet: function(index, className) {
      let name;
      if (index == 0) {
        name = "54m2";
      } else {
        name = "58m2";
      }
      return '<span class="' + className + '">' + name + "</span>";
    },
  },
});

const titlGallery = document.getElementById("title-gallery");
swiper.on("slideChange", function() {
  let text = "";
  console.log(swiper.realIndex);
  switch (swiper.realIndex) {
    case 0:
      text = "Un gran desarrollo de vivienda en Cajicá";
      titlGallery.innerHTML = text;
      return text;
    case 1:
      text =
        "Primera etapa: Aptos de 54.73m² <p>*Área privada 49.73m²</p> Aptos 58.30m² <br/> <p>*Área privada 52.48m²</p>  ";
      titlGallery.innerHTML = text;
      return text;
    case 2:
      text =
        "Un refugio verde, decar de todo y con las áreas más grandes del sector";
      titlGallery.innerHTML = text;
      return Text;
    case 3:
      text = "Aptos de interés social con subsidio";
      titlGallery.innerHTML = text;
      return Text;
    default:
      break;
  }
});

const map1 = document.getElementById("image-map-1");
const map2 = document.getElementById("image-map-2");
const map3 = document.getElementById("image-map-3");

map1.onclick = function() {
  map1.style.display = "none";
  map2.style.display = "block";
};

map2.onclick = function() {
  map2.style.display = "none";
  map3.style.display = "block";
};

map3.onclick = function() {
  map3.style.display = "none";
  map1.style.display = "block";
};
