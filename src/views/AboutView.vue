<template>
  <div class="about-page container">
    <h1 class="about-page__title">Abut this app:</h1>

    <h2 class="about-page__subtitle">Validation</h2>
    <ul class="list">
      <li>All fields are **required**</li>
      <li>name - should be 2-60 characters</li>
      <li>email - must be a valid email according to RFC2822</li>
      <li>
        phone number - must start with Ukraine code +380. "(" ")" and spaces are
        not allowed. But in design we have these symbols. usually i would talk
        about it with a manager, but there is no manager here, so I will assume
        that the requirements in the documentation are more important than the
        design
      </li>
      <li>
        photo - user photo should be jpg/jpeg image, with resolution at least
        70x70px and size must not exceed 5MB.
      </li>
    </ul>
    <h2 class="about-page__subtitle">Pixel Perfect</h2>
    <figure class="about-page__figure">
      <img
        loading="lazy"
        class="about-page__image"
        src="@/assets/images/360.jpg"
        alt="360px resolution"
        title="PP for 360px"
      />
      <figcaption class="about-page__figcaption">PP for 360px</figcaption>
    </figure>
    <figure class="about-page__figure">
      <img
        loading="lazy"
        class="about-page__image"
        src="@/assets/images/768.jpg"
        alt="768px resolution"
        title="PP for 768px"
      />
      <figcaption class="about-page__figcaption">PP for 768px</figcaption>
    </figure>
    <figure class="about-page__figure">
      <img
        loading="lazy"
        class="about-page__image"
        src="@/assets/images/1024.jpg"
        alt="1024x resolution"
        title="PP for 1024px"
      />
      <figcaption class="about-page__figcaption">PP for 1024px</figcaption>
    </figure>
    <figure class="about-page__figure">
      <img
        loading="lazy"
        class="about-page__image"
        src="@/assets/images/2560.jpg"
        alt="2560px resolution"
        title="PP for 2560px"
      />
      <figcaption class="about-page__figcaption">PP for 2560px</figcaption>
    </figure>
    <h2 class="about-page__subtitle">Optimization</h2>

    <figure class="about-page__figure">
      <img
        loading="lazy"
        class="about-page__image"
        src="@/assets/images/pc.jpg"
        alt="Optimization on desktop "
        title="Optimization on desktop"
      />
      <figcaption class="about-page__figcaption">
        Optimization for desktop
      </figcaption>
    </figure>
    <figure class="about-page__figure">
      <img
        loading="lazy"
        class="about-page__image"
        src="@/assets/images/mob.jpg"
        alt="Optimization on mobile"
        title="Optimization on mobile"
      />
      <figcaption class="about-page__figcaption">
        Optimization for mobile
      </figcaption>
    </figure>

    <figure class="about-page__figure">
      <img
        loading="lazy"
        class="about-page__image"
        src="@/assets/images/mob-seo.jpg"
        alt="Optimization on mobile"
        title="Optimization on mobile"
      />
      <figcaption class="about-page__figcaption">
        SEO is not in the green zone because elements are smaller than they
        should be according to Google's page speed guidelines. I can fix it, but
        this requires approval from the manager , but if you require a perfect
        pixel and I don't have a manager or designer on this project, I'll leave
        it as it is
      </figcaption>
    </figure>
  </div>
</template>
