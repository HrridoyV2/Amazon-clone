import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
      <div className="footer">
        <a href="#top">
          <p className="text-light bg-secondary text-center py-3 my-3" style={{maxWidth: "1350px"}}>
            Back to top
          </p>
        </a>
        <table className="table text-light">
          <thead>
            <th>Get to Know Us</th>
            <th>Make Money with Us</th>
            <th>Amazon Payment Products</th>
            <th>Let Us Help You</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-light">Careers</Link>
                  </li>
                  <li>
                    <Link className="text-light">Blog</Link>
                  </li>
                  <li>
                    <Link className="text-light">About Amazon</Link>
                  </li>
                  <li>
                    <Link className="text-light">Sustainability</Link>
                  </li>
                  <li>
                    <Link className="text-light">Investor Relations</Link>
                  </li>
                  <li>
                    <Link className="text-light">Amazon Devices</Link>
                  </li>
                  <li>
                    <Link className="text-light">Amazon Tours</Link>
                  </li>
                </ul>
              </td>

              <td>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-light">Sell products on Amazon</Link>
                  </li>
                  <li>
                    <Link className="text-light">Sell apps on Amazon</Link>
                  </li>
                  <li>
                    <Link className="text-light">Become an Affiliate</Link>
                  </li>
                  <li>
                    <Link className="text-light">Advertise Your Products</Link>
                  </li>
                  <li>
                    <Link className="text-light">Self-Publish with Us</Link>
                  </li>
                  <li>
                    <Link className="text-light">Host an Amazon Hub</Link>
                  </li>
                  <li>
                    <Link className="text-light">
                      ›See More Make Money with Us
                    </Link>
                  </li>
                </ul>
              </td>

              <td>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-light">Amazon Business Card</Link>
                  </li>
                  <li>
                    <Link className="text-light">Shop with Points</Link>
                  </li>
                  <li>
                    <Link className="text-light">Reload Your Balance</Link>
                  </li>
                  <li>
                    <Link className="text-light">
                      Amazon Currency Converter
                    </Link>
                  </li>
                </ul>
              </td>

              <td>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-light">Amazon and COVID-19</Link>
                  </li>
                  <li>
                    <Link className="text-light">Your Account</Link>
                  </li>
                  <li>
                    <Link className="text-light">Your Orders</Link>
                  </li>
                  <li>
                    <Link className="text-light">
                      Shipping Rates & Policies
                    </Link>
                  </li>
                  <li>
                    <Link className="text-light">Returns & Replacements</Link>
                  </li>
                  <li>
                    <Link className="text-light">
                      Manage Your Content and Devices
                    </Link>
                  </li>
                  <li>
                    <Link className="text-light">Amazon Assistant</Link>
                  </li>
                  <li>
                    <Link className="text-light">Help</Link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default Footer
