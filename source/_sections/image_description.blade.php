<section class="hero">
    <div class="hero__content">
        <section class="section-gallery section-gallery--hero">
            <img src="/assets/images/aliso/hero.jpg" class="hero-aliso" alt="Pomar">
        </section>

        <div class="hero__form hero__form--aliso">
            <div class="hero__form__title hero__form__title--aliso">
                <img src="/assets/images/aliso/logo.svg" alt="">
                <h2 >
                    Apartamentos con diseño único, balcón y ascensor
                </h2>
                <h3>
                    Inscríbete para más información.
                </h3>
            </div>
            <form id="form-register-aliso">
                <input type="text" name="name" class="form-field" placeholder="Nombre" required>
                <input type="text" name="last_name" class="form-field" placeholder="Apellido" required>
                <input type="email" name="email" class="form-field" placeholder="Correo electrónico" required>
                <input type="tel" name="telephone" class="form-field" placeholder="Teléfono" required>
                
                <label class="hero__form__terms hero__form__terms--aliso">
                    <input 
                        onchange="this.setCustomValidity(validity.valueMissing ? 'Debes aceptar tratamiento de mis datos personales, políticas de privacidad y los términos y condiciones' : '');" 
                        type="checkbox" 
                        required 
                        id="field_terms"
                        name="terms"
                    >
                    <span></span>
                    *Al aceptar el formulario estoy autorizando el <a href="https://drive.google.com/file/d/1IT8FgCHVIi9UyMTv1hoQ0nDkKpFXqPXq/view?usp=sharing" target="_blank" >tratamiento de mis datos personales*</a> , 
                    aceptando las políticas de privacidad y <a href="https://drive.google.com/file/d/1IT8FgCHVIi9UyMTv1hoQ0nDkKpFXqPXq/view?usp=sharing" target="_blank"">los términos y condiciones</a> 
                </label>
                <button class="btn secondary" id="button-submit-aliso">Enviar</button>
            </form>
            <br>
            <h3>O contáctanos vía telefónica al <br> 322 235 3198 / 322 235 3199</h3>
        </div>
    </div>
    {{-- <a class="btn secondary button-schedule" href="https://calendly.com/servicioalclientepomar/15min" >Agenda ya tu Cita</a> --}}
</section>

<a class='whatapp-button' href="https://api.whatsapp.com/send?phone=573222353198&text=Buen%20día,%20necesito%20más%20información" target="_blank">
    <img src="/assets/images/whatsapp-logo.svg" alt="" title=''>
</a>