<section class="hero">
    
    <div class="hero__overlay"></div> {{-- For mobile devices --}}

    <div class="hero__content">
        <section class="section-gallery">
            <div class="swiper-container">        <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    {{-- @for ($i = 1; $i <= 5; $i++)     --}}
                        <div class="swiper-slide">
                            <img src="/assets/images/hero/1.jpg" alt="Pomar">
                        </div>
        
                        <div class="swiper-slide">
                            <img src="/assets/images/hero/2.jpg" alt="Pomar">
                        </div>

                        <div class="swiper-slide">
                            <img src="/assets/images/hero/3.jpg" alt="Pomar">
                        </div>

                        <div class="swiper-slide">
                            <img src="/assets/images/hero/4.jpg" alt="Pomar">
                        </div>
                    {{-- @endfor --}}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </section>

        <div class="hero__form">
            <div class="hero__form__title">
                <h2 id="title-gallery">
                    Un gran desarrollo de vivienda en Cajicá
                </h2>
                <h3>
                    Inscríbete y sé pionero <br> en este macroproyecto.
                </h3>
            </div>
            <form id="form-register">
                <input type="text" name="name" class="form-field" placeholder="Nombre" required>
                <input type="text" name="last_name" class="form-field" placeholder="Apellido" required>
                <input type="email" name="email" class="form-field" placeholder="Correo electrónico" required>
                <input type="tel" name="telephone" class="form-field" placeholder="Teléfono" required>
                
                <label class="hero__form__terms">
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
                <button class="btn secondary" id="button-submit">Enviar</button>
            </form>
        </div>
    </div>

</section>

