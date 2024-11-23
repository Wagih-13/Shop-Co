import "./footerStyle.scss";
import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="subscribeBox">
            <h2>Subscribe to Our Newsletter</h2>
            <form>
              <div className="inputBox">
              <BsEnvelope />
              <input type="email" placeholder="Enter your email" />
              </div>
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footerLinks">
            <ul>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
            </ul>
            <ul>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
            </ul>
            <ul>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
            </ul>
            <ul>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
            </ul>
            <ul>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
              <li>helloooooo</li>
            </ul>
          </div>
          <div className="copyRights">
            <div>Shop.co © 2000-2023, All Rights Reserved</div>
            <div>
              <Image
                src="/images/method-1.png"
                width={50}
                height={30}
                alt="payMethod"
              />
              <Image
                src="/images/method-2.png"
                width={50}
                height={30}
                alt="payMethod"
              />
              <Image
                src="/images/method-3.png"
                width={50}
                height={30}
                alt="payMethod"
              />
              <Image
                src="/images/method-4.png"
                width={50}
                height={30}
                alt="payMethod"
              />
              <Image
                src="/images/method-5.png"
                width={50}
                height={30}
                alt="payMethod"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
