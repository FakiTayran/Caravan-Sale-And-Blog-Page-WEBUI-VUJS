<template>
  <div>
    <section class="page-section" id="iletisim">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">
            Bİzİmle İletİşİme Geçİn
          </h2>
          <h3 class="section-subheading text-muted">
            Hertürlü Sorunuzu Bize iletebilir Fiyat Teklifi Alabilirsiniz
          </h3>
        </div>
        <form id="contactForm">
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  v-model="form.Name"
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="İsim *"
                  required="required"
                />
                <p class="help-block text-danger"></p>
              </div>
              <div class="form-group">
                <input
                  v-model="form.Email"
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="Email *"
                  required="required"
                />
                <p class="help-block text-danger"></p>
              </div>
              <div class="form-group mb-md-0">
                <input
                  v-model="form.Phone"
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Telefon *"
                  required="required"
                />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                <textarea
                  v-model="form.Message"
                  class="form-control"
                  id="message"
                  placeholder="Mesajnız... *"
                  required="required"
                ></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div class="text-center">
            <div id="success"></div>
            <button
              class="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="submit"
              @click="submitMessage"
            >
              Mesaj Gönder
            </button>
            <v-chip color=""><a class="link-dark text-decoration-none me-3" href = "#"><v-icon color="primary">mdi-phone</v-icon>  +90 534 489 66 68</a></v-chip>
          </div>
        </form>
      </div>
    </section>
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">
            Copyright &copy; ArıduruSoftware
            <!-- This script automatically adds the current year to your website footer-->
            <!-- (credit: https://updateyourfooter.com/)-->
          </div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/11feetkaravan" target="_blank"
            ><i class="fab fa-instagram"></i
            ></a>
            <a class="btn btn-dark btn-social mx-2" href="#!"
            ><i class="fab fa-youtube"></i
            ></a>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="#!"
            >Gizlilik Sözleşmesi</a
            >
            <a class="link-dark text-decoration-none" href="#!"
            >Kullanım Koşulları</a
            >
          </div>
          <div class="text-center">

            <v-chip color=""><a class="link-dark text-decoration-none me-3" href = "mailto:info@11feet.org"><v-icon color="primary">mdi-email</v-icon>  info@11feet.org</a></v-chip>
            <v-chip color=""><a class="link-dark text-decoration-none me-3" href = "#"><v-icon color="primary">mdi-phone</v-icon>  +90 534 489 66 68</a></v-chip>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import {eventBus} from "../../main";
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        Name: "",
        Email: "",
        Phone: "",
        Message: ""
      }
    }
  },
  created() {
    eventBus.$on("dateSelected", (data) => {
      this.form.Message = data + " tarih ve saatte karavanımın tasarımı için reservasyon yaptırmak istiyorum."
      document.getElementById("name").focus()
    })
  },
  methods: {
    submitMessage() {
      axios.post("https://localhost:44335/api/Mail/MailSender",
        {ToMail:"info@elevenfeet.org",FromMail:this.form.Email,
          NameSurname:this.form.Name,Phone:this.form.Phone,Message:this.form.Message}).then(res=>{
            console.log(res);
      })
    }
  }
}
</script>
