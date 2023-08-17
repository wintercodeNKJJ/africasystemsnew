import React from "react";
import { Contactfrom } from "../components/intex";

const Contact = () => {
  return (
    <>
      <section>
        <div className="contact-intro">
          <h1>Do you have a project, share with us</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            assumenda quidem, ducimus explicabo, ad et molestias repudiandae
            nihil culpa optio dicta maiores? Numquam modi, a officiis quisquam
            incidunt blanditiis officia.
          </p>
        </div>
      </section>
      <Contactfrom />

      <section id="map">
        <div className="map">
          <h1>How to find us</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8904535688002!2d9.70221231532612!3d4.04277094813507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128d71ccd2df%3A0xe0f23721bbb97c48!2sFokou%20Douche!5e0!3m2!1sfr!2scm!4v1630658086620!5m2!1sfr!2scm"
            title="map"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
