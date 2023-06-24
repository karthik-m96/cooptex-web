import React from "react";
import "./Disclaimer.scss";

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <h1>PRIVACY POLICY</h1>
      <p>
        At Co-optex, we take great care and effort to present the sarees and
        other garments on our website to match their original color and
        grandeur. Our pictures are of very high quality, so it may take some
        time to download. We ask that you please be patient and allow the
        pictures to get completely downloaded before viewing or ordering. We
        always try to minimize color variations between the actual product and
        that displayed on the screen. However, the colors of the sarees and
        other garments shown on the web catalog may vary slightly from the
        original product due to various reasons like:
        <ul>
          <li>Variations in monitor resolution levels</li>
          <li>Having a poor VGA card (Display Card)</li>
          <li>
            Having the minimum color setting in your Monitor Display Properties.
          </li>
          <li>
            Setting the Brightness and Contrast levels of your monitor to low or
            high values
          </li>
        </ul>
      </p>
      <h2>Color Settings</h2>
      <p>
        <ul>
          <li>Set the Screen Resolution to 1366*768 pixels minimum</li>
          <li>
            Make your Monitor support more than 256 colors, by changing the
            Display settings.
          </li>
          <li>Set your Monitor Brightness value to 75% of Maximum value.</li>
        </ul>
        If you have any further clarifications, mail us at{" "}
        <a href="mailto: cooptexcustomercare@gmail.com">
          cooptexcustomercare@gmail.com.
        </a>
      </p>
    </div>
  );
};

export default Disclaimer;
