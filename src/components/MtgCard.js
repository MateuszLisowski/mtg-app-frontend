import React from "react";
import "./mtgCard.css";

export const MtgCard = ({ name, types, keywords, text, attack, defense }) => (
  <>
    <div class="card-container">
      <div class="card-background">
        <div class="card-frame">
          <div class="frame-header">
            <h1 class="name">{name}</h1>
            <i class="ms ms-g" id="mana-icon" />
          </div>

          <img
            class="frame-art"
            src="https://image.ibb.co/fqdLEn/nissa.jpg"
            alt="nissa art"
          />

          <div class="frame-type-line">
            <h1 class="type">{types}</h1>
            <img
              src="https://image.ibb.co/kzaLjn/OGW_R.png"
              id="set-icon"
              alt="OGW-icon"
            />
          </div>

          <div class="frame-text-box">
            {keywords && <p class="description ftb-inner-margin">{keywords}</p>}
            <p class="description">{text}</p>
          </div>

          <div class="frame-bottom-info inner-margin">
            <div class="fbi-left">
              <p>122/184 R</p>
            </div>

            <div class="fbi-center" />

            <div class="fbi-right">
              &#x99; &amp; &#169; 2016 Wizards of the Coast
            </div>
          </div>
          {(attack || defense) && (
            <span className="attackDefenseBox">
              <span>{attack ? attack : "*"}</span>/
              <span>{defense ? defense : "*"}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  </>
);
